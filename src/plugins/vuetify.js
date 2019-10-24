import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' 

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  primary: '#3f51b5',
  secondary: '#b0bec5',
  accent: '#8c9eff',
  error: '#ff00ff'
});
