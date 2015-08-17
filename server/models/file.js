'use strict';
module.exports = function(sequelize, DataTypes) {
    var attributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        path: {
            type: DataTypes.STRING,
            unique: true
        },
        userId: {
            type: DataTypes.UUID
        },
        fieldname: {
            type: DataTypes.STRING
        },
        originalname: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        mimetype: {
            type: DataTypes.STRING
        },
        extension: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.INTEGER
        }
    };
    var options = {
        getterMethods: {
            fileId: function() {
                return [
                    this.getDataValue('id'),
                    this.getDataValue('extension'),
                ].join('.');
            }
        }
    };

    var File = sequelize.define('file', attributes, options);
    return File;
};
