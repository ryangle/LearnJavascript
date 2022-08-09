# reactive

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



