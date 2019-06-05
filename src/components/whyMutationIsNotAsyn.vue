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

const store = new Vuex.Store({
    state: {
        count: 0,
        amount: 1
    },
    mutations: {

      // 两秒后这个状态是可以改变的为什么说commit 里面只能异呢
      // 我们就不知道什么时候状态会发生改变，所以也就无法追踪了，这与 Mutation 的设计初心相悖，所以强制规定它必须是同步函数。
        increment(state,num) {
          window.setTimeout(function(){
            state.count++
          },2000)
               
        }
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
        ...mapState(['count'])
    },
    methods: {
        increment() {
            // 点击一次用commit 触发函数以载荷方式

            // store.commit('increment',{
            //   num:123
            // })


             // 以对象的方式

             store.commit({
              type:'increment',
              num:123
             })

            console.log(store.state)
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