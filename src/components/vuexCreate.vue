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
        increment(state,num) {
          // console.log(num) //如果是以载荷的方式这里获取的就是参数传过来的
          //console.log(num)  // 如果是以对象的方式触发这里获取的就是｛num: 123，type: "increment"｝
               state.count++
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



/**
  列子 二

  mapMutation 搞一下
*/
// export default {
//     name: 'HelloWorld',
//     data: function() {
//         return {

//         }
//     },
//     created: function() {
//         this.$store = store;
//     },
//     computed: {
//         ...mapState(['count'])
//     },
//     methods: {
//       // 这样就不用写再写函数和commit 了
//        ...mapMutations(['increment'])
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