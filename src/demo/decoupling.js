/**
 * Created by ialis on 2017/5/29.
 */

/*
* decoupling(解除耦合)
* 
* 要点：JavaScript的正确运行不应该依赖于CSS
* 
* 1. 将JavaScript从CSS中抽离：
*       很容易做到（让我把JS写到CSS中我也不会啊）。
* 2. 将CSS从JavaScript中抽离：
*       两者通过className沟通：
*       即所有的样式定义在css中（哪怕只有一个属性），在JS中通过设置元素的className来改变CSS。
*       （当需要通过JS计算得到某些CSS属性的值时，将之抽象出来，写在公共或者易于修改的地方）
* 3. 将JavaScript从HTML中抽离：
*       不要把JS代码写到HTML标签中：两者通过id（称为钩子）沟通
* 4. 将HTML从JavaScript中抽离：
*       模板或者服务器加载（本质上都是从其他地方获取HTML片段）
*       在<script type="text/x-my-template" id="my-template"></script>中存放HTML模板。
*       （类似于格式化字符串）
* 5. 将CSS从HTML中抽离：
*       所有的样式定义在css中。
*       （如果只有一个 style="display: none;" 样式，可以写在HTML中）
* 6. 将HTML从CSS中抽离：
*       不存在此种情况。
* 
* 各部分联系：
* 1. CSS和HTML：只通过className联系，可容易做到。
* 2. CSS和JS：只通过className联系，也可容易做到（!important），需要计算的CSS属性除外（应尽量降低耦合）。
* 3. JS和HTML：只通过id（钩子）联系，可通过模板减少耦合
* */
