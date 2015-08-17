'use strict';
module.exports = function (sequelize, DataTypes) {
    var attributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }, title: {
            type: DataTypes.STRING, unique: false
        }, parent_id: {
            type: DataTypes.STRING, unique: false
        }, user_id: {
            type: DataTypes.STRING, unique: false
        },
        text: {
            type: DataTypes.TEXT
        }
    };
    var options = {
        associate: function (models) {
        },
        freezeTableName: 'tree',
        createdAt: false,
        updatedAt: false
    };

    var Tree = sequelize.define('tree', attributes, options);
    return Tree;
};
