'use strict';

var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

module.exports = function(gulp){

  //sprites
  gulp.task('sprite', function () {
    var spriteData = gulp.src('assets/icons/*.png').pipe(spritesmith({
      imgName: 'icons.png',
      imgPath: '../img/icons.png',
      cssName: 'icons.less',
      engine: 'phantomjs',
      algorithm: 'binary-tree',
      cssTemplate: 'css.mustache'
    }));
    spriteData.img.pipe(gulp.dest('public/img/'));
    spriteData.css.pipe(gulp.dest('less/base/'));
  });

  gulp.task('imagemin', function () {
    gulp.src('public/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'));
  });

};
