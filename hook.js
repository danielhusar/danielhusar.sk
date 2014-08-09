'use strict';

var express = require('express');
var xhub = require('express-x-hub');
var exec = require('exec-chainable');
//var secret = require('./hook.json').secret;

var app = express();
//app.use(xhub({ algorithm: 'sha1', secret: secret }));

app.get('/', function(req, res){
  res.json({running: true});
});

app.get('/generate', function(req, res) {

    exec('git pull').then(function (a) {
      console.log(a);
      return exec('gulp');
    }).done( function (a) {
       console.log(a);
      res.json({error: false});
    });

});

app.listen(3001);
