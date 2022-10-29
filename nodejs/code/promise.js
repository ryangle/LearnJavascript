const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve(100);
        reject(200);
    }, 2000);
});

//在then中使用了第二个回调函数获取reason后，catch就不会再被调用了
promise.then((result) =>{
    console.log("then,result:"+result);
}).catch(reason =>{
    console.log("catch:"+reason);
}).finally(()=>{
    console.log("finally");
});
// promise.then((result) =>{
//     console.log("then,result:"+result);
// },(reason)=>{
//     console.log("then,reason:"+reason);
// }).catch(reason =>{
//     console.log("catch:"+reason);
// }).finally(()=>{
//     console.log("finally");
// });