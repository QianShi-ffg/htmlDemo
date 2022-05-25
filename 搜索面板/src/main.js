import Vue from 'vue'
import App from './App.vue'
import vuescroll from 'vuescroll';
Vue.config.productionTip = false
Vue.use(vuescroll);

new Vue({
  render: h => h(App),
}).$mount('#app')
