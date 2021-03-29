<template>
  <div class="product">
     <div class="productArea">
        <h1>物联网产品</h1>
        <div class="module1">
          <div class="module1Area">
            <div class="Area1List">
              <div class="List1" v-for="(val,index) in module1List" :key="index">
                <div class="shadows">
                  <div class="img">
                    <img :src="val.src" alt="" class="List1Img">
                  </div>
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
                  <div class="img">
                    <img :src="val.src" alt="" class="List1Img">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>毫米波产品</h1>
        <div class="module3">
          <div class="module3Area">
            <div class="module3Button" v-for="(val,index) in module3List" :key="index">
              <div class="button3Area">
                <button class="button3">{{val.title}}</button>
              </div>
            </div>
          </div>
          <div class="button3All">
            <button class="A3Button">下载文档</button>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // module1List:[
      //   {src:"../../../static/img/product/1.png"},
      //   {src:"../../../static/img/product/2.png"},
      //   {src:"../../../static/img/product/3.png"},
      //   {src:"../../../static/img/product/4.jpg"},
      //   {src:"../../../static/img/product/5.png"},
      //   {src:"../../../static/img/product/6.png"},
      //   {src:"../../../static/img/product/7.png"},
      //   {src:"../../../static/img/product/8.png"},
      // ],
      module1List:[
        {src:"./static/img/product/1.png"},
        {src:"./static/img/product/2.png"},
        {src:"./static/img/product/3.png"},
        {src:"./static/img/product/4.jpg"},
        {src:"./static/img/product/5.png"},
        {src:"./static/img/product/6.png"},
        {src:"./static/img/product/7.png"},
        {src:"./static/img/product/8.png"},
      ],
      // module2List:[
      //   {src:"../../../static/img/product/9.png"},
      //   {src:"../../../static/img/product/10.png"},
      //   {src:"../../../static/img/product/11.png"},
      //   {src:"../../../static/img/product/12.png"},
      //   {src:"../../../static/img/product/13.png"},
      //   {src:"../../../static/img/product/14.png"},
      //   {src:"../../../static/img/product/15.png"},
      // ],
      module2List:[
        {src:"./static/img/product/9.png"},
        {src:"./static/img/product/10.png"},
        {src:"./static/img/product/11.png"},
        {src:"./static/img/product/12.png"},
        {src:"./static/img/product/13.png"},
        {src:"./static/img/product/14.png"},
        {src:"./static/img/product/15.png"},
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
  width: 100%;
  .productArea{
    background: #eee;
    width: 65%;
    min-width: 875px;
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
              .img{
                transition-duration: 0.4s;
                // .List1Img:hover{
                //   box-shadow: 3px 3px 5px #6f6f6f;
                // }
                .List1Img{
                  // transition-duration: 0.4s;
                  width:100%;
                }
              }
              .img:hover{
                box-shadow: 3px 3px 5px #6f6f6f;
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
        .module3Button{
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
        .A3Button{
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