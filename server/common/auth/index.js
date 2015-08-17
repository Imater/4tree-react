'use strict';
var model = require('./user-auth');
var oauthServer = require('oauth2-server');
var initAuth = module.exports;
var logger = require('../../config/logger');

initAuth.registerToApp = function(app) {
    app.oauth = oauthServer({
        model: model,
        grants: ['password', 'refresh_token', 'urn:custom:social'],
        debug: true
    });

    require('./auth-token-info'); //doc about oAuth2 api
    app.all('/api/oauth/token', function(req, res, next) {
        var render = res.jsonp;
        res.jsonp = function(view, locals, cb) {
            if (req.user && req.user.id) {
                view.userId = req.user.id;
            }
            render.call(res, view, locals, cb);
        };
        next();
    }, app.oauth.grant());

    app.get('/api/secret-area', app.oauth.authorise(), function(req, res) {
        res.send({
            secretArea: true
        });
    });
};
initAuth.registerErrorHandler = function(app) {
    app.use(function(err, req, res, next) {
        logger.error(err);
        next(err);
    });
    app.use(app.oauth.errorHandler());
};
