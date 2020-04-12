<template>
  <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight">
    <div class="cards">
      <div class="flex-container">
        <div v-for="star in stars">
          <card-component :star="star"></card-component>
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
  import Card from './Card'
  import {redirect} from "../utils/utils";

  export default {
    name: 'Vote',
    components: {
      'card-component': Card,
    },
    methods: {
      swipeRight() {
        redirect(this, 'Star')
      },
      swipeLeft() {
        redirect(this, 'Profile')
      }
    },
    mounted() {
      let self = this;
      window.onkeyup = function (e) {
        if (e.key === 'ArrowLeft') {
          redirect(self, 'Star')
        }
        if (e.key === 'ArrowRight') {
          redirect(self, 'Profile')
        }
      }
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
  .cards {
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }
</style>
