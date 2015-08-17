'use strict';

var express = require('express');
var router = express.Router();

function installRoute() {
    router.get('/password', function (req, res) {
        res.send({secretArea: true});
    });
    return router;
}

module.exports = function() {
    return installRoute();
};

