import Vue from 'vue';
/**
 * vue.observable 的用法
 * 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象
 * 简单来说Vue.obdervable 返回的是一个store 跟vuex 一样用即可
 * 
 */
export let store =Vue.observable({count:0,name:'李四'});
export let mutations={
    setCount(count){
        store.count=count;
    },
    changeName(name){
        store.name=name;
    }
}
//console.log(Vue.version)//2.6.10

// console.log(exports) 这个是没有的
// console.log(module)  这个是有的