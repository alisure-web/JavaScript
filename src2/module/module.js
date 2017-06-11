
/**
 * ES6模块主要有两个功能：export和import
 * export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
 * import用于在一个模块中加载另一个含有export接口的模块。
 * */

/*
* 1：每一个模块只加载一次，每一个JS只执行一次，如果下次再去加载同目录下同文件，
*       直接从内存中读取。一个模块就是一个单例，或者说就是一个对象；
* 2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
* 3：模块内部的变量或者函数可以通过export导出；
* 4：一个模块可以导入别的模块
* */

import { bar, foo, func0, func1 } from "./export-1"
console.log(bar + "_" + foo);
func0();
func1();

import { myFunction, myObject } from "./export-2"
myFunction();
console.log(myObject);

import { square, diag, sqrt } from "./export-3"
console.log(square(12));
console.log(diag(3, 3));
console.log(sqrt(5));

import myObject4 from "./export-4"
console.log(myObject4.name);
console.log(myObject4.getName());

import myFunction5 from "./export-5"
console.log(myFunction5());

import { myFunction as myFunction6, myObject as myObject6} from "./export-6"
myFunction6();
console.log(myObject6);



