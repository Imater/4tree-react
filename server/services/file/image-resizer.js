'use strict';

var imageResizer = module.exports;

var gm = require('gm').subClass({
    imageMagick: true
});
var db = require('../../models');
var config = require('../../config');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

function putResizedImageToCache(params, cb, newPath) {
    var id = path.basename(params.imageId, path.extname(params.imageId));
    db.models.file.find(id).complete(function(err, file) {
        if (err && !file) {
            return cb(404);
        }
        var resolve = path.resolve(file.path);
        mkdirp(config.file.cacheDir, {
            mode: '0777'
        });
        gm(resolve)
            .resize(params.width, params.height, '^')
            .gravity('Center')
            .background('#000000')
            .extent(params.width, params.height)
            .write(newPath, function(err) {
                cb(err || null, newPath);
            });
    });
}
imageResizer.getImagePath = function(params, cb) {
    params.width = params.width < 5000 ? params.width : 5000;
    params.height = params.height < 5000 ? params.height : 5000;
    var newPath = config.file.cacheDir + '/' + params.width + '-' + params.height +
        '-' + params.imageId;
    fs.exists(newPath, function(exist) {
        if (exist) {
            return cb(null, newPath);
        } else {
            putResizedImageToCache(params, cb, newPath);
        }
    });
};
