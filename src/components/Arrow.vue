<template>
  <router-link :class="'arrowLink' + side" :to="swipeTo">
    <img v-bind:src="require(`../assets/arrow${side}.png`)">
  </router-link>
</template>

<script>
  export default {
    name: 'Arrow',
    props: ['side', 'swipeTo']
  }
</script>

<style scoped>
  .arrowLinkLeft {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .arrowLinkRight {
    top: 0;
    left: 90%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }
</style>


<!--<arrow-side class="arrowLeft" side="Left" swipeTo="../signup"></arrow-side>-->
<!--<arrow-side class="arrowRight" side="Right"-->
            <!--swipeTo="../signup"></arrow-side>-->
