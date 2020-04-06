import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Star from '@/components/Star'
import SignUp from '@/components/SignUp'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Star',
      component: Star
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        console.log(isAuthenticated);
        console.log('!!!!!!!!!!!!');
        next('Login')
      }
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup/',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
