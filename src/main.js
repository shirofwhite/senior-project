import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import vueRouter from 'vue-router'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
