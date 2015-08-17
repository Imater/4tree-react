'use strict';
var tree = module.exports;
var db = require('../../models-old');

/**
 * @api {get} api/db/cities/list?access_token=? All available citys
 * @apiName GetUsercitiesList
 * @apiDescription All cities list with title and id
 * @apiGroup User_city
 * @apiPermission User
 * @apiSuccess {String} id
 * @apiSuccess {String} title i.e. 'Sport', 'Business'...
 *
 * @apiError 400 JSON has information about error
 */
tree.getAllTree = function (req, cb) {
    db.models.tree.findAll({
        where: {
            user_id: 12
        }
    })
        .then(function (treeNodes) {
            console.info(treeNodes.length);
            cb(null, treeNodes);
        }).catch(cb);
};
