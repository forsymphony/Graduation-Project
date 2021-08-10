<template>
  <div class="homeContent" ref="pronbit">
      <div class="contentArea">
        <div class="whyUs">
          <h2 class="whyH2">凭撒子选我们？</h2>
          <div class="whyArea">
            <div class="bigger">
              <div>
                <img src="../../../static/img/content/bigger.png" alt="">
                <!-- 11920*1080   115*115 下两张同 -->
              </div>
              <div class="title">聚焦</div>
              <div class="content">高素质人才团队，专注于技术aaaa研发</div>
            </div>
            <div class="bigger">
              <div>
                <img src="../../../static/img/content/us.png" alt="">
              </div>
              <div class="title">成长</div>
              <div class="content">全是年轻人，发展杠杠的</div>
            </div>
            <div class="bigger">
              <div>
                <img src="../../../static/img/content/profession.png" alt="">
              </div>
              <div class="title">专业</div>
              <div class="content">什么叫专业团队啊</div>
            </div>
          </div>
        </div>
        <div class="show1">
          <div class="show1Area">
            <div class="showContent">
              <div class="showTitle">
                聚焦物联网起飞技术
              </div>
              <div class="showText">
                自主研发的产品包括NB-IoT窄带物联网电力抄表系统、NB-IoT窄带物联网终端开发平台、无线传感与识别平台TB-WISP等...
              </div>
            </div>
            <div class="showImg">
              <img src="../../../static/img/content/img2.png" alt="" class="Img">
              <!-- 11920*1080   265*265 下一张同 -->
          </div>
        </div>
        </div>
        <div class="show1 show2">
          <div class="show1Area">
            <div class="showImg1">
              <img src="../../../static/img/content/img3.png" alt="" class="Img">
            </div>
            <div class="showContent1">
              <div class="showTitle">
                深耕工业自动化数据采集产品
              </div>
              <div class="showText">
                杭州钛比科技有限公司也是欧洲著名毫米波厂家ELVA-1中国区授权代理(点此查看授权书)，销售的毫米波系统与组件，频段主要覆盖10MHz至220GHz，主要产品包括毫米波雷达、天线、信号源、噪声源、接收机及其部件、功率计
              </div>
            </div>
          </div>
        </div>
        <div class="Advantage">
          <div class="AdvantageArea">
            <div class="AdTitle">
              <h1>依托白给大学技术力量</h1>
              <p>创始人为摸鱼打诨、聊天八卦、键盘打拳领域专家</p>
            </div>
            <div class="AdShow">
              <div class="AdShow1">
                <div class="showItem1Img">
                  <!-- <div class="text"></div> -->
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                  <!-- 11920*1080   42*38 -->
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Iitle">智能城市管理</h1>
                  <p class="item1Content">云平台实时监控，智能掌控城市居民，农业设备运行数据。</p>
                </div>
              </div>
              <div class="AdShow1">
                <div class="showItem1Img">
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Title">物联网平台</h1>
                  <p class="item1Content">自主研发的产品包括NB-IoT窄带物联网电力抄表系统、NB-IoT终端开发平台。</p>
                </div>
              </div>
              <div class="AdShow1">
                <div class="showItem1Img">
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Title">移动</h1>
                  <p class="item1Content">一站式移动PC平台实时监控，动态触手可及。</p>
                </div>
              </div>
              <div class="AdShow1">
                <div class="showItem1Img">
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Title">大数据</h1>
                  <p class="item1Content">一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。</p>
                </div>
              </div>
              <div class="AdShow1">
                <div class="showItem1Img">
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Title">毫米波产品</h1>
                  <p class="item1Content">欧洲著名毫米波厂家ELVA-1中国区授权代理。</p>
                </div>
              </div>
              <div class="AdShow1">
                <div class="showItem1Img">
                  <img src="../../../static/img/content/smallicon.png" alt=""  class="img1">
                </div>
                <div class="item1Introduce">
                  <h1 class="item1Title">智能城市管理</h1>
                  <p class="item1Content">云平台实时监控，智能掌控城市居民，农业设备运行数据。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="NewItem2">
          <div class="newArea">
            <h2 class="newTitle">热点动态</h2>
            <div class="show2Item">
              <div class="shadow">
                <Tabs value="name1" @on-click="changeTbs">
                  <TabPane label="公司动态" name="name1">
                    <div  v-for="(val,index) in dynamicsList" :key="index" class="Eitem">
                    {{val.date+" | "+val.title}}
                    </div>
                  </TabPane>
                  <TabPane label="产品更新" name="name2">
                    <div  v-for="(val,index) in  undateList" :key="index" class="Eitem">
                    {{val.date+" | "+val.title}}
                    </div>
                  </TabPane>
                </Tabs>
              </div>
              <Page :total="total" :page-size="pageSize" @on-change="change"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dynamics:[
        {date:'2018-09-25',title:"Let's Play IoT! - 阿里云ACE（厦门）嘉庚学院技术沙龙预告"},
        {date:'2018-09-23',title:"2018世界物博会AliOS Things书籍及开发板获奖名单"},
        {date:'2018-09-15',title:"钛比科技携阿里云IoT院校合作方案亮相2018世界物联网博览会"},
        {date:'2018-06-30',title:"遇见美好未来|茶链网平台精彩亮相MWC 2018展会"},
        {date:'2018-05-18',title:"《NB-IoT实战指南》赠书啦！"},
        {date:'2018-04-27',title:"第十届国际物联网博览会NB-IoT关键技术高级培训班圆满结束"},
        {date:'2018-04-04',title:"“区块链+物联网”技术开启西湖龙井身份认证时代"},
        {date:'2018-02-13',title:"钛比科技祝您新春快乐，狗年吉祥！"},
        {date:'2018-01-05',title:"物有限 · 智无穷 | Huawei LiteOS Workshop 上海站"},
        {date:'2017-11-18',title:"浙江移动物联网实验室NB-IoT测试——模组功耗篇（转载）"},
        {date:'2017-10-28',title:"钛比科技应邀参加中国NB-IoT产业联盟之高等院校物联网工程专业师资培训会议"},
        {date:'2017-09-30',title:"钛比科技 MWC American2017 参展归来！祝各位伙伴国庆中秋节日快乐！"},
        {date:'2017-09-08',title:"钛比科技入选华为全球NB-IoT生态系统合作伙伴"},
        {date:'2017-08-02',title:"钛比科技喜获2017年第六届中国创新创业大赛浙江赛区优胜企业称号"}
        ],
        undateList:[
          {date:'2018-03-16',title:"钛比科技助力电子行业智能化转型"},
          {date:'2017-10-12',title:"钛比科技联合浙江大学、科学出版社发布《移动物联网（NB-IoT）实战指南》及配套工具包"},
          {date:'2017-08-18',title:"【物联网产品】钛比科技发布NB-IoT DTU产品"},
          {date:'2017-07-25',title:"钛比科技 TB-WISP5.0无源无线识别与传感标签"},
          {date:'2017-07-20',title:"钛比科技 TB-Powercast基于射频能量获取的无线传感器节点"}
        ],
      dynamicsList:[
        {date:'2018-09-25',title:"Let's Play IoT! - 阿里云ACE（厦门）嘉庚学院技术沙龙预告"},
        {date:'2018-09-23',title:"2018世界物博会AliOS Things书籍及开发板获奖名单"},
        {date:'2018-09-15',title:"钛比科技携阿里云IoT院校合作方案亮相2018世界物联网博览会"},
        {date:'2018-06-30',title:"遇见美好未来|茶链网平台精彩亮相MWC 2018展会"},
        {date:'2018-05-18',title:"《NB-IoT实战指南》赠书啦！"}
      ],
      total:14,
      pageSize:5
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScrollx,true)
  },
  methods:{
    change(a){
      if(this.total == 14 )
      this.dynamicsList = this.dynamics.slice((a-1)*5,a*5)
    },
    changeTbs(e){
      if(e == 'name1')
      {
        this.total = 14
        this.dynamicsList = this.dynamics.slice(0,5)
      }
      else
      this.total = 5
    },
    handleScrollx() {
      // console.log('滚动高度',window.pageYOffset)
      if(window.pageYOffset>390){
        // console.log(docum);
        let div1 = document.getElementsByClassName('show1')[0]
        div1.style.transform = 'translateY(100px)'
        div1.style.opacity = 1
      }
      if(window.pageYOffset>730){
        // console.log(docum);
        let div1 = document.getElementsByClassName('show2')[0]
        div1.style.transform = 'translateY(-100px)'
        div1.style.opacity = 1
      }
      if(window.pageYOffset>1300){
        // console.log(docum);
        let div1 = document.getElementsByClassName('Advantage')[0]
        div1.style.transform = 'translateX(100px)'
        div1.style.opacity = 1
      }
      // console.log('距离顶部高度',this.$refs.pronbit.getBoundingClientRect().top)
    },
  }
}
</script>

