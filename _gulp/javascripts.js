'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var insert = function (obj, index, item) {
  obj.splice(index, 0, item);
};

module.exports = function(gulp, jsFiles){

  gulp.task('lint', function () {
    return gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter(stylish));
  });

  gulp.task('scripts', function () {
    return gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'));
  });

};
