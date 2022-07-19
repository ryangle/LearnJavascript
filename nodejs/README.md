# NodeJs

## 概况

* buildin modules
* 异步IO
* 事件驱动架构 libuv
* 单线程
* 适合IO密集型的中间层服务

## 实现一个API服务

* ts-node 模块
* 对于使用js开发的包，在ts中使用时，需要安装对应的type包，或者自己实现声明
* ts.config resolveJsonModule
* 全局对象 global
   * __filename
   * __dirname
   * timer
   * process
   * require
   * module exports

* 模块化 Commonjs,AMD,CMD,ES modules

   * Commonjs规范，模块引用、模块定义模块标识