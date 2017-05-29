/**
 * Created by ialis on 2017/5/29.
 */

/**
 * 类型检测
 * */

//检测原始值
console.log(typeof 1);
console.log(typeof 1 == "number");
console.log(typeof 1 === "number");
console.log(typeof "a");
console.log(typeof "a" == "string");
console.log(typeof "a" === "string");
console.log(typeof true);
console.log(typeof true == "boolean");
console.log(typeof true === "boolean");
console.log(typeof a);
console.log(typeof a == "undefined");
console.log(typeof a === "undefined");
// 避免对null进行检测 (null可以理解为对象占位符)
console.log(typeof null);  // object


// 检测引用值
// 引用值也称为对象，除了原始值之外都是引用。
// 内置的几种引用类型： Object、Array、Date、Error、RegExg等
// typeof 都会返回 object
console.log(typeof { });  // object
console.log(typeof [ ]);  // object
console.log(typeof new Date());  // object
console.log(typeof new RegExp());  // object
// 所以不能用 typeof 判断引用的类型
// 可以使用 instanceof 运算符
console.log({ } instanceof Object);  // true
console.log([ ] instanceof Array);  // true
console.log(new Date() instanceof Date);  // true
console.log(new RegExp() instanceof RegExp);  // true
// instanceof 也检测原型链
console.log([ ] instanceof Object);  // true
console.log(new Date() instanceof Object);  // true
console.log(new RegExp() instanceof Object);  // true


// 检测函数
// instanceof 检测函数
console.log(function () { } instanceof Function);  // true
// typeof 检测函数
console.log(typeof (function () { }));  // function
console.log(typeof (function () { }) == "function");  // true
console.log(typeof (function () { }) === "function");  // true


// 检测数组
function isArray(vaule) {
    if(typeof Array.isArray === "function"){
        return Array.isArray(vaule);
    }else{
        return Object.prototype.toString().call(vaule) === "[object Array]";
    }
}
console.log(isArray([ ]));  // true
console.log(isArray({ }));  // false


// 检测属性
// in 运算符会简单地判断属性是否存在，不会去读属性的值。
var o = {
    a: 1,
    b: "b"
};
// 属性若不在实例对象中存在，in 继续检查原型链
console.log("a" in o);  // true
console.log("b" in o);  // true
// 若只想检查实例对象的某个属性是否存在，可以用 hasOwnProperty() 方法
function hasOwnProperty(o, p) {
    if("hasOwnProperty" in o && o.hasOwnProperty(p)){
        return true
    }
    return false;
}
console.log(hasOwnProperty(o, "a"));  // true

