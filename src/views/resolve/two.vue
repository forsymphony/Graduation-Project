<template>
  <div class="back">
    <div class="title">电商618数据大屏</div>
    <div class="back1"></div>
    <div class="time">{{time}}</div>
    <div class="content">
      <div>
        <div class="money">
          <div class="mTitle">
            <div class="mTitleS1">电商数据</div>
            <div class="mTitleS2">Sell Data</div>
          </div>
          <div class="smallTitle">
            <span class="smallTitleS1">销售量</span>
            <span class="smallTitleS2">万元</span>
          </div>
          <div class="mContent">
            <div class="one">1</div>
            <div class="one">2</div>
            <div class="one">0</div>
            <div class="one">1</div>
            <div class="one">0</div>
            <div class="one">3</div>
            <div class="one">7</div>
            <div class="two">.</div>
            <div class="one">5</div>
          </div>
        </div>
        <div class="finish">
          <div class="fTitle">完成百分比</div>
          <div id="main"></div>
        </div>
        <div class="cloudWord">
          <div class="mTitleS1">热门搜索词</div>
          <div class="mTitleS2">Top Search</div>
          <word-cloud-chart/>
        </div>
      </div>
      <div>
        <div class="table">
          <div class="mTitleS1">订单实时走势</div>
          <div class="mTitleS2">Order curve</div>
          <order-form/>
        </div>
        <div style="display:flex;margin-top: 38px;">
          <div class="pie">
            <div class="mTitleS1">购买终端</div>
            <pie-chart/>
          </div>
          <div class="map">
            <div class="mTitleS1">销售区域TOP</div>
            <sell-map/>
          </div>
        </div>
      </div>
      <div>
        <div class="statistics">
          <div class="mTitleS1">统计数据</div>
          <div class="mTitleS2">Statistical Data</div>
          <statistical-data/>
        </div>
        <div class="order">
          <div class="mTitleS1">大额订单</div>
          <div class="mTitleS2">Super Orders</div>
          <super-orders/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud"
import "echarts-wordcloud/dist/echarts-wordcloud.min"
import WordCloudChart from "../../components/dataVI/WordCloudChart"
import orderForm from "../../components/dataVI/orderForm"
import pieChart from "../../components/dataVI/pieChart"
import sellMap from "../../components/dataVI/map"
import statisticalData from "../../components/dataVI/statisticalData"
import superOrders from "../../components/dataVI/superOrders"
export default {
  components:{
    WordCloudChart,
    orderForm,
    pieChart,
    sellMap,
    statisticalData,
    superOrders
  },
  data(){
    return{
      map:{},
      time:'',
      bigger:[5,6,10,16],
      point:[{heng:120.445924,zong:29.960065}],
      level:0,
      option:{},
      myChart:'',
      chart:''
    }
  },
  mounted(){
    this.getDate()
    this.getEone()
    setTimeout(()=>{
      // this.initChart()
    },5000)
    setInterval(()=> {
      this.getDate()
    },4000)
    setInterval(()=>{
      if (this.option.series[0].data == 10)
      this.option.series[0].data = [37.5]
      else
      this.option.series[0].data = [10]
      this.myChart.setOption(this.option)
    },10000)
  },
  methods: {
    getEone() {
      var myChart = this.$echarts.init(document.getElementById('main'))
      this.myChart = myChart
      var option = {
        grid: {
          top: 50,
          bottom: 50,
          left: 5,
          right: 50
        },
        color: ['#74d1fd', '#eee'],
        xAxis: {
          show:false,
          type : 'value',
          boundaryGap : [0, 0]
        },
        yAxis: [
          {
            type : 'category',
            data : [''],
            axisLine:{show:false},
            axisTick:[{
                show:false
            }]
          }
        ],
        series: [
          {
            type: 'bar', 
            name: '已完成',
            stack: '总量',
            barMaxWidth: 27,
            label: {
              show: true,
              position: 'inside',
              fontSize: 16,
              formatter: '{c}%'
            },
            itemStyle: {
              barBorderRadius: [20, 20, 20, 20],
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  {offset: 0, color: 'rgb(36, 203, 255)'},
                  {offset: 1, color: 'rgb(144, 0, 255)'}
                ]
              ),
              shadowColor: '#97e2f5'
            },
            data: [37.5]
          },
          {
            type: 'bar', 
            name: '未完成',
            stack: '总量',
            barMaxWidth: 27,
            label: {
              show: false,
              color: '#aaa',
              position: 'inside',
              fontSize: 16,
              formatter: '{c}%'
            },
            showBackground: true,
            backgroundStyle: {
                color: '#eee',
                barBorderRadius: 20
            },
            itemStyle: {
                color: '#eee',
                barBorderRadius: [20, 20, 20, 20],
            },
            silent:true,
            data: [62.5]
          }
        ]
      }
      this.option = option
      myChart.setOption(option)
    },
    getDate() {
      let time=new Date()
      let year=time.getFullYear()
      let month=time.getMonth()+1
      let day=time.getDate()
      
      //获取时分秒
      let h=time.getHours()
      let m=time.getMinutes()
      let s=time.getSeconds()
      
      //检查是否小于10
      h=this.check(h)
      m=this.check(m)
      s=this.check(s)
      this.time=year+"-"+month+"-"+day+" "+h+":"+m+":"+s
    },
    check(i){
      //方法一，用三元运算符
      var num
      i<10?num="0"+i:num=i
      return num
      
      //方法二，if语句判断
      //if(i<10){
      //    i="0"+i;
      //}
      //return i;
    }
  }
}
</script>



