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

/**

    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
*/

const store = new Vuex.Store({
    state: {
        count: 0,
        amount: 1
    },
    mutations: {
        increment(state,num) {
               state.count++
        }
    },
    actions:{
      increment1(context){
        console.log(context)
        context.commit('increment')
      }
    }
})
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
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

      //  这个是传统的方法
        // increment() {
        //    store.dispatch("increment1")

        // }

      // 同样的我们也有mapActions 
      ...mapActions({
        increment:'increment1'  // 这样是吧this.increment 映射为 this.$store.dispatch('increment1');  用对象的方式是因为方法名字和要映射的名字不一样。
      })
      // 如果方法名字和要映射的名字是一样的我们可以直接
      // ...mapActions(['increment1'])
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