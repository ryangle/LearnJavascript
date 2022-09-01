# Vue slot 详解

https://blog.csdn.net/huangyilinnuli/article/details/119272944

在Vue中，我们使用组件来组织页面和组织代码，类似于搭积木，每一个组件都是一个积木，使用一些相同或者不同组件就能搭建出我们想要的页面。slot（插槽）是组件功能的重要组成部分，插槽必须用于组件才有意义。它为组件提供了对外的接口，允许从组件外部传递内容，并将这部分内容放置到指定的位置。

使用 slot
当一个组件可能被使用至少两次并且两次使用内容（这里指组件视图的组成）不同时，插槽才有存在的必要。注意： 本文的代码都是基于Vue3编写。

基础用法
Link.vue

```vue
<template>
  <a :href="href" class="link">
    <!-- 留个插槽，外界传入内容放置在这里 -->
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.link {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
```

App.vue

```vue
<template>
  <div class="app">
    <Link href="https://baidu.com"> 百度</Link>
    <br />
    <Link href="https://google.com" style="margin-top: 10px">
      <!-- 这里允许放置任意的内容，包括字符串和标签 -->
      <span>Icon</span>谷歌</Link
    >
  </div>
</template>

<script>
import Link from "./Link.vue";

export default {
  components: {
    Link,
  },
};
</script>

```

以上实现了两个组件Link.vue和App.vue，Link.vue是一个链接组件，在组件内部已经定义好了样式，然后链接的内容交由外界使用时填充。在App.vue组件内则使用了Link.vue组件两次，并且两次传入的内容不同。

具名插槽
上面的Link.vue只要求填充一份内容，那么当我们需要在组件的好几个位置都填充不同的内容应该怎么办？这时候可以使用具名插槽，就是给组件的每个填充区域都取个名字，这样在使用的时候就可以往对应名字的那个区域填充内容。

Page.vue

```vue
<template>
  <div class="page">
    <header class="page-header">
      <slot name="header"></slot>
    </header>
    <div class="page-center">
      <aside class="page-aside">
        <slot name="aside"></slot>
      </aside>
      <div class="page-content">
        <slot name="content"></slot>
      </div>
    </div>
    <footer class="page-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
.page {
  border: 1px solid #333;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-header {
    height: 50px;
    border-bottom: 1px solid #333333;
  }
  &-center {
    flex: 1;
    display: flex;
  }
  &-aside {
    width: 150px;
    border-right: 1px solid #333333;
  }
  &-content {
    flex: 1;
  }

  &-footer {
    border-top: 1px solid #333;
    height: 30px;
  }
}
</style>

```

App.vue

```vue
<template>
  <Page style="width: 500px; height: 300px; margin: 30px 30px">
    <template v-slot:header>这是标题</template>
    <template v-slot:aside>这是侧边栏</template>
    <template v-slot:content>这是内容区域</template>
    <template v-slot:footer>这是页脚</template>
  </Page>

  <Page style="width: 500px; height: 300px; margin: 30px 30px">
    <template v-slot:header>
      <h2>走过路过</h2>
    </template>
    <template v-slot:aside>
      <ul>
        <li>东临碣石</li>
        <li>以观沧海</li>
      </ul>
    </template>
    <template v-slot:content>这是内容区域</template>
    <template v-slot:footer>这是页脚</template>
  </Page>
</template>

<script>
import Page from "./Page.vue";

export default {
  components: {
    Page,
  },
};
</script>

```
作用域插槽
为啥叫作用域插槽？首先要搞清楚作用域这个概念。在JS中,作用域表示的是当前的执行上下文，只有在当前作用域中变量才可以被使用。作用域有层次之分，分为父作用域和子作用域，子作用域可以访问父作用域中的变量，这一层层的往上则形成了作用域链。JS中只有全局作用域和函数作用域，ES6新增了块级作用域。关于作用域，这里不再赘言，有需要的同学可以去MDN作用域查看。

Vue本质上还是js，模板最终会被编译成render函数，每个组件都有一个render函数。下面先看个例子：

Count.vue

```vue
<template>
  <div>
    <p>当前数字：{{ count }}</p>
    <button @click="onAdd">+</button>
    <button @click="onMinus">-</button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onAdd() {
      this.count++;
    },
    onMinus() {
      this.count--;
    },
  },
};
</script>
```

App.vue

