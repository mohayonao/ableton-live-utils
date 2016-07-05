"use strict";

const assert = require("power-assert");
const fs = require("fs");
const path = require("path");
const index = require("../");

const rootPath = path.join(__dirname, "../");

fs.readdir(rootPath, function(err, files) {
  files.filter(function(file) {
    return /\.js$/.test(file) && file !== "index.js";
  }).forEach(function(file) {
    const func = require(path.join(__dirname, "../" + file));
    const name = file.replace(/\.js$/, "");

    assert(index[name] === func);
  });
});
