'use strict';

var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var prefix = require('gulp-autoprefixer');

module.exports = function(gulp){

  //run less
  gulp.task('sass', function () {
    gulp.src(['./_sass/style.scss', './_sass/IE.scss'])
      .pipe(sass())
      .pipe(prefix('last 5 versions', '> 1%', 'ie 8', 'ie 9'))
      .pipe(gulp.dest('./public/css'));
  });

  //minify css
  gulp.task('cssmin', function () {
    gulp.src(['_site/css/*.css', '!public/css/*.min.css'])
      .pipe(cssmin({
        expand: true,
        keepSpecialComments: 0,
        noAdvanced: true
      }))
      .pipe(rename({
        suffix: '.min',
        extname: '.css'
      }))
      .pipe(gulp.dest('_site/css'));
  });

};
