import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import AMap from 'vue-amap'
import 'iview/dist/styles/iview.css'
import 'normalize.css/normalize.css'
import less from 'less'
import store from './store'
import { test } from 'shelljs'
import BaiduMap from 'vue-baidu-map'
import * as echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
import china from 'echarts/map/json/china.json' // 引入json文件

echarts.registerMap('china', china) // 在echarts中注册使用这个文件

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(iView);
Vue.use(less);
Vue.use(AMap);
Vue.use(BaiduMap, {
	/* 需要注册百度地图开发者来获取你的ak */
	ak: 'mziPtGCyecPTBSsvn4VsyiF3CWfsN4Yy'
  })


AMap.initAMapApiLoader({
	key: '	776929246b52165d6cb8fac2a2393484',
	plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation',
		'AMap.Geocoder'
	],
	v: '2.0',
	uiVersion: '1.1'
})
var script1 = document.createElement('script') //创建一个script标签
var script2 = document.createElement('script') //创建一个script标签
var script3 = document.createElement('script')
var script4 = document.createElement('script')
script1.type = 'text/javascript'
script1.src =
	"https://webapi.amap.com/maps?v=2.0&key=3042ccb06eea3f6f940af2834f8b9d10&plugin=AMap.MouseTool,AMap.Geocoder,AMap.DistrictSearch&callback=my_init"
script2.type = 'text/javascript'
script2.src = "//webapi.amap.com/ui/1.1/main-async.js"
document.getElementsByTagName('head')[0].appendChild(script1)
setTimeout(()=>{
	document.getElementsByTagName('head')[0].appendChild(script2)
	store.commit('addCount1');
},500)
script3.type = 'text/javascript'
script3.src = "//api.map.baidu.com/api?v=2.0&ak=mziPtGCyecPTBSsvn4VsyiF3CWfsN4Yy&callback=initialize"
document.getElementsByTagName('head')[0].appendChild(script3)

script3.type = 'text/javascript'
script3.src = "echarts.min.js"
document.getElementsByTagName('head')[0].appendChild(script4)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iView,
  store,
  render: h => h(App)
})
