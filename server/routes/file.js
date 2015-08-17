'use strict';

var multer = require('multer');
var express = require('express');
var router = express.Router();
var config = require('../config');
var rpc = require('../common/amqp/amqp-rpc');
var mkdirp = require('mkdirp');
var path = require('path');

function returnFile (err, req, res, result) {
    if (!err && result.filePath) {
        res.status(200).sendFile(path.resolve(result.filePath));
    } else {
        res.status(404).send({result: 'file not found'});
    }
}
function installRoute(app) {
    mkdirp(config.file.uploadDir, {mode: '0777'});
    app.use(multer({
            dest: config.file.uploadDir,
            putSingleFilesInArray: true,
            rename: function(fildname, filename){
                return filename.replace(/\W+/g, '-').toLowerCase() + '-' + Date.now();
            },
            changeDest: function(dest) {
                var randomDir = Math.round(99*Math.random());
                var newPath = dest + '/' + randomDir;
                mkdirp.sync(newPath);
                return newPath;
            },
            onError: function(error, next){
                next(error);
            }
        })
    );
    router.post('/:type', app.oauth.authorise(), rpc.query('post/file/:type'));
    router.get('/:imageId', rpc.query('get/file/:imageId', returnFile));
    router.get('/list/:fieldname', rpc.query('get/file/list/:fieldname'));
    router.get('/:width/:height/:imageId', rpc.query('get/file/:width/:height/:imageId', returnFile));

    return router;
}

module.exports = function (app) {
    return installRoute(app);
};
