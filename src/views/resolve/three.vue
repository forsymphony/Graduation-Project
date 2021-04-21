<!--
 * @Author: your name
 * @Date: 2021-04-09 14:49:13
 * @LastEditTime: 2021-04-12 20:52:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\views\resolve\three.vue
-->
<template>
  <div class="all">
      <div class="top">
            <div class="weather">
                <img :src="`../../../static/img/resolve/three/${showImg}.png`" alt="">
                <span>
                    {{weather.temperature}}
                </span>
                <div class="__center">
                    <div class="small">°C</div>
                    <div class="situation">{{weather.weather}}</div>
                </div>
                <span class="span1">绍兴市</span>
                <div class="__right">
                    <div class="small">{{weather.reporttime}}</div>
                    <div class="small">{{weather.week}}</div>
                </div>
            </div>
        </div>
        <div class="left">
            <temperature></temperature>
            <humidity></humidity>
            <co2></co2>
            <light></light>
        </div>
        <div class="bottom">
            <runway></runway>
        </div>
      <!-- <img src="../../../static/img/resolve/three/backImg.png" alt=""> -->
  </div>
</template>

<script>
import temperature from '../../components/dataVI/temperature'
import humidity from '../../components/dataVI/humidity'
import co2 from '../../components/dataVI/co2'
import light from '../../components/dataVI/light'
import runway from '../../components/dataVI/runway'

export default {
    data(){
        return {
            weather:{},
            showImg:0
        }
    },
    components:{
        temperature,
        humidity,
        co2,
        light,
        runway
    },
    mounted(){
        this.loadData()
    },
    methods:{
        loadData(){
            this.$axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=da42475dc14a0de6dd2377da0506f796&city=330600').then(
                (res)=>{
                    this.weather = res.data.lives[0]
                    let date = new Date()
                    console.log(date);
                    const year = date.getFullYear()
                    const month = date.getMonth()
                    const day = date.getDate()
                    let week = date .getDay()
                    switch(week) {
                        case 1:
                            week = '星期一';
                            break;
                        case 2:
                            week = '星期二';
                            break;
                        case 3:
                            week = '星期三';
                            break;
                        case 4:
                            week = '星期四';
                            break;
                        case 5:
                            week = '星期五';
                            break;
                        case 6:
                            week = '星期六';
                            break;
                        case 0:
                            week = '星期日';
                            break;
                    }
                    let showDate = `${year}/${month}/${day}`
                    this.weather.reporttime = showDate
                    this.weather.week = week
                    if(this.weather) {
                        if(String(this.weather.weather).indexOf('小雨') > -1) {
                            this.showImg = 2;
                        }else if(String(this.weather.weather).indexOf('雨') > -1) {
                            this.showImg = 1;
                        }else if(String(this.weather.weather).indexOf('雪') > -1) {
                            this.showImg = 3;
                        }else if(String(this.weather.weather).indexOf('阴') > -1) {
                            this.showImg = 4;
                        }else if(String(this.weather.weather).indexOf('晴') > -1) {
                            this.showImg = 5;
                        }else if(String(this.weather.weather).indexOf('多云') > -1) {
                            this.showImg = 6;
                        }
                    }
                }
            )
        }
    }
}
</script>
// 330600
<style lang="less" scoped>
.all{
    width:1920px;
    height: 1080px;
    background: red;
    background: url("../../../static/img/resolve/three/backImg.png");
    background-size: 1920px 1080px;
    position: relative;
    .top{
        // img{
        //     width:60px;
        //     height: 64px;
        // }
        // .title {
        //     color: linear-gradient(0deg, #A5FFEB 0%, #FFFFFF 100%);
        //     height: 46px;
        //     background: linear-gradient(0deg, #A5FFEB 0%, #FFFFFF 100%);
        //     display: inline-block;
        // }
        .weather{
            float: right;
            margin-right: 19px;
            img{
                width: 53px;
                height: 53px;
                vertical-align: middle;
            }
            span{
                font-size: 32px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #FFFFFF;
                vertical-align: middle;
            }
            div{
                vertical-align: middle;
            }
            .__center{
                display: inline-block;
                .situation{
                    width: 53px;
                    font-size: 13px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
            // .span1{
            //     height: 28px;
            //     font-size: 28px;
            //     font-family: Microsoft YaHei;
            //     font-weight: bold;
            //     color: #FFFFFF;
            // }
            .__right{
                display: inline-block;
                margin-left: 5px;
            }
            .small{
                font-size: 13px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                margin-bottom: -4px;
            }
        }
    }
    .left{
        position: absolute;
        top: 145px;
        left: 30px;
    }
    .bottom{
        position: absolute;
        left: 600px;
        top: 700px;
    }
}
</style>