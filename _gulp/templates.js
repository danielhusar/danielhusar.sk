'use strict';

var w3cjs = require('gulp-w3cjs');
var prettify = require('gulp-html-prettify');
var swig = require('gulp-swig');
var localscreenshots = require('gulp-local-screenshots');


module.exports = function(gulp){

  //validate html
  gulp.task('validate', function () {
    gulp.src('public/*.html')
      .pipe(w3cjs());
  });

  //generate screenshots of templates
  gulp.task('screenshots', function () {
    gulp.src('./public/*.html')
    .pipe(localscreenshots({
      width: ['1600', '1000', '480', '320']
     }))
    .pipe(gulp.dest('./public/'));
  });

  //beautify html
  gulp.task('htmlBeauty', function () {
    gulp.src('./public/*.html').pipe(prettify({
      indent_char: ' ',
      indent_size: 2
    })).pipe(gulp.dest('./public/'));
  });

  gulp.task('tpl', function () {
    //compile templates
    var opts = {
      data: {
        scripts: require('../dependencies.json').map(function(x){ return x.replace(/^.+\/public/, ''); })
      },
      defaults: {
        cache: false
      }
    };
    gulp.src('./templates/*.tpl')
      .pipe(swig(opts))
      .pipe(gulp.dest('./public/'));
  });

};
