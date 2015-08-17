'use strict';

var initServer = require('../initServer.js');
var initDb = require('../init/initDb.js');
var config = require('../config');

before(function (done) {
    this.timeout(25000);
    global.url = ([
        'http://',
        config.server.address,
        ':',
        config.server.port,
        '/'
    ].join(''));
    //global.url = 'http://kc.looi.ru/';
    //global.url = 'http://gb.looi.ru/';
    //global.url = 'http://localhost:5000/';

    initServer.initServer(function () {
        initDb({}, function(){
            done();
        })
    });

});
after(function (done) {
    initServer.closeServer(function () {
        return done();
    });
});
