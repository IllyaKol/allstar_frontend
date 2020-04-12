<template>
  <v-touch @swipeleft="swipeHandler" @swiperight="swipeHandler">
    <div class="signup">
      <div class="image">
        <img src="../assets/star_150x150.png">
      </div>
      <form class="signUpForm" v-on:submit.prevent="singUp" method="post">
        <div class="signUpBackground">
          <p v-if="error">
            {{ error }}
          </p>
          <p>
            <input class="form-control form-control-sm" id="email"
                   v-model="email" type="email" name="email"
                   placeholder="Email" required>
          </p>
          <p>
            <input class="form-control form-control-sm" id="firstName"
                   v-model="firstName" type="text" name="firstName"
                   placeholder="First Name" required>
          </p>
          <p>
            <input class="form-control form-control-sm" id="lastName"
                   v-model="lastName" type="text" name="lastName"
                   placeholder="Last Name" required>
          </p>
          <p>
            <input class="form-control form-control-sm" id="password"
                   v-model="password" type="password" name="password"
                   placeholder="Password" required>
          </p>
          <p>
            <input class="submitButton" type="submit" value="Sign Up"
                   v-on:keyup.enter="submit">
          </p>
        </div>
      </form>
    </div>
  </v-touch>
</template>

<script>
  export default {
    name: 'SignUp',
    mounted() {
      let self = this;
      window.onkeyup = function (e) {
        if (e.target.nodeName !== 'INPUT' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
          self.$router.push({name: 'Login'})
        }
      }
    },
    methods: {
      swipeHandler() {
        this.$router.push({name: 'Login'})
      },
      singUp() {
        axios({
          method: 'post',
          url: '/user/create/',
          data: {
            email: this.email,
            first_name: this.firstName,
            last_name: this.lastName,
            password: this.password
          }
        }).then((response) => {
          this.$router.push({name: 'Login'})
        }).catch(error => {
          let emailError = error.response.data['email'][0];
          this.error = emailError.charAt(0).toUpperCase() + emailError.slice(1, -1)
        });
      }
    },
    data() {
      return {
        error: null,
        email: null,
        firstName: '',
        lastName: '',
        password: null,
      }
    }
  }
</script>

<style scoped>
  .signup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submitButton {
    display: none;
  }
</style>
