import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  renderError(h,err){
    // 什么时候会触发这个renderError 呢
    return h("pre",{style:{color:'red'}},err.stack)
  }
}).$mount('#app')
