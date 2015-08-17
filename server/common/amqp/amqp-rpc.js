'use strict';
//connected to queue rpc
var amqp = require('amqp');
var Rpc = require('./amqp-rpc-class');
module.exports = new Rpc(amqp.connection);
