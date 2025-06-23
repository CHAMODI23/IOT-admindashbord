import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Authontication/login.vue'
import Otp from '@/views/Authontication/otp.vue'
import ChangePassword from '@/views/Authontication/changePassword.vue'
import Analitics from '@/views/subpages/analitics.vue'
import Dashbord from '@/views/subpages/dashbord.vue'
import Operation from '@/views/subpages/operation.vue'
import Device from '@/views/subpages/device.vue'
import EventProcessing from '@/views/subpages/eventProcessing.vue'
import Liveparking from '@/views/subpages/liveparking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children : [
        {
          path: 'analitics',
          name: 'analitics',
          component: Analitics,
        },
        {
          path: 'live',
          name: 'live',
          component: Liveparking,
        },
        {
          path: 'dashbord',
          name: 'dashbord',
          component: Dashbord,
        },
        {
          path: 'operation',
          name: 'operation',
          component: Operation,
        },
        {
          path: 'device',
          name: 'device',
          component: Device,
        },
        {
          path: 'eventprocessing',
          name: 'eventprocessing',
          component: EventProcessing,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/otp',
      name: 'otp',
      component: Otp,
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword,
    },
  ],
})

export default router
