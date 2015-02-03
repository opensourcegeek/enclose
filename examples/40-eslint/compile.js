#!/usr/bin/env node

/* eslint no-process-exit:0 */

var path = require("path");
var enclose = require("../../").exec;
var windows = process.platform === "win32";
var wexe = windows ? ".exe" : "";
var x64 = process.arch === "x64";
var x64flag = x64 ? ["--x64"] : [];

try {
  var eslint = path.dirname(require.resolve("eslint"));
} catch(error) {
  console.log("Failed to require('eslint')");
  console.log("Please run 'npm install' here");
  process.exit(1);
}

var source = path.join(
  eslint, "..", "bin", "eslint.js"
);

enclose(x64flag.concat([
  "--config", "./config.js",
  "--output", "./eslint" + wexe,
  source
]));
