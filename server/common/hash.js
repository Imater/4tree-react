'use strict';

var crypto = require('crypto');
var config = require('../config');

function getHash(password){
    var sha1 = crypto.createHash('sha1');
    sha1.update(config.security.salt + password + config.security.salt);
    return sha1.digest('hex');
}

module.exports = {
    getHash: getHash
};
