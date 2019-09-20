<template>
  <div>
    <input type="text" :value="count">
    <button @click="increment">按钮</button>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    incrementMutation(state,payload){
      state.count += payload.count;
    }
  },
  actions:{
    incrementAction({commit},params){
      commit({
        type:"incrementMutation",
        count:params.count
      })
     
    }
  }
})
export default {
  data:function(){
    return {
     
    }
  },
  computed:{
    count(){
      // computed 会主动执行下面的函数(如果computed没有被引用就不会执行)
      return store.state.count
    },
    count1(){
      console.log("123")
    }
  },
  methods:{
    increment(){
      store.dispatch({
        type:"incrementAction",
        count:10
      })
    }
  }
}
</script>
<style>

</style>


