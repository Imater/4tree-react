var winston = require('winston');
var config = require('../config');
var fs = require('fs');
var mkdirp = require('mkdirp');

var logger = new(winston.Logger)({
    levels: {
        trace: 0,
        input: 1,
        verbose: 2,
        db_log: 3,
        debug: 4,
        info: 5,
        data: 6,
        help: 7,
        warn: 8,
        error: 9
    },
    colors: {
        trace: 'gray',
        input: 'grey',
        verbose: 'cyan',
        db_log: 'magenta',
        debug: 'blue',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        error: 'red'
    }
});

if (!fs.existsSync(config.log.dir)) {
    fs.mkdirSync(config.log.dir);
}

if (config.env === 'development') {
    logger.add(winston.transports.Console, {
        level: 'trace',
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: false
    });
} else if (config.env === 'test') {
    logger.add(winston.transports.Console, {
        level: 'info',
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: false
    });
}

mkdirp(config.log.dir, {
    mode: '0777'
});


logger.add(winston.transports.File, {
    prettyPring: false,
    level: 'trace',
    silent: false,
    colorize: false,
    timestamp: true,
    maxFiles: 60,
    json: true,
    filename: config.log.dir + '/' + config.log.allFileName,
    maxsize: 500000
});

module.exports = logger;
