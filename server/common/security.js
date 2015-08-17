'use strict';

var config = require('../config');

var SecurityError = function(status, message){
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'Error';
    this.message = message;
    this.status = status;
};

module.exports = function (role) {
    return [function (req, res, next) {
        if(!req.user){
            return next(new SecurityError(404, 'require user auth') );
        }
        var userRoles = config.security.userRoles[req.user.id] || ['user'];
        if(!req.user) {
            req.user = {};
        }
        req.user.roles = userRoles;
        if(userRoles.indexOf('admin')!=-1){
            req.user.isAdmin = true;
        }
        if(userRoles.indexOf(role)!==-1) {
            return next();
        }
        return next(new SecurityError(403, 'require user role "' + role + '"') );
    }]
};