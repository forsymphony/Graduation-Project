<template>
  <div id="pieChart"></div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.pieD()
  },
  methods: {
    pieD() {
      const myChart = this.$echarts.init(document.getElementById('pieChart'))
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color:['#9900ff','#5a4adc','#c000ff','#2499ff'],
        legend: {
          left: 'center',
          top: 'bottom',
          textStyle: {
            color:'#0fe0c1'
          }
        },
        series: [
          {
            name: '购买分布',
            type: 'pie',
            radius: [20, 60],
            // center: ['75%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              {value: 1164, name: 'wap Web'},
              {value: 1920, name: 'Android 2'},
              {value: 3050, name: 'iOS'},
              {value: 3866, name: 'PC Web'}
            ]
          }
        ],
        // itemStyle: {
        //   color: {
        //     type: 'linear',
        //     x: 10,
        //     y: 20,
        //     x2: 30,
        //     y2: 40,
        //     colorStops: [
        //       {
        //         offset: 0, color: '#fff' // 0% 处的颜色
        //       },
        //       // {
        //       //   offset: 0.3, color: 'red' // 0% 处的颜色
        //       // },
        //       // {
        //       //   offset: 0.6, color: 'yellow' // 0% 处的颜色
        //       // }, 
        //       {
        //         offset: 1, color: 'blue' // 100% 处的颜色
        //       }
        //     ],
        //     global: true // 缺省为 false
        //   }
        // }
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
#pieChart{
  width: 422px;
  height: 310px;
}
</style>