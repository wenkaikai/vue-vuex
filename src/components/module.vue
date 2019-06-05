<template>
  <div>
    <input type="text" :value="count1">
    <div>
      <button @click="increment">点我加一次</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const moduleA = {
  state: {
    count: 0,
    amount: 1
  },
  mutations: {
    increment(state) {
      //对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
      state.count++;
    }
  },
  actions: {},
  getters: {}
};
const moduleB = {
  state: {
    count: 1,
    amount: 2
  },
  mutations: {
    increment(state) {
      //对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
      state.count++;
      state.count++;
    }
  },
  actions: {},
  getters: {}
};
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});
import { mapState } from "vuex";
import { mapMutations } from "vuex";

/**
  列子一
  传统的commit mutation 
*/
export default {
  name: "HelloWorld",
  data: function() {
    return {};
  },
  created: function() {
    this.$store = store;
  },
  // computed: {
  //     ...mapState({
  //       count:state=>state.a.count
  //     })
  // },
  computed: {
      count1:function(){
          console.log(1234)
          return this.$store.state.a.count
      }
  
  },
  methods: {
    increment() {
      // 为什么modules 都在state 里面
      //console.log(this.$store.state)//{a:{},b:{}}
      //this.$store.state.a.commit("increment")  为什么模块里面没有mutation 方法 因为 store 后面不需要加 a。除了 state 是分模块的，其他 mutations 和 actions 都不分模块，因此规划的时候要注意不要重名！
      //
      this.$store.commit("increment"); // 这样就能触发模块a 里面的 mutation
      // console.log(this.$store)
    }
  }
};
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