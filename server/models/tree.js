'use strict';
module.exports = function (sequelize, DataTypes) {
    var attributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }, title: {
            type: DataTypes.STRING, unique: false
        }
    };
    var options = {
        associate: function (models) {
        }
    };

    var Tree = sequelize.define('tree', attributes, options);
    return Tree;
};
