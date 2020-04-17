<template>
  <div class="statistic">
    <menubar-component></menubar-component>
    <div class="small">
      <doughnut-chart :chart-data="datacollection"></doughnut-chart>
    </div>
  </div>
</template>

<script>
  import DoughnutChart from "../charts/DoughnutChart";
  import MenuBar from './MenuBar'
  import {generateColors} from '../utils/utils'
  import {createHoverColors} from "../utils/utils";

  export default {
    name: 'Statistic',
    components: {
      'menubar-component': MenuBar,
      DoughnutChart
    },
    mounted() {
      let labels = [];
      let data = [];
      for (let key in this.$store.state.stars) {
        let star = this.$store.state.stars[key];
        labels.push(star.fullname);
        data.push(star.votes)
      }

      const backgroundColor = generateColors(labels.length);
      const hoverBackgroundColor = createHoverColors(backgroundColor);

      this.datacollection = {
        datasets: [{
          data: data,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor
        }],
        labels: labels
      }
    },
    data() {
      return {
        datacollection: null
      }
    },
  }
</script>

<style scoped>
  .small {
    max-width: 600px;
    margin: 10px auto;
  }
</style>
