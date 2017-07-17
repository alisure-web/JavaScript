/* 展开运算符 */

/* 函数调用中使用展开运算符 */
function test(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + d);
}
var args = [2, 3];
test(1, ...args, 4); // 1 2 3 4

/* 数组字面量中使用展开运算符 */
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
arr1.push(...arr2);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log([arr1, 9, 10]); // [ [ 1, 2, 3, 4, 5, 6, 7, 8 ], 9, 10 ]
console.log([...arr1, 9, 10]); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/* 用于解构赋值 */
let [arg1, arg2, ...arg3] = [1, 2, 3, 4, 5];
console.log(arg3); // [ 3, 4, 5 ]

/* 合并两个对象 */
let a = {
    x: 1,
    y: 2
};
let b = {
    z:3
};
let ab = {...a, ...b};
console.log(ab); // { x: 1, y: 2, z: 3 }
