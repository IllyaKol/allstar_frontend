<template>
  <div class="index">
    <router-link class="logo" :to="url">
      <img src="../assets/logo.png">
    </router-link>
  </div>
</template>

<script>
  import {redirect} from "../utils/utils";
  import Vote from './Vote'

  export default {
    name: 'Star',
    methods: {
      swipeLeft() {
        if (this.$store.getters.isAuthenticated) {
          redirect(this, 'Vote')
        }
      }
    },
    mounted() {
      if (this.$store.getters.isAuthenticated) {
        this.url = "../vote";

        let self = this;
        window.onkeyup = function (e) {
          if (e.key === 'ArrowRight') {
            self.$router.push({name: 'Vote'})
          }
        }
      }
    },
    data() {
      return {
        url: '../login'
      }
    }
  }
</script>

<style scoped>
  .logo {
    background-size: 100%;
    border-radius: 50%;
  }

  .index {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
