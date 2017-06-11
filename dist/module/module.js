"use strict";

var _export = require("./export-1");

var _export2 = require("./export-2");

var _export3 = require("./export-3");

var _export4 = require("./export-4");

var _export5 = _interopRequireDefault(_export4);

var _export6 = require("./export-5");

var _export7 = _interopRequireDefault(_export6);

var _export8 = require("./export-6");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_export.bar + "_" + _export.foo);
/**
 * ES6模块主要有两个功能：export和import
 * export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
 * import用于在一个模块中加载另一个含有export接口的模块。
 * */

/*
* 1：每一个模块只加载一次，每一个JS只执行一次，如果下次再去加载同目录下同文件，
*       直接从内存中读取。一个模块就是一个单例，或者说就是一个对象；
* 2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
* 3：模块内部的变量或者函数可以通过export导出；
* 4：一个模块可以导入别的模块
* */

(0, _export.func0)();
(0, _export.func1)();

(0, _export2.myFunction)();
console.log(_export2.myObject);

console.log((0, _export3.square)(12));
console.log((0, _export3.diag)(3, 3));
console.log((0, _export3.sqrt)(5));

console.log(_export5.default.name);
console.log(_export5.default.getName());

console.log((0, _export7.default)());

(0, _export8.myFunction)();
console.log(_export8.myObject);