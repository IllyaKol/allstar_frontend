<template>
  <div class="cards">
    <div class="menu-bar">
      <logout-component></logout-component>
    </div>
    <div class="flex-container">
      <div v-for="star in stars">
        <!--{{ star }}-->
        <card-component :star="star"></card-component>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card'
  import Logout from './Logout'

  console.log('#TODO: change this code!');

  export default {
    name: 'Home',
    components: {
      'card-component': Card,
      'logout-component': Logout
    },
    created: function () {
      axios({
        url: 'http://0.0.0.0:8000/data',
        // url: 'http://192.168.0.105:8000/data/',
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + this.$store.state.token}
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
    /*border: darkslategrey;*/
    /*border-style: solid;*/
  }
</style>
