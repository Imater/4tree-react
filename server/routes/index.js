'use strict';

var logger = require('../config/logger');
var fs = require('fs');
var _dir = __dirname;

var routes = [];
function installRoute(file, app) {
    var filename = file.split('.');
    var name = filename[0] || 'tmp';
    var routePath = '/api/' + name;
    routes.push(routePath);
    app.use(routePath, require('./' + file)(app));
}

var autoInstallRoutes = function(app){
    fs.readdirSync(_dir).forEach(function(file){
        if(file && file.indexOf('index') === -1 && file.slice(-3) === '.js') {
            installRoute(file, app);
        }
    });
    logger.trace('| API routes ready: ' + routes.join(', '));
};

module.exports = autoInstallRoutes;
