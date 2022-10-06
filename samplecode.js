//JavaScript要点
// 区分大小写、忽略空格和换行符等
// 字面量、标识符、保留字
// Unicode、转义、归一化
// 分号可选

//两种属性访问表达式
// expression.identifier
// expression[expression]
// 条件式属性方法终端副效应
// expression?.identifier
// expression?.[expression]
// 条件式函数调用
// ?.()

//对象创建表达式，在不给构造函数传参时，可以省略括号
// new Date
// new Date()

// delete操作符
// 被删除的属性或数组元素不仅会被设置为undefined值。
// 当删除一个属性时，这个属性就不复存在了。尝试读取不存在的属
// 性会返回undefined，可以通过in操作符测试某个属性是否存在。
// 删除某个数组元素会在数组中留下一个“坑”，并不改变数组的长度。
// 只删除自有属性，不删除继承属性

// for/of循环，数组、字符串、集合、映射等可迭代对象可以使用
// for/in循环，对象默认是不可迭代的，如果想迭代对象的属性可以使用

// 复制对象所有属性到数组中
// let o = {x:1,y:2,z:3};
// let a = [],i = 0;
// for(a[i++] in o);
// console.log("a:" + a);//a:x,y,z

//数组的使用
// let primes = [2, 3, 4, 5];
// console.log("primes.length:" + primes.length);
// primes[4] = 6;
// console.log("primes.length:" + primes.length);
// primes[6] = 9;
// primes[5] = true;
// primes[4] = { topic: "javascrpit" };

// console.log("primes.length:" + primes.length);
// for (let i = 0; i < primes.length; i++) {
//     console.log(primes[i]);
// }

// 对象
// 原型式继承是JavaScript的主要特性，原型链
// 动态的，可以动态添加和删除属性
// 常见操作包括创建、设置、查询、删除、测试、枚举对象的值
// 属性特性（property attribute）：writable、enumerable、configurable
// Object.prototype
// Object.create()
// Object.create()的一个用途是防止对象被某个第三方库函数意
// 外（但非恶意）修改。这种情况下，不要直接把对象传给库函数，
// 而要传入一个继承自它的对象。如果函数读取这个对象的属性，可
// 以读到继承的值。而如果它设置这个对象的属性，则修改不会影响
// 原始对象。
// 查询属性时会用到原型链，而设置属性时不影响原型链

// 修改原型的值，会影响所有继承自该原型的对象
// let p = {x:1};
// let o = Object.create(p);
// let q = Object.create(p);
// console.log(o.x);
// p.x = 2;
// console.log(o.x);
// console.log(q.x);

// //修改子对象属性不会影响原型以及其他对象
// q.x = 3;
// console.log(p.x);
// console.log(o.x);
// console.log(q.x);
// //删除原型属性
// delete p.x;
// console.log(o.x);

// 测试对象
// in 关键字
// hasOwnProperty()
// propertyIsEnumerable()

// Object.keys()
// Object.getOwnPropertyNames()
// Obejct.getOwnPropertySymbols()
// Reflect.ownKeys()

// 扩展对象
// Object.assign()
// 扩展操作符 ...

//序列化对象
// JSON.stringify()
// JSON.parse()

// 自定义Object.prototype上的方法
// toString() toLocaleString() valueOf()
// Object.prototype上没有定义toJSON()方法，但JSON.stringify()会使用它
// let point = {
//     x:1,
//     y:2,
//     toString:function(){return `(${this.x},${this.y})`},
//     valueOf:function(){return Math.hypot(this.x,this.y);}
// };
// console.log(point.toString());
// console.log(point.toLocaleString());
// let n = Number(point);
// console.log(n);

//可计算的属性名
//属性访问器 accessor property

// 创建数组的几种方式
// 数组字面量
// 对可迭代对象使用...扩展操作符
// Array()构造函数
// 工厂方法 Array.of() 和 Array.from()

//给数组添加属性
// let a = [0,1,2];
// a["a"] = "a";
// console.log(a);//[ 0, 1, 2, a: 'a' ]
// console.log(a.toString());//0,1,2
// console.log(a + " length:"+a.length);

//如果将length属性设置为一个小于其当前值的非负整数n，则任何索引大于或等于n的数组元素都会从数组中被删除

//push() pop() shift() unshift() 
// delete 数组元素不会影响数组长度，相当于给元素赋undefined
//entries()
// forEache() map() filter()
// find() findIndex()
// every() some()
// reduce() reduceRight()
// flat() flatMap()
// concat()
// splice()  slice() fill() copyWithin()
// includes()
// sort()
// reverse()
// join()

// 静态数组函数
// Array.isArray()

// 类数组对象

//函数，在JavaScript中，函数就是对象
// 5种调用函数的方式：函数、方法、构造函数、call() apply()、隐式调用

//定义并调用函数，以确定当前是不是严格模式
// "use strict"
// const strict = (function(){return !this;}());
// console.log(strict);

//方法中的嵌套函数this是全局对象或者undefined，而箭头函数可以继承this值
// 定义剩余形参 rest parameter ...

//闭包，捕获私有作用域内的变量
//函数的属性、方法和构造函数
// length、name、prototype
// call()、apply()、toString()llxd

//类
//extends  super static
// 私有字段 #
// 避免使用子类，利用对象的组合而非继承

//new.target引用的是被调用的构造函数 new.target.name

//模块m
//标准库
// console.log("setTimeout");
// setTimeout(()=>{console.log("start");},1000);
// console.log("end");

//期约 
// fulfill reject pending settle
//期约链

//元编程

//defer和async属性都会明确告诉浏览器，当前链接的脚本中没有使用document.write()生成HTML输出。因此浏览器可以在下载脚本的同时继续解析和渲染文档。

//客户端JavaScript
//事件：事件类型、事件目标、事件对象、事件传播
//事件传播的三个阶段