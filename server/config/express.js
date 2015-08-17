'use strict';

var express = require('express');
var config = require('./index');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function (app){
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
