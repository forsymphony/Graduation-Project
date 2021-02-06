<template>
  <div class="aboutUs">
      <div class="aboutArea">
        <div class="areaArea">
          <h2 style="margin-top:10px;">
            <i class="iconfont">&#xe617;</i>
            企业介绍
          </h2>
          <div class="introduction">
            <p>
              杭州钛比科技有限公司是一家以浙江大学为依托，聚焦物联网技术和工业自动化数据采集产品开发和解决方案提供的高新信息技术企业。公司位于美丽的西子湖畔，杭州市西湖区华星科技大厦内。主要创始人为自动化、信息电子以及计算机专业的博士、硕士，公司员工中有本科以上学历的占90%以上，拥有很强的研发创新能力以及应用推广能力。
            </p>
            <br>
            <p>
              杭州钛比科技目前主要研发销售的产品有NB-IoT窄带物联网电力抄表系统，NB-IoT窄带物联网终端开发平台，SSI信号（数据）PCI采集卡，SSI信号（数据）Compact PCI（cPCI）采集卡、PCI接口高速数模转换（DAC）卡，无线传感网无线充电节点WISP（无线传感与识别平台）、兼容Arduino平台的Stalker基板、大规模IO接口（高达1024个）的FPGA信号处理平台等，可广泛应用于工业数据信息采集领域以及高校教学试验系统。
            </p>
            <br>
            <p>
              杭州钛比科技是ELVA-1的授权代理商，目前主要销售的微波毫米波系统和组件涵盖了从10MHz至220GHz甚至1.1THz（太赫兹）频段范围.
            </p>
            <br>
            <p>
              杭州钛比科技经营的产品具有稳定性以及高性能的特性，在客户中拥有良好的信誉。公司秉承着“客户至上”理念，用心做好每一件事情，希望与国内外客户精诚合作，共创美好未来！
            </p>
          </div>
          <h2>
            <i class="iconfont">&#xe647;</i>
            企业履历
          </h2>
          <div class="time">
             <Timeline>
              <TimelineItem color="green">杭州钛比科技有限公司正式成立 2014-01-24</TimelineItem>
              <TimelineItem color="green">我司获杭州市青蓝计划资助及浙江省科技型中小企业认定 2015-06-28</TimelineItem>
              <TimelineItem color="green">我司推出一键抄电表一键缴电费平台 杭州向万物互联时代又近一步 2017-04-13</TimelineItem>
              <TimelineItem color="green">钛比科技助力NB-IoT产业发展——HDG 2017-06-24</TimelineItem>
              <TimelineItem color="green">飞速发展中</TimelineItem>
            </Timeline>
          </div>
          <h2>
            <i class="iconfont">&#xe616;</i>
            联系地址
          </h2>
          <div class="map">
            <div id="container"></div> 
            <div class="vx">
              <div class="vx1">
                <div class="vx2">
                  <div class="vx3">
                    <img src="../../../static/img/aboutUs/QR.jpg" alt="" class="vx3Img">
                  </div>
                  <div class="vx31">
                    <p class="vx31P">扫一扫，关注微信公众号</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//  import AMap from 'AMap'
  // var map
  export default {
    mounted(){
      this.loadMap()
    },
    methods: {
     loadMap() {
			const _this = this;
			var map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
      });
      var marker = new AMap.Marker({
          position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '北京'
      });
      map.add(marker);
     }
    }
  }
</script>

<style lang="less" scoped>
.aboutUs{
  .aboutArea{
    width: 80%;
    margin: 0 auto;
    .areaArea{
      width: 80%;
      margin: 0 auto;
      h2{
        color: #121212;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .introduction{
        font-size: 14px;
        color: #5b5b5b;
        margin-top: 30px;
        text-indent: 22px;
      }
      .map{
        text-align: center;
        display: flex;
        #container{
          width: 62.5%;
          height: 350px;
        }
        .vx{
          display: block;
          width: 29.16666667%;
          .vx1{
            width: 80%;
            margin: 45px auto;
            border: 1px solid #e9e9e9;
            transition: all .3s;
          .vx1:hover{
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
          }
            .vx2{
              padding: 10px;
              .vx3{
                .vx3Img{
                  width: 100%;
                }
              }
              .vx31{
                .vx31P{

                }
              }
            }
          }
        }
      }
    }
  }
}
@font-face {
  font-family: 'iconfont';  /* project id 2113340 */
  src: url('//at.alicdn.com/t/font_2113340_yfandnommg.eot');
  src: url('//at.alicdn.com/t/font_2113340_yfandnommg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2113340_yfandnommg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2113340_yfandnommg.woff') format('woff'),
  url('//at.alicdn.com/t/font_2113340_yfandnommg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2113340_yfandnommg.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>