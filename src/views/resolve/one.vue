<template>
  <div>
    <div id="map"></div>
    <button @click="add">放大</button>
    <button @click="narrow">缩小</button>
    <test2 :shuju="date">
      <template slot="myslot" slot-scope="scope">
        <ul>
          <li v-for="item in scope.value">{{item}}</li>
        </ul>
      </template>
    </test2>
  </div>
</template>

<script>
import test2 from '../../components/test2.vue'
export default {
  data(){
    return{
      map:{},
      bigger:[5,6,10,16],
      point:[{heng:120.445924,zong:29.960065}],
      level:0,
      date:"~~|~~"
    }
  },
  components:{
    test2
  },
  mounted(){
    setTimeout(()=>{
      this.mapInit()
    },1500)
  },
  methods: {
    mapInit() {
      var map = new BMap.Map("map",{
        enableMapClick:false,
        minZoom: 5,
        maxZoom: 20,
        mapType: BMAP_SATELLITE_MAP
        })    // 创建Map实例
        console.log(map);
      map.centerAndZoom(new BMap.Point(120.445924,29.960065), 5)  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.disableDragging(true);//禁用拖拽
      // map.enableScrollWheelZoom(true);//启用滚轮放大
      // map.setMapType(BMAP_HYBRID_MAP);
      // var point = new BMap.Marker(120.445924,29.960065);
      var marker1 = new BMap.Marker(new BMap.Point(120.445924,29.960065))
      // marker1.enableClicking(false)
      map.addOverlay(marker1);
      map.disableDoubleClickZoom(true)
      this.map = map;
      //自己重写放大的方法
      // map.setCurrentCity("大连");          // 设置地图显示的城市 此项是必须设置的
      // map.setDisplayOptions({
      //   poiText: false,
      //   poiIcon: false
      // })
      // map.setMapType(BMAP_SATELLITE_MAP);
      // map.addControl(new BMap.MapTypeControl()); 
    },
    add(){
      if (this.level < 3){
        this.level++
        this.map.panTo(new BMap.Point(this.point[0].heng,this.point[0].zong))
        // setTimeout(()=>{
          this.map.setZoom(this.bigger[this.level])
        // },500)
      }
    },
    narrow(){
      if (this.level > 0){
        this.level--
        this.map.panTo(new BMap.Point(this.point[0].heng,this.point[0].zong))
        // setTimeout(()=>{
          this.map.setZoom(this.bigger[this.level])
        // },500)
      }
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  width:800px;
  height:800px;
}
 .BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>