# Learn Javascript

## Vue 3 + TypeScript + Vite

* __dirname 找不到，需要安装 npm i -D @types/node
* import 时，为什么要使用{}？如：`import { resolve } from 'path'`，如果用 `import resolve from 'path'`会报错
* 使用monorepo组织项目
* 配置vite.config.ts的rollupOptions多页面选项
* 配置connect-history-api-fallback插件，对url重写；对空路径的访问规则放到最后，否则所有路径都会被屏蔽。
* 配置vite.config.ts的base和root，修改发布后的文件目录
* nuxtjs
* pinia的使用state、action、gatters
* JavaScript 模块化module import export
* JavaScript Promise
* tsconfig.json 配置alias，加上*才能加载module

* 问题：把LoginFormData的username字段改成name后，在login中不能通过验证
* nextTick 在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。

    nextTick 是 vue 中的更新策略，也是性能优化手段，基于JS执行机制实现
    vue 中我们改变数据时不会立即触发视图，如果需要实时获取到最新的DOM，这个时候可以手动调用 nextTick


