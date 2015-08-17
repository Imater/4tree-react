var gulp = require('gulp');

gulp.task('build', [
    'clean',
    'copy:dev',
    'browserify',
    'less',
    'jade',
    'watch:less',
    'watch:jade'
]);
