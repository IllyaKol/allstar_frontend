import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

import Star from '@/components/Star'
import Vote from '@/components/Vote'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import SignUp from '@/components/SignUp'
import Profile from '@/components/Profile'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
  } else {
    next('/login')
  }
};

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
  } else {
    next('/vote')
  }
};


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Star',
      component: Star,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/profile/',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup/',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: ifAuthenticated,
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})
