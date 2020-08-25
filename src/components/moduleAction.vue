<template>
    <div>
        <input type="text" :value="count">
        <div>
            <button @click="increment">点我加一次</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const moduleA = {
    state: {
        count: 0,
        amount: 1
    },
    mutations: {
      increment(state){
        //对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
        state.count++;
      }
    },
    actions: {
      test({state,commit,rootState}){
        //console.log(state)// context.state
        //console.log(commit)// context.commit
        /**
          这个根节是所有模块的对象
        */
        //console.log(rootState)// context.rootState 根节点状态则为 context.rootState
        // console.log("moduleA触发了") 如果两个模块都有相同的action 方法那么这两个方法都会被dispatch
        commit("increment") // 这个时候可以触发mutations
      }
    },
    getters: {}
}
const moduleB = {
    state: {
        count: 1,
        amount: 234
    },
    mutations: {
       increment(state){
        //对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
        state.count++;
       
      }
    },
     actions: {
      test({state,commit,rootState}){
        // 如果不同的模块有相同的actions方法 这样的话这两个模块的方法都会被触发
        //这样使得多个模块能够对同一 mutation 或 action 作出响应。
        console.log("moduleB触发了")
        commit("increment") // 这个时候可以触发mutations
      }
    },
    getters: {}
}
const store = new Vuex.Store({
   modules:{
    a:moduleA,
    b:moduleB
   },
   state:{
    a:123
   }
})
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

/**
  列子一
  传统的commit mutation 
*/
export default {
    name: 'HelloWorld',
    data: function() {
        return {

        }
    },
    created: function() {
        this.$store = store;
    },
    computed: {
        ...mapState({
          count:state=>state.a.count
        })
    },
    methods: {
        increment() {
          this.$store.dispatch("test")
        }
    }
}
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