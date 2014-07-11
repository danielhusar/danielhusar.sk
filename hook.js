'use strict';

var express = require('express');
var app = express();
var xhub = require('express-x-hub');
var secret = require('hook.json').secret;
app.use(xhub({ algorithm: 'sha1', secret: secret }));

app.post('/generate', function(req, res){
  if (req.isXHub) {
    require('child_process').exec('gulp', function(err, stdout, stderr) {
      res.json({error: false});
    });
  } else {
    res.json({error: true}, 404);
  }
});

app.listen(3001);
