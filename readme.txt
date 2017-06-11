JavaScript 编程相关

2017-05-29
    建立项目

2017-05-29
    null_undefined.js:
        null和undefined的使用

    for_in.js:
        说明了for in语句的使用情况

    judge_equal.js:
        js中的相等判断：number、string、boolean、null、undefined、object

    variable_function.js:
        说明了变量声明提前、函数声明提前、立即执行的函数和严格模式

    decoupling.js:
        关于降低UI耦合的思考

    single_global_variable.js:
        单全局变量

    asynchronous_module_definition.js:
        需要安装，使用这个命令安装require.js：npm install requirejs
        AMD规范：require.js (amd_math.js为加载的模块)

    event_handle.js：
        事件处理相关的

    check_type.js:
        检测原始值: typeof - number、string、boolean、undefined
        检测引用值: instanceof - Object、Array、Date、Error、RegExg
        检测函数: typeof - Function
        检测数组: Array.isArray() - Array
        检测属性: hasOwnProperty or in

    config_data.js：
        抽离配置数据

2017-05-30
    file_directory.js：
        项目的文件和目录的组织方式

2017-06-02
    logistic.js:
        逻辑运算和短路求值

2017-06-11

    配置babel,参见：https://github.com/alisure-web/babel

    设置File Watcher进行自动运行npm run build(详见图片Watcher.png)

    运行：
        1.在命令行中：babel-node src2/module/module.js
        2.在node中：直接运行dist/module/module.js

    src2/module/module.js
        import 和 export 的几种使用方式。


2017-06-11
    es6特性学习（src2/es6）

    src2/es6/demo/spread-operator.js:
        展开运算符。
        对象展开运算符插件：
            npm install babel-plugin-transform-object-rest-spread
            .babelrc:
                "plugins": ["transform-object-rest-spread"]


