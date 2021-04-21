<!--
 * @Author: your name
 * @Date: 2021-04-09 19:38:32
 * @LastEditTime: 2021-04-11 19:23:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\components\dataVI\temperature.vue
-->
<template>
    <div style="position: relative;">
        <title1 :chinese="chinese" :add="add"  :eng="eng" style="position:absolute;"></title1>
        <div class="test" id="main1">
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
            data:[23,13,23,13,23,13],
            data1:[18,24,18,24,18,24],
            chinese:"温度",
            eng:'Temperature',
            add:"../../../static/img/resolve/three/temperature.png"
        }
    },
    mounted(){
        this.created()
    },
    methods:{
        created(){
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
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                        color:"rgba(255,255,255,0.15)"
                    },
                    },
                    splitLine: {
                        show: false
                    },
                    z: 10,
                },
                legend: {
                        data:['货架一','货架二'],
                        left: "73%",
                        textStyle: {
                            color:'#0fe0c1'
                    },
                    itemHeight:5, //圆点大小
                    itemWidth:30, 
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    backgroundColor:'#06B16C',
                    textStyle: {
                        color: "rgba(255, 255, 255, 1)"
                    }
                },
                yAxis: {
                type:'value',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                        formatter:"{value}°C"
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color:"rgba(255,255,255,0.15)"
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                series: [
                    {
                    name:'货架一',
                    type: 'line',
                    itemStyle: {
                        color: new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFFFFF'},
                                {offset: 1, color: '#06B16B'}
                            ]
                        )
                    },
                    // emphasis: {
                    //     itemStyle: {
                    //     color: new this.$echarts.graphic.LinearGradient(
                    //         0, 0, 0, 1,
                    //         [
                    //         {offset: 0, color: '#2378f7'},
                    //         {offset: 0.7, color: '#2378f7'},
                    //         {offset: 1, color: '#83bff6'}
                    //         ]
                    //     )
                    //     }
                    // },
                    data: this.data
                    },
                    {
                    name:'货架二',
                    type: 'line',
                    itemStyle: {
                        color: new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ffffff'},
                            {offset: 1, color: '#CE5F97'}
                        ]
                        )
                    },
                    // emphasis: {
                    //     itemStyle: {
                    //     color: new this.$echarts.graphic.LinearGradient(
                    //         0, 0, 0, 1,
                    //         [
                    //         {offset: 0, color: '#2378f7'},
                    //         {offset: 0.7, color: '#2378f7'},
                    //         {offset: 1, color: '#83bff6'}
                    //         ]
                    //     )
                    //     }
                    // },
                    data: this.data1
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
    width: 500px;
    height: 230px;
}
</style>