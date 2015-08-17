var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('watch-mocha', function() {
    gulp.watch(['server/**/*.js', 'test/**/*.js'], ['env-test', 'mocha']);
});
