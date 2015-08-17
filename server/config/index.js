'use strict';

var _ = require('lodash');

//startServices is {'app': true, 'db': true, ...}, names of queue
// services need to start (for multiserver)
//if empty, then start all available services
function detectServicesToStart() {
    if (process.env.SERVICES) {
        return process.env.SERVICES.split(':');
    } else {
        return require('../services').getAllServices();
    }
}

var baseConfig = {
    env: process.env.NODE_ENV || 'development',
    startServices: detectServicesToStart(),
    url: 'http://localhost:5005/',
    security: {
        salt: 'd18f9cfb8',
        userRoles: {
            'a148e5e0-d9fd-11e4-99e6-13416af7c099': ['admin', 'user']
        }, clientApp: {
            client_id: '77777777-d9fd-11e4-99e6-13416af7c099',
            client_secret: '4treeSecret',
            client_name: '4tree'
        }, adminUser: {
            id: 'a148e5e0-d9fd-11e4-99e6-13416af7c099',
            name: 'test user',
            userName: 'test user',
            email: 'eugene.leonar@gmail.com',
            iosAPIKey: '<d894d9b3 e29e8553 8b53c44d e9ebd7b5 65fbb411 40ec8d62 c067305f 4a06e0fe>',
            password: 'test',
            facebook: {
                socialId: 'facebook_social_id'
            },
            vk: {
                socialId: 'vk_social_id'
            }
        }, friendUser: {
            id: 'a148e6e1-d9fd-11e4-99e6-13416af7c099',
            name: 'test friend user',
            email: 'test@test22.ru',
            iosAPIKey: '<d894d9b3 e29e8553 8b53c44d e9ebd7b5 65fbb411 40ec8d62 c067305f 4a06e0fe>',
            password: 'test',
            facebook: {
                socialId: 'facebook_social_id1'
            },
            vk: {
                socialId: 'vk_social_id2'
            }
        }
    },
    oauth: {
        appKey: 'vq3KxiJ4O6SaFdnVw_hNJPCO6ok',
        appSecret: 'FpQHYJQMlm5ykTGIkvH3NTTE0_Y'
    },
    log: {
        dir: __dirname + '/../logs', allFileName: 'all.log'
    },
    server: {
        port: 5005, address: '127.0.0.1'
    },
    amqp: {
        connection: {
            host: '127.0.0.1',
            port: 5672,
            login: 'goblinduser',
            password: '990990',
            connectionTimeout: 15000,
            authMechanism: "AMQPLAIN",
            vhost: '/goblind',
            noDelay: true,
            ssl: {
                enabled: false
            }
        }
    },
    db: {
        host: '127.0.0.1',
        port: 3306,
        name: '4tree-new',
        username: 'root',
        password: 'See6thoh',
        dialect: 'mysql'
    },
    file: {
        uploadDir: '../uploads/', cacheDir: '../uploads/cache', limit: '10mb'
    },
    cities: ['Moscow', 'Saint Petersburg'],
    instagram: {
        url: 'https://api.instagram.com/',
        clientId: '3fe577c5da7e4461aa64d8bc48c1d396',
        clientSecret: 'be9a588b8d6848229e0b5d329ffe0a6a',
        callbackUrl: 'http://kc.looi.ru/api/db/instagram'
    }

};

module.exports = _.merge(baseConfig, require('./' + baseConfig.env + '.js') || {});