```vue
<template>
  <div>
    <Count style="border: 1px solid red">
      <p>这就是填充Count组件的插槽</p>
      <p>appCount:{{ appCount }}</p>
      <p>Count组件中的count变量：{{ count }}</p>
    </Count>
    <br />
    <button @click="onClick">app add</button>
  </div>
</template>

<script>
import Count from "./Count.vue";

export default {
  components: {
    Count,
  },
  data() {
    return {
      appCount: 0,
    };
  },
  methods: {
    onClick() {
      this.appCount++;
    },
  },
};
</script>

```
从上面的效果图中可以看到，在App.vue组件中使用Count.vue组件时,在Count.vue组件的插槽中，能够访问appCount变量，但是不能访问Count.vue组件的Count变量，这是为什么呢？理论上，插槽传入的内容最终会插入到Count.vue组件中，那么也应该可以访问Count.vue组件的变量才对啊？

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

上面的一段引用摘自Vue文档，这段文字表明了，在App.vue中的一切，包括Count.vue组件的插槽内容都是在App.vue组件下编译的，也就是Count.vue组件的插槽模板可以访问App.vue组件的所有变量，但不能访问Count.vue的任意变量。如果我一定要在插槽中访问Count.vue的count变量呢？这个时候作用域插槽就派上用场了。

作用域插槽允许在组件中对插槽所在的上下文暴露某一些变量，改写以上的Count.vue组件，

```vue
<template>
  <div>
    <p>当前数字：{{ count }}</p>
    <button @click="onAdd">+</button>
    <button @click="onMinus">-</button>
    <!-- 把count变量暴露到插槽作用域 -->
    <slot :count="count"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onAdd() {
      this.count++;
    },
    onMinus() {
      this.count--;
    },
  },
};
</script>
```

App.vue

```vue
<template>
  <div>
    <Count style="border: 1px solid red">
     <!--Count组件插槽暴露的所有变量都放在 slotProps对象中 -->
      <template v-slot="slotProps">
        <p>这就是填充Count组件的插槽</p>
        <p>appCount:{{ appCount }}</p>
        <p>Count组件中的count变量：{{ slotProps.count }}</p>
      </template>
    </Count>
    <br />
    <button @click="onClick">app add</button>
  </div>
</template>

<script>
import Count from "./Count.vue";

export default {
  components: {
    Count,
  },
  data() {
    return {
      appCount: 0,
    };
  },
  methods: {
    onClick() {
      this.appCount++;
    },
  },
};
</script>

```

这就是作用域插槽，本质上了是允许在父组件作用域访问到子组件作用域，它为插槽模板区域提供了一个数据来源于子组件的上下文。作用域插槽的用处还是挺广的，总的来说当你需要它时自然会用到它，如果想提前学习，可以看一下elementUI的table组件。

slot 实现
上面就插槽的使用说了一大堆，关于插槽的实现还是没有涉及，下文讲解在Vue中插槽是如何实现的？

首先，我们都知道，无论是使用jsx还是模板,最终都会编译成render函数，并且render函数在执行之后会输出 Virtual Dom ,下面先看一个组件在编译完成之后是什么样子？

Comp.vue

```vue
<template>
  <div>
   	<p>count: {{count}}</p>
    <button @click="onClick">
      ADD
    </button>
    <slot :count="count"></slot>
  </div>
</template>
<script>
 import {defineComponent, ref} from 'vue'

 export default defineComponent((props) => {
   const count = ref(0);
   const onClick = () => {
     count.value++
   }
   return {
     count,
     onClick
   }
 }) 
</script>
```

App.vue

```vue
<template>
  <div>
   <Comp>
   	<template v-slot="slotProps">
      <p>
         {{magRef}}： {{slotProps.count}}
      </p>
    </template> 
   </Comp>
  </div>
</template>

<script>
   import {defineComponent, ref} from 'vue'
  import Comp from './Comp.vue'

  
 export default defineComponent({
   components: {Comp},
   setup(props) {
     const magRef = ref('当前的数字是')
     return {
       magRef
     }
   }
 }) 
</script>
```
Comp.vue编译之后：

```javascript
/* Analyzed bindings: {} */
import {
  defineComponent,
  ref
} from 'vue'

const __sfc__ = defineComponent((props) => {
  const count = ref(0);
  const onClick = () => {
    count.value++
  }
  return {
    count,
    onClick
  }
})

import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  renderSlot as _renderSlot,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock
} from "vue"

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, [
    _createElementVNode("p", null, "count: " + _toDisplayString(_ctx.count), 1 /* TEXT */ ),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
    }, " ADD "),
    _renderSlot(_ctx.$slots, "default", {
      count: _ctx.count
    })
  ]))
}
__sfc__.render = render
__sfc__.__file = "Comp.vue"
export default __sfc__
```

