
let func0 = function () {
    console.log("this is function 0");
};
let object0 = {

};

/* 在export接口的时候， 我们可以使用 XX as YY， 把导出的接口名字改了 */
export { func0 as myFunction, object0 as myObject };
