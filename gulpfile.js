'use strict';

// Include gulp
var gulp = require('gulp');

//js files
var jsFiles = [
  '_js/events.js'
  ];

// Include Our Plugins
require('./_gulp/javascripts.js')(gulp, jsFiles);
require('./_gulp/css.js')(gulp);
require('./_gulp/img.js')(gulp);

//tasks aliases
gulp.task('server', ['watch']);

gulp.task('default', ['less', 'scripts'], function() {
  setTimeout(function(){
    gulp.start('cssmin');
  }, 1500);
});

//watch Files For Changes
gulp.task('watch', function () {
  gulp.watch(['_sass/*.scss', '_sass/**/*.scss', '_sass/**/**/*.scss', '_sass/**/**/**/*.scss'], ['sass']);
  gulp.watch(jsFiles, ['lint']);
});
