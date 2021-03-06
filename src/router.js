import Vue from 'vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify';

import Mainpage from '@/components/mainpage'
import Repositories from '@/components/Repositories'
import Information from '@/components/Information'
import Edit from '@/components/EditInfo'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Subdashboard from '@/components/Subdashboard'

Vue.use(vuetify)
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/Mainpage',
        name: 'Mainpage',
        component: Mainpage
      },
      {
        path: '/Repositories',
        name: 'Repositories',
        component: Repositories
      },
      {
        path: '/Information/:projectName',
        name: 'Information',
        component: Information
      },
      {
        path: '/EditInfo/:projectName',
        name: 'Edit',
        component: Edit
      },
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/Dashboard/:districtName',
        name: 'Subdashboard',
        component: Subdashboard
      },
    ]
  })
  
