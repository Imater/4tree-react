'use strict';

require('./services');
var express = require('express');
var app = express();
var amqp = require('amqp');
var config = require('./config');
var async = require('async');
var logger = require('./config/logger');
var server = require('http')
    .createServer(app);
require('./config/express')(app);

function startServer(cb){
    require('./common/auth').registerToApp(app);
    require('./routes')(app);
    require('./common/auth').registerErrorHandler(app);
    require('./common/error-handler').registerErrorHandler(app);
    server.listen(config.server.port, config.server.address, function(){
        logger.trace('| Server started on: ' + config.server.address + ':' + config.server.port + ' ('+ Date() +')');
        cb(null);
    });
}

function connectServices(callback){
    async.eachSeries(config.startServices, function(serviceName, cb){
        if(serviceName === 'app') {
            startServer(cb);
        } else {
            new require('./services/'+serviceName)();
            cb(null);
        }
    },
    function(err){
        callback(err);
    });
}

function connectQueue(cb){
    var canRunOnce = true;
    amqp.connection.on('ready', function(){
        if(canRunOnce){
            canRunOnce = false;
            cb(null);
        }
    });
    amqp.connection.on('error', function(err){
        logger.error('rabbitmq error', err);
    });
}

function initServer(cb) {
    amqp.connection = require('./common/amqp/amqp-connect');
    async.waterfall([
        connectQueue,
        connectServices
    ], function(err){
        if(!err) {
            logger.trace('| Queue services started:' + config.startServices.join(', '));
            cb();
        }
    });
}

function closeServer (cb){
    server.close();
    amqp.connection.disconnect();
    amqp.connection.on('end', function(){
        cb();
    });
}


module.exports = {
    initServer: initServer,
    closeServer: closeServer
};
