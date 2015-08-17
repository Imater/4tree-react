'use strict';

var fileService = module.exports;
var async = require('async');
var db = require('../../models');
var imageResizer = require('./image-resizer');
var path = require('path');

/**
 * @api {get} api/file/:fileId Get file or image
 * @apiName GetFile
 * @apiGroup File
 * @apiPermission user
 * @apiDescription Get file by fileId (i.e. 'dk4k233k3l4-kjlkjfds.jpg')
 *
 * @apiParam {String} fileId id of image or file
 *
 * @apiError 400 JSON has information about error
 */
fileService.sendFile = function(req, callback) {
    var id = path.basename(req.params.imageId, path.extname(req.params.imageId));
    db.models.file.find(id).complete(function(err, file) {
        if (!err && file) {
            callback(err, {
                filePath: file.path + ''
            });
        } else {
            callback(404, {
                filePath: undefined
            });
        }
    });
};

/**
 * @api {get} api/file/list/:fieldname Get file list by type (fieldname)
 * @apiName GetFileList
 * @apiGroup File
 * @apiPermission user
 *
 * @apiParam {String} fieldname file category (i.e. avatar, location)
 *
 * @apiError 400 JSON has information about error
 */
fileService.getListByFieldName = function(req, callback) {
    db.models.file.findAll({
        where: {
            fieldname: req.params.fieldname
        },
        attributes: [
            'id',
            'extension',
            'size'
        ],
        orderBy: [['id', 'DESC']]
    }).then(function(files) {
        callback(null, {
            files: files
        });
    }).catch(callback);
};
/**
 * @api {get} api/file/:width/:height/:fileId Get image with size
 * @apiName GetResizedImage
 * @apiGroup File
 * @apiPermission user
 * @apiDescription Get resized image with ANY size. All images resize once, later loads from cache.
 *
 * @apiParam {Integer} width width of image
 * @apiParam {Integer} height height of image
 * @apiParam {String} fileId id of image or file
 *
 * @apiError 400 JSON has information about error
 */
fileService.sendFileResized = function(req, callback) {
    imageResizer.getImagePath(req.params, function(err, imagePath) {
        if (!err && imagePath) {
            callback(err, {
                filePath: imagePath
            });
        } else {
            callback(404, {
                filePath: undefined
            });
        }
    });
};

function saveFile(file, userId, result, cb) {
    db.models.file.create({
        path: file.path,
        userId: userId,
        originalname: file.originalname,
        fieldname: file.fieldname,
        name: file.name,
        mimetype: file.mimetype,
        extension: file.extension,
        size: file.size
    }).complete(function(err, fileDb) {
        result[file.fieldname] = fileDb.id + path.extname(file.path);
        cb(err);
    });
}

/**
 * @api {post} api/file/:type?access_token=__ Upload files
 * @apiName SaveFiles
 * @apiGroup File
 * @apiPermission user
 * @apiDescription Save files from 'multipart/form-data'
 *
 * @apiParam {String} access_token
 * @apiParam {String} field_name i.e. 'avatar'
 * @apiParam {Blob} file_content
 *
 * @apiSuccess {String} field_name i.e. 'avatar' the same as in params
 * @apiSuccess {String} newFileId i.e. '232sdf232-dsf2321.jpg'
 *
 * @apiError 400 JSON has information about error
 */
fileService.upload = function(req, callback) {
    var result = {};
    async.forEach(Object.keys(req.files), function(fileGroup, cb) {
        async.forEach(req.files[fileGroup], function(file, cbFile) {
            saveFile(file, req.user.id, result, cbFile);
        }, function() {
            cb();
        });
    }, function() {
        callback(null, result);
    });
};
