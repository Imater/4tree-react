'use strict';

var express = require('express');
var router = express.Router();
var config = require('../config');
var rpc = require('../common/amqp/amqp-rpc');
var request = require('supertest');
var security = require('../common/security');

function installRoute(app) {
    var oauth = app.oauth.authorise();
    router.get('/tree', rpc.query('get/db/tree'));

    return router;
}

module.exports = function(app) {
    return installRoute(app);
};
