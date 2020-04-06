<template>
  <v-touch @swipeleft="swipeHandler" @swiperight="swipeHandler">
    <div class="login">
      <div class="image">
        <img src="../assets/star_150x150.png">
      </div>
      <form class="loginForm" v-on:submit.prevent="Login" method="post">
        <div class="loginBackground">
          <p v-if="error">
            {{ error }}
          </p>
          <p>
            <input class="form-control form-control-sm" id="email"
                   v-model="email"
                   type="email" name="email"
                   placeholder="Email">
          </p>
          <p>
            <input class="form-control form-control-sm" id="password"
                   v-model="password" type="password"
                   name="password" placeholder="Password">
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
  import HelloWorld from "./HelloWorld";
  import {myLoginRoutine} from 'the-created-shared-file-containing-auth-api-logic'


  export default {
    name: 'Login',
    mounted: function () {
      // utils.swipingPage(this, 'SignUp')
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
      Login() {
        axios({
          method: 'post',
          url: this.action,
          data: {
            email: this.email,
            password: this.password
          }
        }).then(response => {
          this.$router.push({name: 'HelloWorld'})
        }).catch(error => {
          this.error = error.response.data['error']
        });
      }
    },
    data() {
      return {
        error: null,
        email: null,
        password: null,
        action: 'http://0.0.0.0:8000/user/login/',
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

  .submitButton {
    display: none;
  }

</style>
