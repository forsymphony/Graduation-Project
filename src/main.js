import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import AMap from 'vue-amap'
import 'iview/dist/styles/iview.css'
import 'normalize.css/normalize.css'
import less from 'less'

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(less);
Vue.use(AMap);



AMap.initAMapApiLoader({
	key: '	776929246b52165d6cb8fac2a2393484',
	plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation',
		'AMap.Geocoder'
	],
	v: '1.4.4',
	uiVersion: '1.0'
})
var script1 = document.createElement('script') //创建一个script标签
var script2 = document.createElement('script') //创建一个script标签
script1.type = 'text/javascript'
script1.src =
	"https://webapi.amap.com/maps?v=1.4.15&key=3042ccb06eea3f6f940af2834f8b9d10&plugin=AMap.MouseTool,AMap.Geocoder,AMap.DistrictSearch&callback=onLoad"
script2.type = 'text/javascript'
script2.src = "//webapi.amap.com/ui/1.0/main.js?v=1.0.11"
document.getElementsByTagName('head')[0].appendChild(script1)
setTimeout(()=>{
	document.getElementsByTagName('head')[0].appendChild(script2)
},500)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  iView,
  render: h => h(App)
})
