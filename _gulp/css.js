'use strict';

var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var prefix = require('gulp-autoprefixer');

module.exports = function(gulp){

  //run sass
  gulp.task('sass', function () {
    return gulp.src(['./_sass/style.scss', './_sass/IE.scss'])
      .pipe(sass())
      .pipe(prefix('last 5 versions', '> 1%', 'ie 8', 'ie 9'))
      .pipe(gulp.dest('./_site/css'))
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
