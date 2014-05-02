'use strict';

var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

module.exports = function(gulp){

  //sprites
  gulp.task('sprite', function () {
    var spriteData = gulp.src('_assets/icons/*.png').pipe(spritesmith({
      imgName: 'icons.png',
      imgPath: '/img/icons.png',
      cssName: '_icons.scss',
      engine: 'phantomjs',
      algorithm: 'binary-tree',
      cssTemplate: 'css.mustache'
    }));
    spriteData.img.pipe(gulp.dest('_site/img/'));
    spriteData.css.pipe(gulp.dest('_sass/base/'));
  });

  //minify images
  gulp.task('imagemin', function () {
    gulp.src('_site/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('_site/img/'));
  });

};
