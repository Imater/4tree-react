'use strict';
module.exports = function(sequelize, DataTypes) {
    var OauthClient, attributes, options;
    attributes = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING,
        },
        secret: {
            type: DataTypes.STRING,
        },
        redirectUri: {
            type: DataTypes.STRING,
        }
    };
    options = {
    };
    OauthClient = sequelize.define('oauthClient', attributes, options);
    return OauthClient;
};
