'use strict';

var rpc = require('../../common/amqp/amqp-rpc');
var fileService = require('./file.js');

function FileService() {
    rpc.on('post/file/:type', fileService.upload);
    rpc.on('get/file/:imageId', fileService.sendFile);
    rpc.on('get/file/list/:fieldname', fileService.getListByFieldName);
    rpc.on('get/file/:width/:height/:imageId', fileService.sendFileResized);
}

module.exports = FileService;
