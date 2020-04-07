import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Star from '@/components/Star'
import SignUp from '@/components/SignUp'
import store from '@/store/store'

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
    next('/helloworld')
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
      path: "*",
      redirect: '/'
    }
  ]
})
