'use strict';
var _ = require('lodash');
var logger = require('../../config/logger');
var AmqpRpc, CONTENT_TYPE, TIMEOUT, amqp, crypto, exports;

AmqpRpc = function(connection) {
    var self;
    self = this;
    this.connection = connection;
    this.requests = {};
    this.response_queue = false;
};

amqp = require("amqp");

crypto = require("crypto");

TIMEOUT = 12000;

CONTENT_TYPE = "application/json";

exports = module.exports = AmqpRpc;

AmqpRpc.prototype.call = function(queue_name, content, callback) {
    var correlationId, entry, self, tId;
    self = this;
    correlationId = crypto.randomBytes(16).toString("hex");
    tId = setTimeout(function(corr_id) {
        callback(new Error("timeout " + corr_id));
        delete self.requests[corr_id];
    }, TIMEOUT, correlationId);
    entry = {
        callback: callback,
        timeout: tId
    };
    self.requests[correlationId] = entry;
    self.setupResponseQueue(function() {
        self.connection.publish(queue_name, content, {
            correlationId: correlationId,
            contentType: CONTENT_TYPE,
            headers: {
                startTime: Date.now()
            },
            replyTo: self.response_queue
        });
    });
};

AmqpRpc.prototype.setupResponseQueue = function(next) {
    var self;
    if (this.response_queue) {
        return next();
    }
    self = this;
    self.connection.queue("", {
        exclusive: true
    }, function(q) {
        self.response_queue = q.name;
        q.subscribe(function(message, headers, deliveryInfo, m) {
            var correlationId, entry;
            correlationId = m.correlationId;
            if (correlationId in self.requests) {
                entry = self.requests[correlationId];
                clearTimeout(entry.timeout);
                delete self.requests[correlationId];
                var args = _.toArray(message.body);
                args.push(message.deliveryInfo);
                entry.callback.apply(this, args);
            }
        });
        return next();
    });
};

AmqpRpc.prototype.on = function(listenPath, replyFn) {
    var self = this;
    return self.connection.queue(listenPath, function(q) {
        return q.subscribe(function(message, headers, deliveryInfo, m) {
            var tm = Date.now() - headers.startTime;
            return replyFn(message, function() {
                arguments[0] = arguments[0] || null;
                logger.trace(listenPath, message);
                if (arguments[0]) {
                    logger.error(listenPath, arguments[0]);
                }
                return self.connection.publish(m.replyTo, {
                    body: arguments,
                    deliveryInfo: {
                        ms: tm,
                        consumer: deliveryInfo.consumerTag
                    }
                }, {
                    contentType: m.contentType,
                    contentEncoding: "utf-8",
                    correlationId: m.correlationId
                });
            });
        });
    });
};

AmqpRpc.prototype.query = function(listenPath, resFn) {
    var self = this;
    return function(req, res, next) {
        self.call(listenPath, {
            body: req.body,
            query: req.query,
            params: req.params,
            user: req.user,
            files: req.files
        }, function(err, result) {
            if (resFn) {
                return resFn(err, req, res, result);
            }
            if (!err) {
                res.status(200).send(result);
            } else {
                next(err);
            }
        });
    };
};
