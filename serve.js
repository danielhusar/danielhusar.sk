const serve = require('metalsmith-serve');
const config = require('./metalsmith.js');
const watch = require('metalsmith-watch');
const define = require('metalsmith-define');


config()
  .use(serve())
  .use(watch({
    paths: {
      "${source}/**/*": true,
      "assets/**/*": true,
      "layouts/**/*": true
    },
    livereload: true,
  }))
  .use(define({
    ENV: 'development'
  }))
  .build(err => {
    if (err) { throw err; }
  });
