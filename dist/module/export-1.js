"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var bar = "stringBar";
var foo = "stringFoo";
var func0 = function func0() {
    console.log("func0");
};
var func1 = function func1() {
    console.log("func1");
};

/* 使用 export{接口} 导出接口 */
exports.bar = bar;
exports.foo = foo;
exports.func0 = func0;
exports.func1 = func1;