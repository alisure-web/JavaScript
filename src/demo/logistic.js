/**
 * Created by ialis on 2017/6/2.
 */

/**
 * 逻辑运算和短路求值
 * */

/**
 * 逻辑与：&&  express1 && express2
 *      如果express1能转换成false，则返回express1，否则返回express2
 *      express1和express2都是boolean时，全部为true返回true，否则返回false
 *
 * 逻辑或：||  express1 || express2
 *      如果express1能转换true，返回express1，否则返回express2
 *      express1和express2都是boolean时，有true就返回true，否则返回false
 *
 * 逻辑非：!  !express
 *      如果express能转换成true，返回false，否则返回true
 * */

/**
 * 能够转换成false的表达式有：false、""、0、NaN、null、undefined
 * 能够转换成true的表达式有：true、任何非空字符串、任何非零数值、任何对象
 * */

/**
 * 短路计算：逻辑表达式的运算的顺序是从左到右，因此可以进行短路计算：
 *      false && （anything）     // false
 *      true || (anything)        // true
 * */

// 逻辑与
console.log(1 && 2);  // 2
console.log(0 && 2);  // 0
console.log("" && 1);  // ""
console.log(false && 1);  // false
console.log(NaN && 1);  // NaN
console.log(null && 1);  // null
console.log(undefined && 1);  // undefined


// 逻辑或
console.log(1 || 2);  // 1
console.log(0 || 1);  // 1
console.log("" || 1);  // 1
console.log(false || 1);  // 1
console.log(NaN || 1);  // 1
console.log(null || 1);  // 1
console.log(undefined || 1);  // 1