<style lang="less" scoped>
.back{
  position: relative;
  width: 1920px;
  height: 1080px;
  background: url('../../../static/img/resolve/two/background-2.png') 0% 0% / 100%;
  filter: blur(0px);
  opacity: 1;
  .title{
    position: relative;
    top: 30px;
    font-family: "Microsoft Yahei", Arial, sans-serif;
    font-size: 36px;
    color: rgb(255, 255, 255);
    text-shadow: rgb(255 255 255) 0px 0px 15px;
    font-weight: bold;
    justify-content: center;
    text-align: center;
  }
  .mTitleS1{
    font-family: "Microsoft Yahei", Arial, sans-serif;
    font-size: 22px;
    color: rgb(154, 168, 212);
    display: inline-block;
  }
  .mTitleS2{
    font-family: "Microsoft Yahei", Arial, sans-serif;
    font-size: 20px;
    color: rgb(64, 77, 105);
    display: inline-block;
    margin-left: 16px;
  }
  .back1{
    position: absolute;
    width: 1625px;
    height: 146px;
    background-image: url('../../../static/img/resolve/two/pic-2.png');
    transform: rotate(0deg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    left: 164px;
    top: 4px;
    z-index: 50;
  }
  .time{
    position: absolute;
    top: 47px;
    right: 80px;
    font-family: "Microsoft Yahei", Arial, sans-serif;
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-weight: normal;
  }
  .content{
    // border: 1px solid red;
    padding: 0 30px;
    position: relative;
    top: 83px;
    // width: 100%;
    // height: 100%;
    display: flex;
  }
  .money{
    width: 514px;
    .mTitle{
      // height: 82px;
      margin-bottom: 23px;
    }
    .smallTitle{
      .smallTitleS1{
        height: 44px;
        display: inline-block;
        font-family: "Microsoft Yahei", Arial, sans-serif;
        font-size: 16px;
        color: rgb(154, 168, 212);
      }
      .smallTitleS2{
        font-family: "Microsoft Yahei", Arial, sans-serif;
        font-size: 18px;
        color: rgb(115, 170, 229);
        float: right;
      }
    }
    .mContent{
      display: flex;
      margin-left: 34px;
      .one{
        font-family: "Microsoft Yahei";
        font-size: 62px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        margin-left: 3.1px;
        margin-right: 3.1px;
        padding: 0px 0.1em;
        box-sizing: content-box;
        width: 0.6em;
        text-align: center;
        background-color: rgb(15, 57, 107);
      }
      .two{
        font-family: "Microsoft Yahei";
        font-size: 62px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        margin-left: 3.1px;
        margin-right: 3.1px;
        padding: 0px 1.2px;
      }
    }
  }
  .finish{
    .fTitle{
      font-family: "Microsoft Yahei", Arial, sans-serif;
      font-size: 16px;
      color: rgb(154, 168, 212);
      margin-bottom: 25px;
      margin-top: 38px;
    }
  }
  .cloudWord{
    margin-top: 104px;
  }
  // .table {
  //   position:absolute;
  //   left: 600px;
  // }
  // .pie{
  //   position: absolute;
  //   left: 500px;
  //   top: 400px;
  // }
  // .map{
  //   position: absolute;
  //   left: 900px;
  //   top: 400px;
  // }
  // .statistics{
  //   position: absolute;
  //   left: 1400px;
  // }
  // .order{
  //   position: absolute;
  //   left: 1400px;
  //   top: 300px;
  // }
}
#main{
  width: 540px;
  height:27px;
  float:right;
}
</style>