# Vue.js 学习笔记

渐进式的js框架，只注重视图层。

1. Q：虚拟DOM，DOM是什么样的？
2. 双向数据绑定。
3. 声明式渲染，视图和脚本，标签属性中不能使用插值表达式
4. MVVM
5. watch(newVal,oldVal),Object.freeze(obj)
6. vue的生命周期和生命周期钩子
7. v-bind:class style的绑定，动态和静态
8. 条件渲染
9. 列表渲染 v-bind:key 可以缩写为 :key
10. 事件绑定 v-on:click
11. 表单输入绑定
12. 组件基础 Vue.component()
13. 组件注册
14. 单文件组件 需要按照npm vue-cli webpack
15. vue router
    
    router-view
    router-link

## vue-cli

1. vue/cli

2. vue/cli-service

3. cli 插件`@vue/cli-plugin-

4. vue create 、vue serve 、vue build
5. vue add 安装插件

## vuex

1. Vuex是vue的状态管理模式。采用集中式存储管理应用的所有组件的状态，并以响应的规则保证状态以一种可以预测的方式发生变化。

2. Vuex的状态存储时响应式的。

3. 不能直接改变store中的状态，改变store中状态的唯一途径就是显式的提交mutation

## 状态管理

## Flux

Flux是Facebook用户建立客户端Web应用的前端架构， 它通过利用一个单向的数据流补充了React的组合视图组件，这更是一种模式而非正式框架，你能够无需许多新代码情况下立即开始使用Flux。