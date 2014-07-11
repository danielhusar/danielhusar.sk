'use strict';

var express = require('express');
var app = express();

app.post('/generate', function(req, res){
  console.dir(req.body);
  res.json({done: true});
});

app.listen(3001);
