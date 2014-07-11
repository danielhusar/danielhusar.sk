'use strict';

var express = require('express');
var app = express();

app.post('/generate', function(req, res){
  console.dir(req.body);
  require('child_process').exec('gulp', function(err, stdout, stderr) {
    res.json({done: true});
  });

});

app.listen(3001);
