<!--
 * @Author: your name
 * @Date: 2021-04-11 19:07:49
 * @LastEditTime: 2021-04-11 19:25:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\components\dataVI\light.vue
-->
<template>
    <div style="margin-top:22px;position: relative;">
        <title1 :chinese="chinese" :add="add"  :eng="eng" style="position:absolute;top:24px;left:18px;"></title1>
        <div class="test" id="main4">
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
            data:[0.1,0.2,0.3,0.4,0.5,0.6],
            chinese:"Light intensity",
            eng:'光照强度',
            add:"../../../static/img/resolve/three/light.png"
        }
    },
    mounted(){
        this.getData('460049838501462')
    },
    methods:{
        getData(deviceNmae){
            this.$axios.get(`/api/sensorData/getSoiRealtimeDataRealtimeDataByDeviceName?deviceName=${deviceNmae}`).then(
                (res)=>{
                    console.log(res.data.data)
                    let arr = []
                    let arr2 = []
                    let i = 0
                    res.data.data.forEach(ele => {
                        if(i<12){
                            let a = ele.updateTime.split(" ")[1].slice(0,5)
                            arr.push(a)
                            arr2.push(ele.updateValue)
                            i++
                        } else {
                            return
                        }
                    })
                    this.dataAxis = arr
                    this.data = arr2
                    console.log(arr);
                    console.log(arr2);
                    this.created()
                }
            )
        },
        created(){
            let myChart = this.$echarts.init(document.getElementById('main4'))
            let option = {
                grid:{
                    left:60,
                    bottom:55,
                    top:100
                },
                xAxis: {
                    data: this.dataAxis,
                    type: 'category',
                    axisLabel: {
                        rotate:40,
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    backgroundColor:'#06B16C',
                    textStyle: {
                        color: "rgba(255, 255, 255, 1)"
                    },
                    formatter: '{c0}'
                },
                yAxis: {
                type:'value',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                        // formatter:"{value}%"
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
                    smooth:true,
                    data: this.data,
                    areaStyle: 
                        {
                            color:new this.$echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#7CF1DF'},
                                    {offset: 0.7, color: '#6C786E'},
                                    {offset: 1, color: 'RGBA(67, 67, 52, 0.1)'}
                                ]
                            )
                        }
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
    height: 313px;
    backdrop-filter: blur(10px);
    border-radius: 10px 10px 10px 66px;
}
</style>