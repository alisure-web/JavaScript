/**
 * Created by ialis on 2017/5/29.
 */

/**
 * 全局变量：避免使用全局变量
 * 全局变量会挂载在全局对象上（脚本的最外层上下文）
 *
 * 未使用var的变量默认未全局变量，使用严格模式会报错。
 * */

/*
* 单全局变量：只有一个全局变量，其他所有的信息都挂载在该全局变量上。
* */

// 命名空间
var MyGlobal = {
    namespace: function (ns) {
        var parts = ns.split(".");
        var object = this;

        for (var i = 0; i < parts.length; i++){
            if(!object[parts[i]]){
                object[parts[i]] = { };
            }
            object = object[parts[i]];
        }

        return object;
    }
};

var myGlobal = MyGlobal.namespace("xyz.alisure.test");

// myGlobal 即为要使用的全局空间
myGlobal.name = "my name";

console.log(MyGlobal);
console.log(MyGlobal.xyz);
console.log(MyGlobal.xyz.alisure);
console.log(MyGlobal.xyz.alisure.test);
console.log(MyGlobal.xyz.alisure.test.name);

console.log(myGlobal);
console.log(myGlobal.name);


/**
 * 零全局变量：立即执行函数
 * */
(function () {
    "use strict";
    
    console.log("function wrapper");
}());