<style lang="less" scoped>
.text{
  width: 42px;
  height: 38px;
  background: red;
}
h1{
  margin: 0;
}
.homeContent{
  width: 100%;
  // display: flex;
  // justify-content: center;
  // margin: 0 auto; 
  // text-align: center;
  .contentArea{
    // width: 1440px;
    margin: 0 auto; 
    text-align: center;
    .whyUs{
      // width: 1440px;
      height: 480px;
      margin-top: 184px;
      text-align: center;
      .whyH2{
        // width: 1440px;
        text-align: center;
        margin: 50px 0;
        font-size: 26px;
        color: #555;
      }
      .whyArea{
        display: flex;
        flex: 1;
        .bigger{
          width: 33.33%;
          padding-left: 8px;
          padding-right: 8px;
          .title{
            margin-top: 40px;
            color: #222;
            font-size: 26px;
          }
          .content{
            margin-top: 24px;
            color: #888;
            font-size: 14px;
            padding: 0 35px;
          }
        }
      }
    }
    .show1{
      // width: 1440px;
      position: relative;
      height: 485px;
      display: flex;
      justify-content: center;
      margin-top: -100px;
      // transform :translateY(-100px);
      opacity: 0;
      transition: all 1s;
      .show1Area{
        width: 1000px;
        height: 485px;
        position: relative;
        .showContent{
          width: 55%;
          height: 150px;
          vertical-align: top;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          .showTitle{
            font-size: 32px;
            font-weight: normal;
            color: #404040;
            line-height: 48px;
          }
          .showText{
            margin-top: 20px;
          }
        }
        .showImg{
          position: absolute;
          right: 0;
          top:  110px;
          width: 265px;
          height: 265px;
          .Img{
            width: 265px;
            height: 265px;
          }
        }
        .showContent1{
          width: 55%;
          height: 150px;
          vertical-align: top;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          .showTitle{
            font-size: 32px;
            font-weight: normal;
            color: #404040;
            line-height: 48px;
          }
          .showText{
            margin-top: 20px;
          }
        }
        .showImg1{
          position: absolute;
          top: 110px;
          width: 265px;
          height: 265px;
          .Img{
            width: 265px;
            height: 265px;
          }
        }
      }
    }
    .show2{
      // transform :translateY(100px);
      margin-top: 100px;
      opacity: 0;
      transition: all 1s;
    }
    .Advantage{
      width: 100%;
      background: #fff;
      height: 80vh;
      border-color: #666;
      position: relative;
      display: flex;
      justify-content: center;
      margin-left: -100px;
      opacity: 0;
      transition: all 1s;
      .AdvantageArea{
        text-align: center;
        width: 1200px;
        h1{
          font-size: 32px;
          font-weight: normal;
          color: #404040;
          line-height: 48px;
        }
        .AdTitle{
          position: relative;
          top: 15%;
        }
        .AdTitle > h1{
          margin: 20px auto;
        }
        .AdShow{
          position: relative;
          top: 20%;
          height: 60%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .AdShow1{
            // display: inline-block;
            width: 33.33%;
            // height: 200px;
            padding: 6% 5% 0;
            .showItem1Img{
              display: inline-block;
              width: 15%;
              margin-top: 2%;
              // height: 46px;
              .img1{
                width: 100%;
                // height: 46px;
              }
            }
            .item1Introduce{
              width: 85%;
              display: inline-block;
              float: right;
              text-align: left;
              padding-left: 8%;
              .item1-title{

              }
              .item1-content{

              }
            }
          }
        }
      }
    }
    .NewItem2{
      margin-top: 170px;
      .newArea{
         padding-top: 50px;
        // height: 820px;
        width: 60%;
        margin: 0 auto 50px;
      }
      .newTitle{
        font-size: 28px;
        text-align: center;
        color: #222;
      }
      .show2Item{
       margin-top: 60px;
        .shadow{
          box-shadow:  0px 8px 10px -10px rgba(76, 150, 255, 0.15);
          margin: 10px 0;
          .Eitem{
            color:#3399ff;
            padding: 10px 0;
            text-indent: 20px;
            line-height: 40px;
            font-size: 14px;
          }
          .Eitem:hover{
            opacity: 0.7;
            cursor:pointer;
          }
          
        }
      }
    }
  }
}
</style>