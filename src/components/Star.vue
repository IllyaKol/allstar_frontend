<template>
  <div class="index">
    <router-link class="logo" to="../login">
      <!--<img src="../assets/logo.png">-->
      <img src="../assets/logoStar.png">
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .logo {
    background-size: 100%;
    /*width: 200px;*/
    /*height: 200px;*/
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
