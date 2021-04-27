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
            <img src="../../../static/img/resolve/three/标题背景@2x.png" alt="" class="topImg1">
            <div class="middenTitle">
                <img src="../../../static/img/resolve/three/LOGO@2x.png" alt="" class="middenTitleImg1">
                <img src="../../../static/img/resolve/three/大标题@2x.png" alt="" class="middenTitleImg2">
            </div>
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
            <light></light>
        </div>
        <img src="../../../static/img/resolve/three/定位@2x.png" alt="" class="point">
        <div class="centerBack">
            <img src="../../../static/img/resolve/three/center.jpg" alt="">
        </div>
        <div class="bottom">
            <co2 ref="co2"></co2>
        </div>
        <div class="right">
            <img src="../../../static/img/resolve/three/大棚背景图@2x.png" alt="" class="greenhouseBack">
            <power></power>
        </div>
      <!-- <img src="../../../static/img/resolve/three/backImg.png" alt=""> -->
  </div>
</template>

<script>
import temperature from '../../components/dataVI/temperature'
import humidity from '../../components/dataVI/humidity'
import co2 from '../../components/dataVI/co2'
import light from '../../components/dataVI/light'
import power from '../../components/dataVI/power'

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
        power
    },
    mounted(){
        window.scrollTo(0,0)
        this.loadData()
        this.getData()
        this._GXResizeEvent()
        window.addEventListener("resize", this._GXResizeEvent)
        //deviceName:460049838501462  460049838501463 460049838501464
    },
    beforeDestroy(){
        removeEventListener('resize',this._GXResizeEvent)
        document.body.style.transform = 'scale(1,1)'
        document.body.style.msTransform = 'scale(1,1)'
        document.body.style.mozTransform = 'scale(1,1)'
        document.body.style.webkitTransform = 'scale(1,1)'
        document.body.style.oTransform = 'scale(1,1)'
        document.body.style.transformOrigin = '50% 50% 0'
        document.body.style.backgroundSize = 'auto'
        document.body.style.overflow = 'visible'
    },
    methods:{
        _GXResizeEvent() {
            const nDefault_width = 1920;
            const nDefault_height = 1080;
            const nClient_width = document.documentElement.clientWidth;
            const nClient_height = document.documentElement.clientHeight;
            const nAuot_width = nClient_width / nDefault_width;
            const nAuot_height = nClient_height / nDefault_height;
            const jNodeBody = document.body;
            if(nAuot_width>nAuot_height){
                jNodeBody.style.transform = `scale(${nAuot_width},${nAuot_height})`;
                jNodeBody.style.msTransform = `scale(${nAuot_width},${nAuot_height})`;
                jNodeBody.style.mozTransform = `scale(${nAuot_width},${nAuot_height})`;
                jNodeBody.style.webkitTransform = `scale(${nAuot_width},${nAuot_height})`;
                jNodeBody.style.oTransform = `scale(${nAuot_width},${nAuot_height})`;
                jNodeBody.style.transformOrigin = 'left top';
                jNodeBody.style.backgroundSize = "100%";
                jNodeBody.style.overflow = 'hidden';
            }
        },
        logData(){
            this.$refs.co2.getData('460049838501463')
        },
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
        },
        getData(){
            this.$axios.get('/api/DeviceInfoController/getAllDeviceInfos').then(
                (res)=>{
                    console.log(res)
                }
            )
        }
    }
}
</script>
<style lang="less" scoped>
.all{
    width:1920px;
    height: 1080px;
    // background: red;
    // width: 100%;
    // height: 100%;
    background: url("../../../static/img/resolve/three/backImg.png");
    background-size: 1920px 1080px;
    // background-size:100vw 100vh;
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
        .topImg1{
            width:100%;
            position: absolute;
            z-index:1;
        }
        .middenTitle{
            position: absolute;
            z-index: 2;
            left: 50%;
            transform: translateX(-50%);
            top: 31px;
            .middenTitleImg1{
                display: inline-block;
                width: 64px;
                height: 68px;
                margin-right: 22px;
                vertical-align: middle;
            }
            .middenTitleImg2{
                display: inline-block;
                width: 706px;
                height: 55px;
                vertical-align: middle;
            }
        }
        .weather{
            z-index: 2;
            position: absolute;
            right: 19px;
            top:10px;
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
        top: 100px;
        left: 15px;
    }
    .bottom{
        position: absolute;
        top: 742px;
        left:530px;
    }
    .point{
        width: 27px;
        height: 31px;
        position: absolute;
        top: 432px;
        left: 685px;
    }
    .centerBack{
        width: 305px;
        height: 197px;
        border-radius: 10px;
        background: #FFFFFF;
        position: absolute;
        top: 231px;
        left: 709px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 295px;
            height: 187px;
            border-radius: 5px;
        }
    }
    .right{
        position: absolute;
        left:1206px;
        top: 100px;
        .greenhouseBack{
            width: 699px;
            height: 636px;
        }
    }
}
</style>