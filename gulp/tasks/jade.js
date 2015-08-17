var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var watchify     = require('watchify');

gulp.task('jade', function() {
    gulp.src(config.jade.src)
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(config.jade.dest));
});

gulp.task('watch:jade', function() {
    if (global.isWatching) {
        gulp.watch('./app/**.jade', function(){
            gulp.start('jade');
        })
    }
});


