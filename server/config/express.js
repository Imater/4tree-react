'use strict';

var express = require('express');
var config = require('./index');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function (app){
    //CORS middleware
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
    app.use(allowCrossDomain);
    app.use(bodyParser.json({
        limit: config.file.limit
    }));
    app.use(bodyParser.raw({
        limit: config.file.limit
    }));
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: config.file.limit
    }));
    app.use(bodyParser.text());

    app.use(express.static(path.join(config.root, '')));
    app.use('/apidoc', express.static(path.join(config.root, '..', 'apidoc')));
};
