<template>
  <div class="card">
    <div class="imgBox">
      <img class="card-img-top" src="https://picsum.photos/250/250"
           alt="Card image cap">
    </div>
    <div class="card-body">
      <div>
        <h3 class="card-title">{{ star.fullname.slice(0, 15) }}</h3>
        <p class="card-info">
          Age: {{ star.age }}
        </p>
        <p class="card-club">
          Club: FC Barcelona
        </p>
        <a href="#" class="button">to vote +1 ({{ star.votes }})</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['star']
  }
</script>

<style scoped>
  .card-body {
    padding: 20px 0 0 0;
  }

  .button {
    border: none;
    /*outline: 0;*/
    bottom: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: grey;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

</style>
