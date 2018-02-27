const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    // Reload browserSync on a change
    gulp.watch('./*.html').on('change', browserSync.reload);
});

/* Setup Default Gulp task to run when we call gulp */
// Compile sass and then run browser sync
gulp.task('default', ['serve']);