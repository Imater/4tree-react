var gulp = require('gulp');
var env = require('gulp-env');

gulp.task('env-test', function(){
    return process.env.NODE_ENV = 'test';
});
