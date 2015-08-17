'use strict';
module.exports = function(sequelize, DataTypes) {
    var attributes;
    attributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING
        },
        expires: {
            type: DataTypes.DATE
        },
        clientId: {
            type: DataTypes.UUID
        },
        userId: {
            type: DataTypes.UUID
        }
    };
    return sequelize.define('oauthAccessToken', attributes);
};
