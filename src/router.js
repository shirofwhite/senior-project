import Vue from 'vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify';

import Mainpage from '@/components/Mainpage'
import Repositories from '@/components/Repositories'
import Predict from '@/components/Predict'
import Information from '@/components/Information'
import Edit from '@/components/EditInfo'

Vue.use(vuetify)
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Mainpage',
        component: Mainpage
      },
      {
        path: '/Repositories',
        name: 'Repositories',
        component: Repositories
      },
      {
        path: '/Prediction',
        name: 'Predict',
        component: Predict
      },
      {
        path: '/Information',
        name: 'Information',
        component: Information
      },
      {
        path: '/EditInfo',
        name: 'Edit',
        component: Edit
      },
    ]
  })
  
