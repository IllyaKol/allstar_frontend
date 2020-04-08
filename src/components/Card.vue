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
      </p>
      <p class="card-club">
        {{star.id}} | Club: FC Barcelona
        <button v-on:click="voting" class="button">{{ buttonName }} ({{ star.votes }})</button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['star'],
    mounted() {
      let variable = '+';
      if (this.$store.getters.userVoted(this.star.id)) {
        variable = '-'
      }
      this.buttonName = variable;
    },
    methods: {
      voting() {
        let starId = this.star.id;
        axios({
          url: 'http://0.0.0.0:8000/voting/' + starId,
          method: 'GET',
          headers: {'Authorization': 'Bearer ' + this.$store.state.token}
        })
          .then(response => {
            if (response.status === 200 && response.data['message'] === 'ADDED') {
              this.$store.commit('incrementVote', starId);
              this.$store.commit('addUserVote', starId);
              this.buttonName = '-';
            } else if (response.status === 200 && response.data['message'] === 'DELETED') {
              this.$store.commit('decrementVote', starId);
              this.$store.commit('removeUserVote', starId);
              this.buttonName = '+'
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    data() {
      return {
        buttonName: null
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

  .button {
    border: none;
    outline: 0;
    height: 25%;
    bottom: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #2e8b57;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

</style>
