'use strict';

var assert = require('assert');
var findPythonHome = require('./');

findPythonHome(function(err, home){
  assert(!err);
  console.log(home);
});

