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
          this.stars = response.data
        })
        .catch(error => {
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
    border: darkslategrey;
    border-style: solid;
  }

  .flex-container .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 20px;
    width: 250px;
    height: 450px;
  }

  .flex-container .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }
</style>
