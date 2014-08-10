'use strict';

var express = require('express');
var xhub = require('express-x-hub');
var exec = require('exec-chainable');
var secret = require('./hook.json').secret;

var app = express();
app.use(xhub({ algorithm: 'sha1', secret: secret }));

var generate = function (req, res) {
  if (req.isXHub) {
    exec('git pull').then(function () {
      return exec('gulp');
    }).done( function () {
      res.json({error: false});
    });
  } else {
    res.json({error: true}, 404);
  }
};

app.get('/', function (req, res){
  res.json({running: true});
});
app.get('/generate', generate);
app.post('/generate', generate);


app.listen(3001);
