"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var func0 = function func0() {
    console.log("this is function 0");
};
var object0 = {};

/* 在export接口的时候， 我们可以使用 XX as YY， 把导出的接口名字改了 */
exports.myFunction = func0;
exports.myObject = object0;