/**
 * Created by ialis on 2017/5/29.
 */

/**
 * 判断相等
 * */

/**
 * 在使用==和!=时会发生强制类型转换
 * 在使用===和!==时不会发生类型转换
 * */
console.log(1 == "1");  // true
console.log(1 == "0x1");  // true
console.log(1 == 1);  // true
console.log(1 == 0x1);  // true

console.log(1 === "1");  // false
console.log(1 === "0x1");  // false
console.log(1 === 1);  // true
console.log(1 === 0x1);  // true

/**
 * 数据类型： number、string、boolean、null、undefined、object
 */

// 1. number和string：string会被转换成number
console.log(1 == "1");  // true
console.log(1 == "a");  // false

// 2. number和bool：bool会被转换成number
console.log(1 == true);  // true
console.log(0 == false);  // true
console.log(2 == true);  // false

// 3. string和bool：string会转换成number，bool会转换成number，然后再进行比较
console.log("1" == true);  // true
console.log("0" == false);  // true
console.log("true" == true);  // false

// 4. null和undefined
console.log(null == undefined);  // true
console.log(null === undefined);  // false
console.log("null" == null);  // false
console.log("undefined" == undefined);  // false

// 5. object和非object：object会先调用valueOf()，若没有valueOf()则调用toString()
var objectA = {
    toString: function () {
        return "1";
    },
    valueOf: function () {
        return "2";
    }
};
var objectB = {
    toString: function () {
        return "1";
    },
    valueOf: function () {
        return "2";
    }
};
var objectC = {
    toString: function () {
        return "1";
    }
};
console.log(typeof objectA);  // object
console.log(objectA == objectB);  // false
console.log(objectA === objectB);  // false
console.log(objectA == 1);  // false
console.log(objectB == 1);  // false
console.log(objectA == 2);  // true
console.log(objectB == 2);  // true
console.log(objectC == 1);  // true
console.log(objectA.toString() == objectB.toString());  // true
console.log(objectA.toString() === objectB.toString());  // true


