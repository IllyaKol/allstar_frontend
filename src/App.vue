<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Login from './components/Login'
  import Cookies from 'js-cookie';
  import {baseUrl} from "./config/config";

  axios.defaults.baseURL = baseUrl;
  axios.defaults.headers.common.Authorization = Cookies.get('token');

  export default {
    name: 'App',
    created: function () {
      let self = this;
      axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            self.$store.dispatch('logout').then(() => {
              self.$router.push({name: 'Login'})
            })

          }
          throw err;
        });
      });
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
