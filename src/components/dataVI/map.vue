<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chinachart:null,
      index: -1
    }
  },
  mounted() {
  // 初始化echarts实例
  this.chinachart = this.$echarts.init(document.getElementById('map'))
  // 进行相关配置
  this.chartOption = { 
    tooltip: { // 鼠标移到图里面的浮动提示框
     // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
      formatter (params, ticket, callback) {
        let htmlStr
        if(params.data){
          htmlStr = `
          <div style='font-size:18px;'>[第${params.data.rank}名/10]</div>
          <p style='text-align:left'>
            ${params.data.name}<br/>
            销售金额：${params.data.sellM}<br/>
	          人口：${params.data.population}<br/>
	          GDP：${params.data.GDP}<br/>
	          面积：${params.data.area}<br/>
          </p>
        `
        }
        // params.data 就是series配置项中的data数据遍历
        else
        htmlStr = '<p>没有排名</p>'
        return htmlStr
      }
      // backgroundColor:"#ff7f50",//提示标签背景颜色
      // textStyle:{color:"#fff"} //提示标签字体颜色
    }, 
    // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
    visualMap: [ // 左下角的颜色区域
     {
      type: 'continuous', // 定义为分段型 visualMap
      min: 4000,
      max: 11000,
      calculable: true,
      Range: [4000,11000],
      color: ['#701f90','#484cdb','#2bbeff'],
      itemWidth: 10,
      itemHeight: 60,
      text:['金额',''],
      textStyle:{
        color:'#fff'
      },
      bottom: 40,
      left: 20
     } 
    ],
    // geo配置详解： https://echarts.baidu.com/option.html#geo
    // geo: { // 地理坐标系组件用于地图的绘制
    //   map: 'china', // 表示中国地图
    //   // roam: true, // 是否开启鼠标缩放和平移漫游
    //   zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
    //   label: {
    //     show: true
    //   },
    //   itemStyle: { // 地图区域的多边形 图形样式。
    //     borderColor: 'rgba(0, 0, 0, 0.2)',
    //     emphasis: { // 高亮状态下的多边形和标签样式
    //       shadowBlur: 20,
    //       shadowColor: 'rgba(0, 0, 0, 0.5)'
    //     }
    //   }
    // },
    series: [
      {
        name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
        type: 'map',
        map: 'china',
        geoIndex: 0,
        itemStyle: {
          areaColor: '#A2A6A8',
        },
        zoom: 1.2,
        // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
        data: [{
          'name': '北京',
          'value': 10000,
          'rank': '1', 
          'population': 6000,
          'GDP': '6565', 
          'area': '41平方公里',
          'sellM': '10000'
        }, {
          'name': '四川',
          'value': 9876,
          'rank': '2', 
          'population': 6000,
          'GDP': '789', 
          'area': '54平方公里',
          'sellM': '9876'
        }, {
          'name': '浙江',
          'value': 8765,
          'rank': '3', 
          'population': '5661',
          'GDP': '9845', 
          'area': '174平方公里',
          'sellM': '8765'
        }, {
          'name': '西藏',
          'value': 7654,
          'rank': '4', 
          'population': '131',
          'GDP': '43', 
          'area': '411平方公里',
          'sellM': '7654'
        }, {
          'name': '内蒙古',
          'value': 6543,
          'rank': '5', 
          'population': '4437',
          'GDP': '700', 
          'area': '325平方公里',
          'sellM': '6543'
        }, {
          'name': '贵州',
          'value': 5432,
          'rank': '6', 
          'population': '6319',
          'GDP': '789', 
          'area': '173平方公里',
          'sellM': '5432'
        }, {
          'name': '广东',
          'value': 4321,
          'rank': '7', 
          'population': '4312',
          'GDP': '895', 
          'area': '456平方公里',
          'sellM': '4321'
        }, {
          'name': '广西',
          'value': 3333,
          'rank': '8', 
          'population': '4960',
          'GDP': '655', 
          'area': '45平方公里',
          'sellM': '3333'
        }, {
          'name': '山西',
          'value': 2222,
          'rank': '9', 
          'population': '9470',
          'GDP': '1564', 
          'area': '836平方公里',
          'sellM': '2222'
        }, {
          'name': '河北',
          'value': 1111,
          'rank': '10', 
          'population': '560',
          'GDP': '7777', 
          'area': '66平方公里',
          'sellM': '1111'
        }
        ]
      }
    ]
  }
  // 使用刚指定的配置项和数据显示地图数据
  this.chinachart.setOption(this.chartOption)
  this.TimerD()
  },
  methods: {
    TimerD() {
      setInterval(() => {
        // 定时显示提示框和高亮效果
        // 隐藏提示框
        this.chinachart.dispatchAction({
          type: "hideTip",
          seriesIndex: 0,
          dataIndex: this.index
        });
        // 显示提示框
        this.chinachart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: this.index + 1
        });
        // 取消高亮指定的数据图形
        this.chinachart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: this.index
        });
        // 高亮指定的数据图形
        this.chinachart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: this.index + 1
        });
        this.index++;
        if (this.index > 9 - 1) {
          this.index = -1;
        }
      }, 3000);
    }
  }
}
</script>

<style scoped>
#map{
  width: 350px;
  height: 350px;
}
</style>