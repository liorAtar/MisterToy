<script>
import { DoughnutChart } from "vue-chart-3";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "toy-chart",
  components: { DoughnutChart, BarChart },
  data() {
    return {
      labels: ["Doll", "Battery Powered", "Baby"],
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
  async created() {
    await this.$store.dispatch({ type: 'loadToys' })
    const labels = []
    this.$store.getters.toysLables.forEach(label => {
      labels.push(label.label)
    });

    this.labels = labels
  },
  methods: {},
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    getDataPriceAvg() {
      const data = this.labels.map(label => {
        const filteredToys = this.toys.filter(toy =>
          toy.labels.includes(label)
        )
        return filteredToys.reduce(
          (avgPrice, toy) => avgPrice + (toy.price / filteredToys.length),
          0
        )
      })
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Price Avg',
            borderRadius: 6,
            data,
            backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#b4e4ff", "#008ddc"]
          },
        ],
      }
    },
    getDataLabelStock() {
      const data = this.labels.map(label => {
        return this.toys.reduce(
          (acc, toy) =>
            toy.labels.includes(label) && toy.inStock
              ? acc + 1
              : acc,
          0
        )
      })
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Stock Data',
            borderRadius: 6,
            data,
            backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#b4e4ff", "#008ddc"]
          },
        ],
      }
    }
  },
};
</script>

<template>
  <section v-if="toys">
    <h3>Avrege Price Of Product Category</h3>
    <DoughnutChart :chartData="getDataPriceAvg" />
    <h3>Percentage Of Yoys That Are In Stock By Label</h3>
    <BarChart :chartData="getDataLabelStock" :options="options" />
  </section>
</template>
