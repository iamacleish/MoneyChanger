var gulp        = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');


var reload      = browserSync.reload;

var src = {
    //Scss and css.
    scss:                 'private/scss/*.scss',
    css:                  'public/css',



    //The main index to be built into public.
    indexHTMLsrc:         'private/index.html',
    indexHTMLdest:        './public',

    //partials used to build the index.
    HTMLpartial:          'private/partials/*.html',

    //js
    indexJSsrc:           'private/js/*.js',
    indexJSdest:          'public/js',

    //actual target of gulp
    indexHTML:            'public/index.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass','fileinclude'], function() {

    browserSync({
        server: "./public"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.HTMLpartial, ['fileinclude']);
    gulp.watch(src.indexHTMLsrc, ['fileinclude']);
    gulp.watch(src.indexJSsrc, ['js']);
    gulp.watch(src.indexHTML).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('fileinclude', function() {

  //build index
  gulp.src(src.indexHTMLsrc)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(src.indexHTMLdest));

});

gulp.task('js', function(){
  return gulp.src(src.indexJSsrc)
    .pipe(gulp.dest(src.indexJSdest))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
