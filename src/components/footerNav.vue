<template>
  <div class="footer" v-if="!small">
    <div class="area">
      <ul>
        <li class="img">
          <p><img src="../../static/img/logo1.png" alt="" ></p>
          <!--  1920*1080 136*60  官网logo -->
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
                <!-- 官网二维码 -->
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
  <div class="footer1" v-else>
		<div class="footer-area">
			<img src="../../static/img/logo1.png" mode="" class="footer-img"></img>
			<p class="footer-p1">诚信为本 科技至上</p>
			<div class="footer-product">
				<h2 class="title">
					产品
				</h2>
				<p>
					<ul>
						<li>物联网</li>
						<li>数据采集</li>
						<li>毫米波</li>
					</ul>
				</p>
			</div>
			<div class="footer-product">
				<h2 class="title">
					解决方案
				</h2>
				<p>
					<ul>
						<li>移动充电与感知应用</li>
						<li>移动充电与感知应用</li>
						<li>移动充电与感知应用</li>
					</ul>
				</p>
			</div>
			<div class="footer-product">
				<h2 class="title">
					联系我们
				</h2>
				<p>
					<ul>
						<li>联系电话：1234-12345678</li>
						<li>手机：12345678911</li>
						<li>EMAIL：qife@forsymphony.cn</li>
						<li>联系电话：阿巴路233号芜湖起飞大厦666室</li>
					</ul>
				</p>
			</div>
			<div class="footer-product">
				<h2 class="title">
					关注
				</h2>
				<p>
					<img src="../../static/img/erweima.png" mode="" class="img2"></img>
				</p>
			</div>
			<div class="br">

			</div>
		</div>
		<div class="footer-foot">
			<p>Copyright @2021 by<text style="color: #1DA57A;;padding-left: 4px;padding-right: 4px;">&nbsp;forsymphony&nbsp;</text> All Rights Reserved</p>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      small:false
    }
  },
  created(){
    window.onresize = ()=>{
      console.log(document.documentElement.clientWidth);
      if(document.documentElement.clientWidth<=767) {
        this.small = true
        this.$store.commit("setSamll",true)
      } else {
        this.small = false
        this.$store.commit("setSamll",false)
      }
    }
  },
  // computed:{
	// 		returnFlag() {
	// 			return this.$store.state.small
	// 		}
	// 	},
	// 	watch: {
	// 		returnFlag:{
	// 			handler:function(val){
	// 				console.log(val)
	// 				this.small = val
	// 			}
	// 		}
	// 	},
}
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  min-width: 850px;
  height: auto;
  background-color: #333333;
  display: flex;
  justify-content: center;
  position: relative;
  .area{
    width: 1200px;
    // height: 157px;
    margin-top: 40px;
    margin-bottom: 50px;
    ul{
      .img{
        // display: none;
        img{
          width: 136px;
          height: 59px;
        }
        
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
    padding-bottom: 6px;
  }

// @keyframes myBig{
//   // 0%{width: 30px;height: 30px;}
//   100%{width: 100px;height: 100px;}
// // cubic-bezier(0.215, 0.61, 0.355, 1)
// }
.footer1{
		height: auto;
		width: 100vw;
		background: #333;
		position: relative;
		line-height: 26px;
		letter-spacing: 1px;
		color: #666;
		font-size: 12px;
		overflow: hidden;
		.footer-area{
			width: 90%;
			margin: 20px auto 0;
			padding: 10px 0;
			.footer-img{
				width: 137px;
				height: 59px;
				padding: 30px 10px 0px 10px;
			}
			.footer-p1{
				padding: 10px;
			}
			.footer-product{
				padding-top: 10px;
				padding-left: 10px;
				.title{
					color: #CCC;
					margin-bottom: 10px;
				}
				.img2{
					width: 60px;
					height: 60px;
				}
				ul{
					padding: 0;
					padding-bottom: 10px;
				}
				ul > li{
					display: inline-block;
					margin-right: 10px;
				}
			}
		}
		.footer-foot{
			width: 100%;
			height: 40px;
			text-align: center;
			margin-top: 20px;
			border-top: 1px solid rgba(233, 233, 233, 0.1);
			p{
				padding-top: 5px;
			}
		}
	}
</style>