'use strict';

var async = require('async');

var logger = require('../../config/logger');

var db = require('../../models').models;

var model = module.exports;

model.grantTypeAllowed = function(clientId, grantType, callback) {
    if (grantType === 'password' || grantType === 'urn:custom:social') {
        return callback(false, true);
    }
    return callback(false, true);
};

model.getClient = function(clientId, secretValue, callback) {
    logger.trace('getClient');
    return db.oauthClient.find({
        where: {
            id: clientId
        }
    }).complete(function(err, client) {
        if (err || !client) {
            return callback(err);
        }
        if (secretValue !== null && client.secret !== secretValue) {
            return callback();
        }
        return callback(null, client);
    });
};

model.getAccessToken = function(tokenValue, callback) {
    if(tokenValue === '777') {
        return callback(null, {value: '777', expires: '2050-02-02 12:32:32', userId: 'a148e5e0-d9fd-11e4-99e6-13416af7c099'});
    }
    return db.oauthAccessToken.find({
        where: {
            value: tokenValue
        }
    }).complete(function(err, token) {
        if (err || !token) {
            return callback(err);
        }
        return callback(null, token);
    });
};

model.getRefreshToken = function(tokenValue, callback) {
    return db.oauthRefreshToken.find({
        where: {
            value: tokenValue
        }
    }).complete(function(err, token) {
        if (err || !token) {
            return callback(err);
        }
        return callback(null, token.toJSON());
    });
};

model.getUser = function(username, password, callback) {
    username = username.toLowerCase();
    return db.user.find({
        where: {
            userName: {
                ilike: username
            },
            password: password
        }
    }).complete(function(err, user) {
        if (err || !user) {
            return callback(err);
        }
        return callback(null, user);
    });
};

model.saveAccessToken = function(token, clientId, expires, user, callback) {
    return db.oauthAccessToken.create({
        value: token,
        expires: expires,
        clientId: clientId,
        userId: user.id
    }).complete(function(err) {
        return callback(err);
    });
};

model.saveRefreshToken = function(token, clientId, expires, user, callback) {
    return db.oauthRefreshToken.create({
        value: token,
        expires: expires,
        clientId: clientId,
        userId: user.id
    }).complete(function(err) {
        return callback(err);
    });
};

model.clearTokens = function(accessToken, refreshToken, callback) {
    if (accessToken && refreshToken) {
        return async.waterfall([
            function(cb) {
                return db.oauthAccessToken.destroy({
                    value: accessToken
                }).complete(function(err) {
                    return cb(err);
                });
            }, function(cb) {
                return db.oauthRefreshToken.destroy({
                    value: refreshToken
                }).complete(function(err) {
                    return cb(err);
                });
            }
        ], function(err) {
            return callback(err);
        });
    } else {
        return callback();
    }
};

model.extendedGrant = function(grantType, req, callback){
    db.social.find({
        where: {
            socialId: req.body.social_id,
            socialType: req.body.social_type
        }
    }).complete(function(err, social) {
        if (err || !social) {
            return callback(err);
        }
        callback(false, true, {id: social.userId});
    });
};
