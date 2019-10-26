import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import vueRouter from 'vue-router'
import router from './router.js'
// import Vuelidate from 'vuelidate'
// import { validationMixin } from 'vuelidate'

// Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  // mixins: [validationMixin],
  // validations: {},
}).$mount('#app')
