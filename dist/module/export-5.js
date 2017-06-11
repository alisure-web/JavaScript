"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* export也能默认导出函数 */
var fn = function fn() {
  return "this is a string from export 5";
};

exports.default = fn;