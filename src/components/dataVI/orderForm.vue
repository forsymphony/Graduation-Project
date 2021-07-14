<template>
  <div id="main1"></div>
</template>

<script>
export default {
  data() {
    return{
      data: [],
      dataAxis: [],
      data1:[]
      // yMax: 150,
      // dataShadow: []
    }
  },
  mounted() {
    this.dataD()
    this.timeD()
    this.tableD()
  },
  methods:{
    dataD() {
      for(let i =0;i<100;i++) {
        let j = Math.round(Math.random() * 150)
        let k = Math.round(Math.random() * 150)
        this.data.push(j)
        this.data1.push(k)
      }
    },
    timeD(){
      let h=16
      let m=0
      // let time=h+":"+m
      for(let i =0;i<100;i++) {
        if(m==59){
          m=0
          h++
        } else{
          m++
        }
        m=this.check(m)
        let time = h+":"+m
        this.dataAxis.push(time)
      }
    },
    check(i){
      //方法一，用三元运算符
      var num
      i<10?num="0"+i:num=i
      return num
    },
    tableD() {
      let myChart = this.$echarts.init(document.getElementById('main1'))
      let option = {
      xAxis: {
        data: this.dataAxis,
        type: 'category',
        axisLabel: {
          textStyle: {
              color: '#fff'
          }
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        z: 10
      },
      legend: {
        data:['新增订单数','退单数'],
        top:'bottom',
        textStyle: {
          color:'#0fe0c1'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
      type:'value',
        axisLine: {
          show: true
        },
        axisTick: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          name:'新增订单数',
          type: 'bar',
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#24c4fa'},
                {offset: 1, color: '#6ca6e9'}
              ]
            )
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          },
          data: this.data
        },
        {
          name:'退单数',
          type: 'bar',
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#a063ce'},
                {offset: 1, color: '#d558e9'}
              ]
            )
          },
          emphasis: {
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          },
          data: this.data1
        }
      ]
    };
    // Enable data zoom when user click bar.
      let zoomSize = 100;
      myChart.on('click',  (params)=> {
        myChart.dispatchAction({
          type: 'dataZoom',
          startValue: this.dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: this.dataAxis[Math.min(params.dataIndex + zoomSize / 2, this.data.length - 1)]
        });
      });
      myChart.setOption(option)
    }
  }
}
</script>

<style>
#main1{
  width: 849px;
  height: 406px;
}
</style>