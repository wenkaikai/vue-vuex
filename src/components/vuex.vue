<template>
    <div>
        <input type="text" :value="value">
        <div>
          <button @click="increment">点我加一次</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        amount:1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
import {mapState} from 'vuex';


/**
    列子一 普通的方法操作一波

*/
//console.log(store.state.count)//

export default {
    name: 'HelloWorld',
    data:function(){
      return {
          value:''
      }
    },
    methods:{
      increment(){
        // 点击一次用commit 触发函数
        store.commit('increment')
        this.value = store.state.count;
        console.log(store.state)
      }
    }
}


/**
  列子二 辅助函数操作一波
*/

// console.log(mapState)//



// export default {
//     name: 'HelloWorld',
//     data:function(){
//       return {
        
//       }
//     },
//     created:function(){
//      this.$store = store;
//      // 为什么要进行这一步的操作呢
//     },

//     /**
//       mapState 列子一

//       如果是state  里面的值和要映射的值是同一个名字我们就可以这样做

//        这样在mounted 里面就可以获取到this.count 和 this.amount 
//     */ 
//     // computed:mapState(['count','amount']), 




//     /**
//       mapState 列子二 
//       如果state 里面的这是和计算属性返回的值不一样呢 

//     */

//     // computed:mapState({
//     //   value:state =>state.count
//     // }),

//     /**
//       mapState 列子三

//       如果computed 里面还有其他的函数该怎么办呢。
//     */

//     computed:{

//       ...mapState({
//         value:state=>state.count,
//         amount:state=>state.amount
//       })
//     },

//     mounted:function(){
//       console.log(this.value);//0
//       console.log(this.amount)//1
//     },
//     methods:{
//       increment(){
//         // 点击一次用commit 触发函数
//         store.commit('increment')
//         this.value = store.state.count;
//         console.log(store.state)
//       }
//     }
// }







</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>