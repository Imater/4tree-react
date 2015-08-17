'use strict';

var _ = require('lodash');

function ValidationError(error) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'ValidationError';
    _.merge(this, error);
    return this;
}

module.exports = {
    registerErrorHandler: function (app) {
        app.use(function (err, req, res, next) {
            res.status(err.status || 400).send({
                status: err.status,
                error: err.error,
                error_description: err.message
            });
            next();
        });
    },
    errors: {
        eventNotFound: function () {
            var error = {
                status: 400,
                error: 'eventNotFound',
                message: 'event not found'
            };
            return new ValidationError(error);
        },
        wrongCode: function () {
            var error = {
                status: 400,
                error: 'wrongCode',
                message: 'wrongCode'
            };
            return new ValidationError(error);
        },
        userNotFound: function () {
            var error = {
                status: 400,
                error: 'userNotFound',
                message: 'user not found'
            };
            return new ValidationError(error);
        },
        needEventId: function () {
            var error = {
                status: 400,
                error: 'needEventId',
                message: 'need event id'
            };
            return new ValidationError(error);
        },
        needCode: function () {
            var error = {
                status: 400,
                error: 'needCode',
                message: 'need code and new password to restore user password'
            };
            return new ValidationError(error);
        },
        needParams: function () {
            var error = {
                status: 400,
                error: 'needParams',
                message: 'need body params'
            };
            return new ValidationError(error);
        },
        emailNotFound: function () {
            var error = {
                status: 404,
                error: 'emailNotFound',
                message: 'user with email not found'
            };
            return new ValidationError(error);
        },
    }
};
