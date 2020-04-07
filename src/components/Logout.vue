<template>
  <div class="logout">
    <button v-on:click="logout" class="btn btn-outline-success">LOGOUT</button>
  </div>
</template>

<script>
  import Login from './Login'

  export default {
    name: 'Logout',
    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'Login'})
        })
      }
    }
  }
</script>

<style scoped>

</style>
