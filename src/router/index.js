import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/login/login.vue'
import Info from '@/page/info/info.vue'
import Chat from '@/page/chat/chat.vue'
import User from '@/page/user/user.vue'
import Person from '@/page/person/person.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/logo'
    },
    {
      path: '/logo',
      name: 'login',
      component: Login
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/chat/:userid',
      name: 'chat',
      component: Chat
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    }
  ]
})
