<template>
  <div class="text">
    <div ref="echartsWrapper" style="height: 400px;width: 200px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chart: null,
      option: {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G','A', 'B', 'C', 'D', 'E', 'F', 'G','A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 50
        },
        series: [{
          data: [20, 30, 40, 50, 60, 70, 80,20, 30, 40, 50, 60, 70, 80,20, 30, 40, 50, 60, 70, 80,],
          type: 'bar'
        }]
      }
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.echartsWrapper)
    this.chart.setOption(this.option)
    this.chart.on('datazoom', this.handleDataZoom)
  },
  methods: {
    handleDataZoom (params) {
      if (params && params.event) {
        let event = params.event
        if (event.wheelDelta) {
          event.preventDefault()
          let zoom = event.wheelDelta > 0 ? -0.1 : 0.1
          this.chart.dispatchAction({
            type: 'dataZoom',
            start: params.batch[0].start + zoom,
            end: params.batch[0].end - zoom
          })
        }
      }
    }
  }
}
</script>
<style scope>
.text {
  position: absolute;
  top: 0;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>