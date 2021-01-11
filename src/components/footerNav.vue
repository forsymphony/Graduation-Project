<template>
  <div class="footer">
    <div class="area">
      <ul>
        <li class="img">
          <p><img src="../../static/img/logo1.png" alt=""></p>
          <p>诚信为本 科技至上</p>
        </li>
        <li class="product">
          <h2>产品</h2>
          <ul>
            <li>物联网</li>
            <li>数据采集</li>
            <li>毫米波</li>
          </ul>
        </li>
        <li class="solve">
          <h2>解决方案</h2>
          <ul>
            <li>移动充电与感知应用</li>
            <li>隔墙运动物体检测</li>
            <li>新能源汽车智能遥控</li>
          </ul>
        </li>
        <li class="aboutUs">
          <h2>联系我们</h2>
          <ul>
            <li>联系电话：0574-66666666</li>
            <li>手机：13131313131</li>
            <li>EMAIL：qifei@qifei.cn</li>
            <li>联系地址：浙江省杭州市起飞路666号芜湖起飞大厦606室</li>
          </ul>
        </li>
        <li class="vx">
          <h2>关注</h2>
          <ul>
            <li>
              <p>
                <img src="../../static/img/erweima.png" alt="" class="see">
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="footerB">
        <p>Copyright © 2021 by <a href="https://github.com/forsymphony/Graduation-Project">forsymphony</a> All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" >
.footer{
  width: 100%;
  height: 325px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  position: relative;
  .area{
    width: 1200px;
    // height: 157px;
    margin-top: 40px;
    ul{
      .img{
        display: none;
    } 
    .product{

    }
    .solve{

    }
    .aboutUs{

    }
    .vx{
      .see{
        width:30px;
        height: 30px;
        transition: all 0.3s linear 0s;
      }
      .see:hover{
        width: 100px;height: 100px;
      }
    }
   }
  }
   .footerB{
      position: absolute;
      width: 100%;
      height: 35px;
      border-top: 1px solid #666;
      text-align: center;
      bottom: 0;
      line-height: 35px;
      letter-spacing: 1px;
      // left: 360px;
   }
}
.footer > .area> ul > li {
  float: left;
  width: 20%;
  padding: 10px;
}
.footer >.area>  ul > li >h2 {
  color: #CCC;
  margin-bottom: 20px;
}
.footer >.area>  ul > li > ul > li:hover{
  color:#ccc;
}
.footer > .area> ul > li > ul > li{
  color:#666;
}
li {
   list-style:none;
   cursor: default;
}
// @keyframes myBig{
//   // 0%{width: 30px;height: 30px;}
//   100%{width: 100px;height: 100px;}
// // cubic-bezier(0.215, 0.61, 0.355, 1)
// }
</style>