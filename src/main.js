// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store';
import router from './router'


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueTouch from 'vue-touch';


Vue.config.productionTip = false;
Vue.use(VueTouch);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
