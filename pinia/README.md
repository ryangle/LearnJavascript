# pinia

## pinia是什么

* Vue3的存储库，用来存放公共的数据给组件/页面使用。相当于Vuex在Vue2中的起到的作用。
* 支持vue2、vue3；
* 使用Typescript；

## 安装和使用

* 项目采用Vue3 + TS + vite搭建：npm create vite@latest pinia-app --template vue-ts
* 安装pinia:npm install pinia
* 在main.ts中，用createPinia引入pinia
* 创建store
* 定义state数据
* 读取state数据，使用storeToRefs可以把store数据转变为响应式。
* 修改state数据
* $reset()，批量更新数据：$patch()，$state，$subscribe()
* getters，如果与state中属性名字相同，将其覆盖，不要这样用。可以返回函数并传入参数。
* actions，用于定义业务逻辑，可以是异步的。

