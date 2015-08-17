'use strict';
var initDb = require('./initDb.js');
var initServer = require('../initServer.js');

initServer.initServer(function(){
    initDb({
    }, function(){
        process.exit(0);
    });
});
