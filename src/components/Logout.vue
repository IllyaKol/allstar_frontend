<template>
  <div class="logout">
    <button v-on:click="logout" class="btn btn-outline-success">LOGOUT</button>
  </div>
</template>

<script>
  import Star from './Star'

  export default {
    name: 'Logout',
    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'Star'})
        })
      }
    }
  }
</script>

<style scoped>

</style>
