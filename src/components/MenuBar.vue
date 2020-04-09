<template>
  <div class="menu-bar">
    <div class="img">
      <img src="../assets/star_white_40x40.png">
    </div>
    <div class="name">
      <p>ALLSTAR</p>
    </div>
    <!--<logout-component></logout-component>-->
  </div>
</template>

<script>
  import Logout from './Logout'

  export default {
    name: 'MenuBar',
    components: {
      'logout-component': Logout
    }
  }
</script>

<style scoped>
  .menu-bar {
    height: 40px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    /*justify-content: space-around;*/
    /*padding: 5px 0;*/
    /*margin-bottom: 10px;*/
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

</style>
