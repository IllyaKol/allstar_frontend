<template>
  <div class="cards">
    <menu-bar-component></menu-bar-component>
    <div class="flex-container">
      <div v-for="star in stars">
        <card-component :star="star"></card-component>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card'
  import MenuBar from './MenuBar'

  export default {
    name: 'Vote',
    components: {
      'card-component': Card,
      'menu-bar-component': MenuBar
    },
    created: function () {
      axios({
        url: '/data/',
        method: 'GET',
      })
        .then(response => {
          this.stars = response.data;
          this.$store.commit('init_stars', this.stars);
        })
        .catch(error => {
          console.log(error)
        })
    },
    data() {
      return {
        stars: []
      }
    }
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }
</style>
