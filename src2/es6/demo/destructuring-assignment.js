
/* 参数解构 */
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

var o = {p: 42, q: true};
var {p, q} = o; /* 解构赋值 */
console.log(p); // 42
console.log(q); // true

/* 正常的 */
function test(o) {
    console.log(o.p);
}
test(o); // 42

/* 参数解构 */
function test2({p}) {
    console.log(p);
}
test(o); // 42