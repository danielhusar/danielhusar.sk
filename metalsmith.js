'use strict';

var metalsmith   = require('metalsmith');
var drafts       = require('metalsmith-drafts');
var markdown     = require('metalsmith-markdown');
var permalinks   = require('metalsmith-permalinks');
var templates    = require('metalsmith-templates');
var assets       = require('metalsmith-assets');
var sass         = require('metalsmith-sass');
var autoprefixer = require('metalsmith-autoprefixer');
var uglify       = require('metalsmith-uglify');
var imagemin     = require('metalsmith-imagemin');


function build (cb) {
  metalsmith(__dirname)
    .source('posts')
    .destination('_build')

    // html
    .use(drafts())
    .use(markdown())
    .use(permalinks(':title'))
    .use(templates({
      engine: 'swig',
      directory: 'layouts'
    }))

    // assets
    .use(assets({
      source: './assets/',
      destination: './'
    }))

    // css
    .use(sass({
      includePaths: ['./assets/scss']
    }))
    .use(autoprefixer())

    // js
    .use(uglify())

    // images
    .use(imagemin())

    .build(cb);
}

module.exports = build;
