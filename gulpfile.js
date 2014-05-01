'use strict';

// Include gulp
var gulp = require('gulp');
var express = require('express');
var directory = require('serve-index');
var fs = require('fs-extra');

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

gulp.task('default', ['jekyll', 'sass', 'scripts'], function() {
  setTimeout(function(){
    gulp.start('cssmin');
  }, 1500);
});

gulp.task('jekyll', function(){
  //fs.removeSync('_site');
  require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});
});

//watch Files For Changes
gulp.task('watch', function () {
  var app = express();
  app.use(express.static('_site'));
  app.use(directory('_site'));
  app.listen(8000);
  console.log('listen on: http://localhost:8000')
  gulp.watch(['_sass/*.scss', '_sass/**/*.scss', '_sass/**/**/*.scss', '_sass/**/**/**/*.scss'], ['sass']);
  gulp.watch(['_plugins/*.rb','_posts/*.md', '_posts/*.markdown', '_layouts/*.html', '_includes/*.html', '*.html', '*.yml'], ['jekyll']);
  gulp.watch(jsFiles, ['lint', 'scripts']);
});
