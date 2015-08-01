//      __//
//     /.__.\
//     \ \/ /
//  '__/    \
//   \-      )
//    \_____/
// _____|_|____
//      " "
//   crossy.io

'use strict'
var fs = require('fs');
var tar = require('tar');
var zlib = require('zlib');
var path = require('path');
var fstream = require('fstream');
var packageJSON = require(path.resolve(process.cwd(), 'package.json'));

function pack() {
  var options = {
    path: path.resolve(process.cwd(), 'node_modules'),
    type: "Directory"
  };

  var filename = [
    packageJSON.name,
    packageJSON.version
  ].join('-') + '.tar.gz';

  var output = fs.createWriteStream(filename);

  fstream.Reader(options)
    .pipe(tar.Pack())
    .pipe(zlib.Gzip())
    .pipe(output);
}

module.exports = {
  pack: pack
}
