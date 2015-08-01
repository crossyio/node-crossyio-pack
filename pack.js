'use strict'
var tar = require('tar');
var zlib = require('zlib');
var path = require('path');
var fstream = require('fstream');
var packageJSON = require(path.resolve(process.cwd(), 'package.json'));

var options =
  path: path.resolve(process.cwd(), 'node_modules')
  type: "Directory"

filename = [
  packageJSON.name,
  packageJSON.version
].join('-') + '.tar.gz'

output = fs.createWriteStream(filename);

fstream.Reader(options)
  .pipe(tar.Pack())
  .pipe(zlib.Gzip())
  .pipe(output));

module.exports = {
  pack: pack
}