App.vue编译之后：

```javascript
/* Analyzed bindings: {} */
import {
  defineComponent,
  ref
} from 'vue'
import Comp from './Comp.vue'


const __sfc__ = defineComponent({
  components: {
    Comp
  },
  setup(props) {
    const magRef = ref('当前的数字是')
    return {
      magRef
    }
  }
})

import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  resolveComponent as _resolveComponent,
  withCtx as _withCtx,
  createVNode as _createVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock
} from "vue"

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Comp = _resolveComponent("Comp")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_Comp, null, {
      default: _withCtx((slotProps) => [
        _createElementVNode("p", null, _toDisplayString(_ctx.magRef) + "： " + _toDisplayString(slotProps.count), 1 /* TEXT */ )
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
__sfc__.render = render
__sfc__.__file = "App.vue"
export default __sfc__
```

这里给大家推荐一个尤雨溪搞的测试网站Vue SFC Playground 可以直接看到组件编译之后的js代码

这个编译是在加载.vue文件的时候就执行了，runtime阶段是不存在模板字符串了（使用UMD的时候会存在），在浏览器中执行的都是编译之后的js。下面具体分析一下以上Comp.vue和App.vue编译之后的js代码。

首先在Comp.vue中，<slot :count="count"></slot>会被编译成_renderSlot(_ctx.$slots, "default", {count: _ctx.count}),下面看看_renderSlot中干了什么？

```javascript
export type Slot = (...args: any[]) => VNode[]

export type InternalSlots = {
  [name: string]: Slot | undefined
}
export function renderSlot(
  slots: Slots,
  name: string,
  props: Data = {},
  // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback?: () => VNodeArrayChildren,
  noSlotted?: boolean
): VNode {
  let slot = slots[name]
 
  openBlock()
  const validSlotContent = slot && ensureValidVNode(slot(props))
  const rendered = createBlock(
    Fragment,
    { key: props.key || `_${name}` },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && (slots as RawSlots)._ === SlotFlags.STABLE
      ? PatchFlags.STABLE_FRAGMENT
      : PatchFlags.BAIL
  )
  return rendered
}
```

_renderSlot(_ctx.$slots, "default", {count: _ctx.count})这一句显然是执行_ctx.$slots.default({count: _ctx.count})，这说明在父组件中，每个插槽模板最终会被编译成一个函数，并且这个函数会被传递到子组件，在子组件里面会以props（这里是{count: _ctx.count}）作为参数执行插槽函数，最终_ctx.$slots.default({count: _ctx.count})会返回virtual dom对象。

下面再看一下App.vue组件：

```vue
<Comp>
    <template v-slot="slotProps">
        <p>
            {{magRef}}： {{slotProps.count}}
        </p>
    </template> 
</Comp>

```

被编译成了：

```javascript
_createVNode(_component_Comp, null, {
    default: _withCtx((slotProps) => [
    _createElementVNode("p", null, _toDisplayString(_ctx.magRef) + "： " + _toDisplayString(slotProps.count), 1 /* TEXT */ )
    ]),
    _: 1 /* STABLE */
})
```

请忽略_withCtx,显然模板会编译成一个函数，并传递到子组件，进而在子组件中构建出完整的virtual dom， 上面中_ctx是当前组件的上下文，slotProps则是作用域插槽暴露的参数。

由此可以做一个总结，vue slot的实现原理：

所有的模板会被编译成创建vnode的函数。
父组件中传递给子组件的插槽（每个插槽都是一个函数，即名字不同的插槽为不同的函数）内容模板也会被编译成函数并且传递给子组件，模板中如果使用了父组件的变量，那么会通过闭包的形式在插槽函数中被使用。
子组件在接收到父组件传递的插槽内容函数，会以在slot暴露的变量（只有作用域插槽有这些变量）为参数执行这个函数，返回vnode，这个vnode会作为子组件vnode的一部分。
总结
本文从使用和实现两个方面讲解了vue slot，有一定的深度，但忽略了一些使用和实现上的细节，有不足之处还请指出且谅解。
————————————————
版权声明：本文为CSDN博主「perryhuan9」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/huangyilinnuli/article/details/119272944