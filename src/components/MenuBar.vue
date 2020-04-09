<template>
  <div class="menu-bar">
    <div class="dropdown">
      <input class="dropdown-toggle" type="image" data-toggle="dropdown"
             :src="require(`../assets/star_white_40x40.png`)"/>
      <ul class="dropdown-menu">
        <li>
          <div class="menu-element" v-on:click="moveTo('Star')">Home</div>
        </li>
        <li>
          <div class="menu-element" v-on:click="moveTo('Vote')">Voting</div>
        </li>
        <li>
          <div class="menu-element" v-on:click="moveTo('Profile')">Profile
          </div>
        </li>
        <li>
          <div class="menu-element" v-on:click="logout">Logout</div>
        </li>
      </ul>
    </div>

    <div class="name">
      <p>ALLSTAR</p>
    </div>
  </div>
</template>

<script>
  import Star from './Star'

  export default {
    name: 'MenuBar',
    methods: {
      moveTo(path) {
        if (path !== this.$route.name) {
          return this.$router.push({name: path})
        }
      },
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'Star'})
        })
      }
    }
  }
</script>

<style scoped>
  .menu-bar {
    height: 40px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    background-color: #2e8b57;
  }

  .name {
    color: white;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .name p {
    margin: 0;
  }

  .dropdown-toggle:hover {
    opacity: 0.1;
    background-color: gray;
  }

  .dropdown-menu {
    left: 0;
    padding: 0;
    color: #2e8b57;
    border-radius: 0;
    font-weight: 500;
  }

  .menu-element {
    height: 30px;
    text-align: center;
  }

  .menu-element:hover {
    color: white;
    cursor: pointer;
    background-color: #2e8b57;
  }
</style>
