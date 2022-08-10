# reactive and ref

## reactive

用于生成一个普通对象的响应式代理。


reactive传递的参数必须是对象(json/arr)，在实际开发过程中如果有多处都是响应式的数据，这个时候我们只需要创建一个reactive。

应该像下面这样用：

```javascript
const objData = r eactive({
    data1:[
        {
            name:'张三',
            age:18
        }
    ],
    data2:{
        name:'李四',
        age:19
    }
});
```

不要这样用：
```javascript
const data1 = reactive({
            name:'张三',
            age:18
        });

const data2=reactive({
        name:'李四',
        age:19
})
```

## ref

接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。

可以将 ref 看成 reactive 的一个变形版本，这是由于 reactive 内部采用 Proxy 来实现，而 Proxy 只接受对象作为入参，这才有了 ref 来解决值类型的数据响应，如果传入 ref 的是一个对象，内部也会调用 reactive 方法进行深层响应转换

ref函数仅能用于监听基本类型，不能用于复杂类型（对象、数组），监听复杂类型的变化可以使用reactive函数。

1. 在setup函数中，可以使用ref函数，用于创建一个响应式数据，当数据发生改变时，Vue会自动更新UI

```javascript
<template>
    <div>
        <h1>{{mycount}}</h1>
        <button @click="changeMyCount">changeMyCount</button>
    </div>
</template>
 
<script>
import { ref } from "vue";
export default {
    setup(){
        const mycount = ref(2);
        const changeMyCount = ()=>{
            mycount.value = mycount.value + 1 ;
        }
        
        return {
            mycount,
            changeMyCount,
        }
    }
};
</script>
```

2. 通过ref属性获取元素

vue3需要借助生命周期方法，在setup执行时，template中的元素还没挂载到页面上，所以必须在mounted之后才能获取到元素。

```javascript
<template>
    <div>
        <div ref="box"><button>hello</button></div>
    </div>
</template>
 
<script>
import { ref } from "vue";
export default {
    setup(){
        const box = ref(null);
        onMounted(()=>{
            console.log(box.value);
        })
    }
};
</script>
```