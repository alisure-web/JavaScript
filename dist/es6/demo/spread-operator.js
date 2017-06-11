"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* 展开运算符 */

/* 函数调用中使用展开运算符 */
function test(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + d);
}
var args = [2, 3];
test.apply(undefined, [1].concat(args, [4]));

/* 数组字面量中使用展开运算符 */
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
arr1.push.apply(arr1, arr2);
console.log(arr1);
console.log([arr1, 9, 10]);
console.log([].concat(arr1, [9, 10]));

/* 用于解构赋值 */
var arg1 = 1,
    arg2 = 2,
    arg3 = [3, 4, 5];

console.log(arg3);

/* 合并两个对象 */
var a = {
    x: 1,
    y: 2
};
var b = {
    z: 3
};
var ab = _extends({}, a, b);
console.log(ab);