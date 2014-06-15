'use strict';

var dirname = require('path').dirname;
var exec = require('child_process').exec;
var fs = require('fs');
var which = require('which');
var os = require('os');
var platform  = os.platform();
var isWin = /^win/i.test(platform);
var pythonHome;

module.exports = function findPythonHome(cb){
  if(pythonHome)return next(cb, null, pythonHome);

  which('python', function(err, python){
    if(python){
      pythonHome = dirname(python);
      return next(cb, null, pythonHome);
    } else if(isWin){
      exec(
        'reg '
        + 'query '
        + 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Python\\PythonCore\\2.7\\InstallPath',
        function(err, entry){
          var val;
          if(err)return next(cb, err); 
          val = entry.replace(/\s+/g, ' ').split(' ')[2];
          if(isDir(val))return (pythonHome=val), next(cb, null, val);
          else return next(cb, new Error('python not found...'));
        }
      );
    }
  });
};

function isDir(dir){
  return fs.existsSync(dir) && fs.statSync(dir).isDirectory();
}

function next(cb, err, python){
  process.nextTick(cb.bind(null, err, python));
}
