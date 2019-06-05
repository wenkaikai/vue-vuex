<template>
    <div>
        <input type="text" :value="count">
        <div>
            <button @click="increment">点我加一次</button>
            {{doneTodos1}}
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

/**
  列子一 用getter 返回一个对象

*/

// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     // getter 直接返回一个对象
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     }
//   }
// })

// import { mapState } from 'vuex';
// import { mapMutations } from 'vuex';
// import { mapActions } from 'vuex';
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
//      increment(){
//       console.log(this.$store.getters.doneTodos)
//      }
     
//     }
// }



/**
  列子二 用getter 返回一个函数

*/

// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     // getter 直接返回一个函数;

//     doneTodos: state => {
//       return (judge)=>state.todos.filter(todo => todo.done==judge)
//     }
//   }
// })

// import { mapState } from 'vuex';
// import { mapMutations } from 'vuex';
// import { mapActions } from 'vuex';
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
//      increment(){
//       // 我们传一个参数进去这样很有利于代码的拓展我们有getter 还有定义的参数这样我们就可以很自由过滤自己的想要的数据。
//       let arry = this.$store.getters.doneTodos(false);
//      }
     
//     }
// }

// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     // getter 直接返回一个函数;

//     doneTodos: state => {
//       return (judge)=>state.todos.filter(todo => todo.done==judge)
//     }
//   }
// })




/**
  列子三 用mapGetters

  mapGetters  是用在computed 里面 说明 mapGetters 同mapState 一样是取值的

*/

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    // getter 直接返回一个函数;

    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
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

        // mapGetters 属性名字等于getters 的名字
        // ...mapGetters(['doneTodos'])

        //  这个时候是属性名字和方法名字不一样。
        ...mapGetters({
          doneTodos1:'doneTodos'
        })
    },
    methods: {
     increment(){
      // 我们传一个参数进去这样很有利于代码的拓展我们有getter 还有定义的参数这样我们就可以很自由过滤自己的想要的数据。
      let arry = this.$store.getters.doneTodos(false);
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