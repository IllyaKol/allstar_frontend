<template>
  <v-touch @swipeleft="swipeHandler" @swiperight="swipeHandler">
    <div class="login">
      <div class="image">
        <img src="../assets/star_150x150.png">
      </div>
      <form class="loginForm" v-on:submit.prevent="login" method="post">
        <div class="loginBackground">
          <p v-if="error">
            {{ error }}
          </p>
          <p>
            <input class="form-control form-control-sm" id="email"
                   v-model="email"
                   type="email" name="email"
                   placeholder="Email" required>
          </p>
          <p>
            <input class="form-control form-control-sm" id="password"
                   v-model="password" type="password"
                   name="password" placeholder="Password" required>
          </p>
          <p>
            <input class="submitButton" type="submit" value="Login"
                   v-on:keyup.enter="submit">
          </p>
        </div>
      </form>
    </div>
  </v-touch>
</template>

<script>
  import Vote from "./Vote";
  import {baseUrl} from "../config/config"


  export default {
    name: 'Login',
    mounted: function () {
      let self = this;
      window.onkeyup = function (e) {
        if (e.target.nodeName !== 'INPUT' &&
          (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
          self.$router.push({name: 'SignUp'})
        }
      }
    },
    methods: {
      swipeHandler() {
        this.$router.push({name: 'SignUp'})
      },
      login() {
        let email = this.email;
        let password = this.password;
        let self = this;
        let url = this.url;
        this.$store.dispatch('login', {email, password, self, url})
          .then(() => this.$router.push({name: 'Vote'}))
          .catch(err => console.log(err))
      }
    },
    data() {
      return {
        error: null,
        email: null,
        password: null,
        url: baseUrl + '/user/login/',
      }
    }
  }
</script>

<style scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: red;
    border-style: solid;
  }

  /*.submitButton {*/
    /*display: none;*/
  /*}*/

</style>
