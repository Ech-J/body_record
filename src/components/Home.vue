<template>
  <div id="topMan">
    <div id="main" ref="chartContainer" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'TopMan',
  components: {},
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
#topMan {
  width: 100%;
  height: 100%;
}
</style>
