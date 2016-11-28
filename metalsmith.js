'use strict';

const metalsmith   = require('metalsmith');

const drafts       = require('metalsmith-drafts');
const markdown     = require('metalsmith-markdown');
const permalinks   = require('metalsmith-permalinks');
const templates    = require('metalsmith-templates');
const excerpts     = require('metalsmith-excerpts');
const collections  = require('metalsmith-collections');
const feed         = require('metalsmith-feed');
const pagination   = require('metalsmith-pagination');

const assets       = require('metalsmith-assets');
const sass         = require('metalsmith-sass');
const autoprefixer = require('metalsmith-autoprefixer');
const uglify       = require('metalsmith-uglify');
//var imagemin     = require('metalsmith-imagemin');


function config() {
  return metalsmith(__dirname)
    // core
    .source('posts')
    .destination('_build')
    .metadata({
      site: {
        title: 'Daniel Husar Blog',
        url: 'https://www.danielhusar.sk',
        author: 'Daniel Husar'
      }
    })

    // html
    .use(drafts())
    .use(markdown())
    .use(permalinks(':title'))
    .use(excerpts())

    // pagination
    .use(collections())
    .use(feed({collection: 'articles'}))
    .use(pagination({
      'collections.articles': {
        perPage: 4,
        template: 'index.html',
        first: 'index.html',
        path: ':num/index.html',
        pageMetadata: {
          title: 'Daniel Husar Blog'
        }
      }
    }))

    templates
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
      includePaths: ['./assets/css']
    }))
    .use(autoprefixer())

    // js
    .use(uglify());
}

module.exports = config;
