<!--
 * @Author: your name
 * @Date: 2021-04-09 19:38:32
 * @LastEditTime: 2021-04-12 00:02:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\components\dataVI\temperature.vue
-->
<template>
    <div style="position: relative;">
        <title1 :chinese="chinese" :add="add"  :eng="eng" style="position:absolute;"></title1>
        <div class="test" id="main5">
        </div>
    </div>
</template>

<script>
import title1 from './title'

export default {
    components:{
        title1
    },
    data() {
        return {
            dataAxis:['4:00','5:00','6:00','7:00','8:00','9:00'],
            data : [
                { name: '张三', value: 88 },
                { name: '李四', value: 250 },
                { name: '王五', value: 5438 },
                { name: '赵六', value: 8848 },
                { name: '陈七', value: 9527 },
                { name: '朱八', value: 10086 }
            ],
            data1:['张三','李四','王五','赵六','陈七','朱八',],
            data2:[88,250,5438,8848,9527,10086],
            chinese:"设备电量",
            eng:'Equipment power',
            add:"../../../static/img/resolve/three/battery.png"
        }
    },
    mounted(){
        this.created()
    },
    methods:{
        created(){
            let myChart = this.$echarts.init(document.getElementById('main5'))
            let option = {
        // backgroundColor: '#000',
        polar: {
          radius: ['20%', '90%']
        },
        angleAxis: {
          show: false,
          // 最小值是0°处的数值，最大值是360°处的数值，避免出现弧度为0和2PI的数据
        //   min: value => (value.min >= 1 ? value.min - value.max / 3 : 0),
          max: value => (value.max * 4) / 3
        },
        radiusAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            color: '#2df',
            fontSize: 16
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          splitLine: {
            show: false,
          },
          data: this.data1
        },
        series: [
          {
            type: 'bar',
            coordinateSystem: 'polar',
            barWidth: 10,
            itemStyle: {
              // // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0.5,
                colorStops: [
                  { offset: 0, color: 'rgba(50, 120, 150, 0.5)' },
                  { offset: 0.5, color: 'rgba(80, 190, 210, 0.7)' },
                  { offset: 1, color: 'rgba(255, 255, 255, 0.9)' }
                ]
              },
            //   barBorderRadius: 10,
              shadowBlur: 20,
              shadowColor: 'rgba(255, 255, 255, 0.8)'
            },
            emphasis: {
              itemStyle: {
                shadowColor: 'rgba(255, 255, 255, 1)'
              }
            },
            data: this.data2
          },

          {
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: (params, api) => {
              // 给定维度上的值。
              let values = [api.value(0), api.value(1)];
              // 对于polar坐标系，还会包含其他信息：polar: [x, y, radius, angle]
              let coord = api.coord(values);
              return {
                type: 'text',
                position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                rotation: coord[3] + Math.PI / 2,
                origin: [coord[0], coord[1]],
                style: {
                  text: api.value(1),
                  fill: '#ac6',
                  fontSize: 16,
                  textAlign: 'right',
                  textVerticalAlign: 'middle',
                  x: coord[0],
                  y: coord[1]
                }
              };
            },
            data: this.data
          }
        ]
      };
            myChart.setOption(option)
        }
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 300px;
    height: 300px;
}
</style>