var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./app/styles/**.less')
    .pipe(less({
    }))
    .pipe(gulp.dest('./.tmp/styles'));

    if (global.isWatching) {
        gulp.watch('./app/styles/**.less', function(){
            gulp.start('less');
        })
    }

});

gulp.task('watch:less', function() {
    if (global.isWatching) {
        gulp.watch('./app/styles/**.less', function(){
            gulp.start('less');
        })
    }
});
