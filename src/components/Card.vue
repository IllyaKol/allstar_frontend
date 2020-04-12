<template>
  <div class="card">
    <div class="imgBox">
      <img class="card-img-top" src="https://picsum.photos/250/250"
           alt="Card image cap">
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ star.fullname.slice(0, 15) }}</h3>
      <p class="card-info">
        Age: {{ star.age }}
        <br>
        Club: {{ star.club }}
      </p>
      <div class="card-voting">
        <button v-on:click="voting" class="button"><img :src="require(`../assets/${img_src}.png`)">  x {{ star.votes }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['star'],
    mounted() {
      if (this.$store.getters.userVoted(this.star.id)) {
        this.img_src = "star_gray_30x30"
      }
    },
    methods: {
      voting() {
        let starId = this.star.id;
        axios({
          url: '/voting/' + starId + '/',
          method: 'GET',
        })
          .then(response => {
            if (response.status === 200 && response.data['message'] === 'ADDED') {
              this.$store.commit('incrementVote', starId);
              this.$store.commit('addUserVote', starId);
              this.img_src = "star_gray_30x30";
            } else if (response.status === 200 && response.data['message'] === 'DELETED') {
              this.$store.commit('decrementVote', starId);
              this.$store.commit('removeUserVote', starId);
              this.img_src = "star_white_30x30";
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    data() {
      return {
        img_src: "star_white_30x30"
      }
    }
  }
</script>

<style scoped>
  .card {
    transition: 0.5s ease;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 20px;
    width: 250px;
    height: 450px;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }

  .card-body {
    padding: 20px 0 0 0;
  }

  .card-voting {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .button {
    border: none;
    padding: 8px;
    color: white;
    background-color: #2e8b57;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  .button:hover {
    background-color: #1b5233;
  }

</style>
