'use strict';

var express = require('express');
var app = express();
var xhub = require('express-x-hub');
app.use(xhub({ algorithm: 'sha1', secret: 'generate' }));

app.post('/generate', function(req, res){
  console.dir(req.isXHub);
  require('child_process').exec('gulp', function(err, stdout, stderr) {
    res.json({done: true});
  });
});

app.listen(3001);
