/**
 * Created by ialis on 2017/5/29.
 */

/**
 * null 和 undefined 的使用场景
 */

/**
 * null可以理解为对象的占位符。
 * 1. 初始化一个赋值可能是对象的变量
 * 2. 和已经初始化的变量比较
 * 3. 当函数的参数期望是对象时，用作参数传入
 * 4. 当函数的返回值期望是对象时，用作返回值传出
 */

/**
 * 避免使用null的地方
 * 1. 不要使用null检测是否传入了某个参数，应该使用undefined
 * 2. 不要使用null检测未初始化的变量(尽量初始化变量)，应该使用undefined
 */

/**
 * 没有被初始化的变量有一个初始值undefined，表示该变量等待被赋值
 * 对于没有被初始化或者没有被声明的变量进行typeof都将返回字符串"undefined"
 */


/**
 * 如果两个参数都没有传入，返回null
 */
function getPerson(name, age) {
    
    // 不要使用null检测是否传入了某个参数，应该使用undefined
    if(typeof name == "undefined" || typeof age == "undefined"){
        
        // 当函数的返回值期望是对象时，用作返回值传出
        return null;
    }
    
    // 返回对象直接量（对象字面量）
    return {
        name: name,
        age: age
    };
}

// 尽量初始化变量：可以保证只有在变量没有声明时，typeof返回字符串"undefined"
var person = null,
    name = "",
    age = 0;

// 和已经初始化的变量比较
if(person == null){
    person = getPerson();
}
console.log(person);

// 和已经初始化的变量比较
if(person == null){
    name = "leisure";
    age = 24;
    person = getPerson(name, age);
}
console.log(person);
