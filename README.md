# find-python-home [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Attempts to find python's home directory on the system.

## Example
````javascript
var findPythonHome = require('find-python-home');
findPythonHome(function(err, pythonHome){
  console.log(pythonHome);
});
````

## Algorithm
1. Check `path` for the `python` binary, if found return it.
2. If step 1 fails and we're on windows scan the registry.

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/find-python-home.svg
[npm-url]: https://npmjs.org/package/find-python-home
[npm-image]: http://img.shields.io/npm/v/find-python-home.svg

[travis-url]: https://travis-ci.org/jsdevel/node-find-python-home
[travis-image]: http://img.shields.io/travis/jsdevel/node-find-python-home.svg
