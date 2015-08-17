'use strict';

var async = require('async');
var config = require('../config');
var db = require('../models');
var logger = require('../config/logger');
var hash = require('../common/hash');
var rmdir = require('rimraf');
var uuid = require('node-uuid');
var request = require('supertest');

if (config.env === 'production') {
    throw new Error('cant remove all in production');
}

function initDb(options, callback) {
    logger.trace('init script started');

    var series = [];

    series.push(function(cb) {
        rmdir(config.file.uploadDir, function(err) {
            cb(err);
        });
    });

    series.push(function(cb) {
        db.sequelize.sync().complete(function() {
            logger.trace('sync tables finished');
            setTimeout(function() {
                cb();
            }, 0);
        });
    });

    series.push(function(cb) {
        db.sequelize.drop().complete(function() {
            logger.trace('drop tables finished!!!');
            setTimeout(function() {
                cb();
            }, 0);
        });
    });

    series.push(function(cb) {
        db.sequelize.sync({
            force: true
        }).complete(function() {
            logger.trace('sync and create tables finished');
            setTimeout(function() {
                cb();
            }, 0);
        });
    });

    series.push(function(cb) {
        logger.trace('start add oauthClient');
        db.models.oauthClient.create({
            id: config.security.clientApp.client_id,
            value: config.security.clientApp.client_name,
            secret: config.security.clientApp.client_secret,
            redirectUri: '/login'
        }).complete(function(err) {
            cb(err);
        });
    });

    async.series(series, function() {
        logger.trace('init script done');
        callback();
    });
}

module.exports = initDb;
