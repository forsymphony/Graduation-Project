<template>
  <div class="product">
     <div class="productArea">
        <h1>物联网产品</h1>
        <div class="module1">
          <div class="module1Area">
            <div class="Area1List">
              <div class="List1" v-for="(val,index) in module1List" :key="index">
                <div class="shadows">
                  <img :src="val.src" alt="" class="List1Img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>数据采集产品</h1>
        <div class="module2">
          <div class="module1Area">
            <div class="Area1List">
              <div class="List1" v-for="(val,index) in module2List" :key="index">
                <div class="shadows">
                  <img :src="val.src" alt="" class="List1Img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>毫米波产品</h1>
        <div class="module3">
          <div class="module3Area">
            <div class="module3button" v-for="(val,index) in module3List" :key="index">
              <div class="button3Area">
                <button class="button3">{{val.title}}</button>
              </div>
            </div>
          </div>
          <div class="button3All">
            <button class="A3button">下载文档</button>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      module1List:[
        {src:"http://qiniu.terabits.cn/NB-IoT%E5%BC%80%E5%8F%91%E6%9D%BF.png"},
        {src:"http://qiniu.terabits.cn/TB-Powercast-%E5%9F%BA%E4%BA%8E%E5%B0%84%E9%A2%91%E8%83%BD.png"},
        {src:"http://qiniu.terabits.cn/TB-WISP%E6%97%A0%E7%BA%BF%E8%AF%86%E5%88%AB%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%B9%B3%E5%8F%B0.png"},
        {src:"http://my.terabits.cn/dtu.jpg"},
        {src:"http://home.terabits.cn/NB-IoT%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%8C%852.png"},
        {src:"http://home.terabits.cn/%E5%B7%A5%E4%B8%9ADTU2.png"},
        {src:"http://home.terabits.cn/NB-IOT%E5%AE%9E%E6%88%98%E6%8C%87%E5%8D%97.png"},
        {src:"http://home.terabits.cn/%E7%89%A9%E8%81%94%E7%BD%91%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9FALIOS.png"}
      ],
      module2List:[
        {src:"http://qiniu.terabits.cn/Group%2027.png"},
        {src:"http://qiniu.terabits.cn/PCI%E6%8E%A5%E5%8F%A3%E7%9A%844%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86.png"},
        {src:"http://qiniu.terabits.cn/SSI%E4%BF%A1%E5%8F%B7%E6%A8%A1%E6%8B%9F%E5%99%A8.png"},
        {src:"http://qiniu.terabits.cn/cPCI%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E6%9D%BF.png"},
        {src:"http://qiniu.terabits.cn/RS232%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E6%9D%BF.png"},
        {src:"http://qiniu.terabits.cn/USB2.0%E9%AB%98%E9%80%9FADC%E9%87%87%E9%9B%86%E7%B3%BB%E7%BB%9F.png"},
        {src:"http://qiniu.terabits.cn/PCI%E6%8E%A5%E5%8F%A324%E8%B7%AF16%E4%BD%8DDAC%E6%9D%BF.png"}
      ],
      module3List:[
       {title:"毫米波振荡器"},
       {title:"毫米波通信解决方案"},
       {title:"微波毫米波噪声信号源"},
       {title:"微波毫米波接收机和控制组件"},
       {title:"微波毫米波无源和波导器件"},
       {title:"微波毫米波接收机和控制组件"},
       {title:"微波毫米波无源和波导器件"},
       {title:"微波毫米波接收机和控制组件"},
       {title:"微波毫米波无源和波导器"}
        ]
    }
  }
}
</script>

<style lang="less" scoped>
.product{
  width: 1920px;
  .productArea{
    background: #eee;
    width: 65%;
    margin: 0px auto 70px;
    text-align: center;
    h1{
      text-align: center;
      font-size: 32px;
      font-weight: normal;
      color: #404040;
      line-height: 48px;
      padding: 30px 0;
    }
    .module1,.module2{
      .module1Area{
        .Area1List{
          display: flex;
          flex-wrap: wrap;
          .List1{
            width: 33%;
            position: relative;
            .shadows{
              width: 72%;
              margin: 20px auto;
              background-color: #fafafa;
            .List1Img:hover{
              box-shadow: 3px 3px 5px #6f6f6f;
            }
              .List1Img{
                transition-duration: 0.4s;
                width:100%;
	              height:auto;
              }
            }
          }
        }
      }
    }
    .module3{
      padding-bottom: 50px;
      .module3Area{
        padding: 0 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .module3button{
          margin: 5px 0;
          padding: 0 5px;
          width: 33.333333%;
          .button3Area{
            .button3{
              width: 80%;
              height: 45px;
              margin-bottom: 0;
              cursor: pointer;
              background-image: none;
              border: 1px solid transparent;
              line-height: 1.15;
              padding: 0 15px;
              font-size: 12px;
              border-radius: 4px;
              transition: all 0.3s;
              color: rgba(0, 0, 0, 0.65);
              background-color: #fff;
              border-color: #d9d9d9;
            }
            .button3:hover{
              border: 1px solid #3399ff;
            }
            .button3:focus,.button3:active
            {
              outline: none;
              border:1px solid #3399ff; // 若是本身具有 border 请删除此属性
              box-shadow:none;
            }
          }
        }
      }
      .button3All{
        margin: 0 auto;
        padding: 0 40px;
        .A3button{
          width: 26.666%;
          height: 45px;
          margin-top: 20px;
          cursor: pointer;
          background-image: none;
          border: 1px solid transparent;
          line-height: 1.15;
          padding: 0 15px;
          font-size: 12px;
          border-radius: 4px;
          transition: all 0.3s;
          color: white;
          background-color: #3399ff;
          border-color: #d9d9d9;
        }
        .A3button:hover{
          border: 1px solid #3399ff;
        }
        .A3button:focus,.A3button:active
        {
          outline: none;
          border:1px solid #3399ff; // 若是本身具有 border 请删除此属性
          box-shadow:none;
        }
      }
    } 
  }
}
</style>