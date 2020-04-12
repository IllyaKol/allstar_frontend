<template>
  <v-touch @swiperight="swipeRight">
    <div class="logout">
      <button v-on:click="logout" class="logout-btn">LOGOUT</button>
    </div>
  </v-touch>
</template>

<script>
  import {redirect} from "../utils/utils";
  import Star from './Star'

  export default {
    name: 'Logout',
    methods: {
      swipeRight() {
        redirect(this, 'Profile')
      },
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'Star'})
        })
      }
    },
    mounted() {
      let self = this;
      window.onkeyup = function (e) {
        if (e.key === 'ArrowLeft') {
          redirect(self, 'Profile')
        }
      }
    }
  }
</script>

<style scoped>
  .logout {
    width: 100%;
    height: 100%;
    position: fixed;

    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
