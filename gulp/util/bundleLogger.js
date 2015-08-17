/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
   */

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

global.buildCount = 0;
module.exports = {
    start: function(filepath) {
        startTime = process.hrtime();
        gutil.log(gutil.colors.gray('Bundling'), gutil.colors.gray(filepath));
    },

    end: function(filepath) {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        gutil.log(
            gutil.colors.magenta(global.buildCount++),
            'Bundled',
            gutil.colors.green(filepath),
            'in',
            gutil.colors.magenta(prettyTime)
        );
    }
};
