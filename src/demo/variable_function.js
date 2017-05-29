/**
 * Created by ialis on 2017/5/29.
 */

// 变量声明提前
var a = 1 + b;
var b = "b";

console.log(a);
console.log(b);


// 函数声明提前
c();

function c() {
    console.log("c");
}


// 立即调用的函数
var d = (function () {
    return "d";
}());

console.log(d);


//严格模式
(function (e) {

    // 开启严格模式
    "use strict";

    function f() {
        return "f";
    }

    function g() {
        return "g";
    }

    console.log(e);
    console.log(f());
    console.log(g());

})("e");
