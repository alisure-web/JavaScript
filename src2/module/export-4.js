
/* 这种导出的方式不需要知道变量的名字，相当于是匿名的，直接把开发的接口给export */

export default {
    name: "this is a string from export 4.",
    getName: function () {
        return "haha " + this.name;
    }
}
