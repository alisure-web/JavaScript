/**
 * Created by ialis on 2017/5/29.
 */

/**
 * AMD: 异步模块定义
 *
 * 它采用异步方式加载模块，模块的加载不影响它后面语句的运行。
 * 所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
 *
 * AMD也采用require()语句加载模块：
 *      require([module], callback);
 *          第一个参数[module]，是一个数组，里面的成员就是要加载的模块；
 *          第二个参数callback，则是加载成功之后的回调函数。
 * */

// 加载
var requirejs = require("requirejs");

// 配置
requirejs.config({
    nodeRequire: require
});

// 方式一
(function () {
    // 加载 amd_math 模块
    requirejs(["amd_math"], function(amd_math) {
        // 加载成功后的回调
        console.log(amd_math.add(1, 2));
    });
}());

// 方式二
(function () {
    // 加载 amd_math 模块
    var amd_math = requirejs("amd_math");
    
    // 加载成功后的回调
    (function (amd_math) {
        console.log(amd_math.add(2, 3));
    }(amd_math));
}());