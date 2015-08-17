'use strict';
var amqp = require('amqp');
var config = require('../../config');

module.exports = amqp.createConnection(config.amqp.connection, {
    reconnect: true
});
