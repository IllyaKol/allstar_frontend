<template>
  <v-touch @swiperight="swipeRight">
    <div class="logout">
      <div class="box-1"></div>
      <div class="box-2">
        <a @click="logout">
          <div class="btn btn-one"></div>
        </a>
      </div>
      <div class="box-3"></div>
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
  @import 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300';

  .logout {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  div[class*=box] {
    height: 33.33%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-1 {
    background-color: #39b472;
  }

  .box-2 {
    background-color: #3C3C3C;
  }

  .box-3 {
    background-color: #39b472;
  }

  .btn {
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
  }

  .btn-one {
    color: #FFF;
    transition: all 0.5s;
    position: relative;
  }

  .btn-one span {
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .btn-one::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .btn-one::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .btn-one:hover::before {
    transform: rotate(-45deg);
    background-color: rgba(255, 255, 255, 0);
  }

  .btn-one:hover::after {
    transform: rotate(45deg);
    background-color: rgba(255, 255, 255, 0);
  }

</style>
