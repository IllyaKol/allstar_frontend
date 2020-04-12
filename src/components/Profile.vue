<template>
  <div class="profile">
    <menu-bar-component></menu-bar-component>
    <div class="profileBody">
      <div class="image">
        <img src="../assets/star_150x150.png">
      </div>
      <form class="profileForm" v-on:submit.prevent="updateUser">
        <p v-if="error">
          {{ error }}
        </p>
        <p>
          <input class="form-control form-control-sm" id="firstName"
                 v-model="firstName" type="text" name="firstName"
                 placeholder="First Name">
        </p>
        <p>
          <input class="form-control form-control-sm" id="lastName"
                 v-model="lastName" type="text" name="lastName"
                 placeholder="Last Name">
        </p>
        <p>
          <input class="form-control form-control-sm" id="password"
                 v-model="password" type="password"
                 name="password" placeholder="Password">
        </p>
        <p>
          <input class="form-control form-control-sm" id="repeatPassword"
                 v-model="repeatPassword" type="password"
                 name="repeatPassword" placeholder="Repeat Password">
        </p>
        <p>
          <input class="submitButton" type="submit" value="Login"
                 v-on:keyup.enter="submit">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import MenuBar from "./MenuBar";

  export default {
    name: 'Profile',
    components: {
      'menu-bar-component': MenuBar
    },
    methods: {
      updateUser() {
        if (this.password !== this.repeatPassword) {
          this.error = 'Passwords not equal'
        }
        let data = {};
        if (this.firstName) {
          data['first_name'] = this.firstName
        }
        if (this.lastName) {
          data['last_name'] = this.lastName
        }
        if (this.password) {
          data['password'] = this.password
        }

        axios({
          url: '/user/update/',
          method: 'PUT',
          data: data
        })
          .then(response => {
            for (let key in data) {
              this.$store.commit('updateUserField', {field:key, fieldData: data[key]})
            }
            this.error = 'Success';
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    data() {
      return {
        error: null,
        firstName: this.$store.state.user.first_name,
        lastName: this.$store.state.user.last_name,
        password: '',
        repeatPassword: ''
      }
    }
  }
</script>

<style scoped>
  .profileBody {
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
  }

  .submitButton {
    display: none;
  }
</style>
