'use strict';
var rpc = require('../../common/amqp/amqp-rpc');
var tree = require('./tree.js');

function DbService() {
    rpc.on('get/db/tree', tree.getAllTree);
}

module.exports = DbService;
