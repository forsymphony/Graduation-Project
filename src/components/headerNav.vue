<template>
	<div class="NavAll" v-if="!small">
        <div class="log" @click="clickimg">
            <img src="../../static/img/logo1.png" alt="" class="NavImg">
        </div>
        <Menu mode="horizontal" :theme="theme1" active-name="1" class="Menu" @on-select="menuSelect">
            <MenuItem name="homec" class="text">
                首页
            </MenuItem>
            <MenuItem name="product" class="text">
                产品
            </MenuItem>
            <MenuItem name="resolve" class="text">
                解决方案
            </MenuItem>
            <MenuItem name="aboutUs" class="text">
            关于我们
            </MenuItem>
        </Menu>
    </div>
	<div class="all" v-else>
		<div class="head">
			<img src="../../static/img/logo1.png" mode="" class="img">
			<img src="../../static/img/quxiao.png" mode=""  class="close" v-if="iconShow == false" @click="iconShowFun">
			<img src="../../static/img/liebiao.png" mode="" class="choose" v-else @click="iconShowFun">
		</div>
		<div class="pop" @touchmove="closeNav" v-if="iconShow == false">
			<div class="list">
				<p class="pItem" :class="{isActive:pShow == 1}" @click="change(1)">首页</p>
				<p class="pItem" :class="{isActive:pShow == 2}" @click="change(2)">产品</p>
				<p class="pItem" :class="{isActive:pShow == 3}" @click="change(3)">解决方案</p>
				<p class="pItem" :class="{isActive:pShow == 4}" @click="change(4)">关于我们</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				iconShow:true,
				pShow:1,
				theme1: 'dark',
				small:false
			}
		},
		computed:{
			returnFlag() {
				return this.$store.state.small
			}
		},
		watch: {
			returnFlag:{
				handler:function(val){
					this.small = val
				}
			}
		},
		methods:{
			iconShowFun(){
				this.iconShow = !this.iconShow
			},
			closeNav(){
				this.iconShow = true
				// event.preventDefault()
				console.log("aa")
			},
			change(num){
				this.pShow = num
				this.iconShow = !this.iconShow
				let x = ""
				let a = ['homec','product','resolve','aboutUs']
				this.$router.push({ path: a[num-1], replace: true })
				// if(num == 1){
				// 	uni.navigateTo({
				// 			url: '/pages/index/index'
				// 	})
				// } else if(num == 2){
				// 	uni.navigateTo({
				// 			url: '/pages/product/product'
				// 	})
				// } else if(num == 3){
				// 	uni.navigateTo({
				// 			url: '/pages/solove/solove'
				// 	})
				// } else{
				// 	uni.navigateTo({
				// 			url: '/pages/aboutUs/aboutUs'
				// 	})
				// }
				
			},
			 menuSelect(name){
				this.$router.push({ path: name, replace: true })
				let a = {'homeC':1,'product':2,'resolve':3,'aboutUs':4}
				this.pShow = a[name]
            },
            clickimg(){
                this.$router.push({ path: "homec", replace: true })
			}
		}
	}
</script>

<style lang="less" scoped>
	.all{
		width: 100%;
		.head{
			height: 56px;
			background: #333;
			width: 100vw;
			z-index: 970;
			box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
			// position: fixed;
			// top: 0;
			width: 100%;
			.img{
				display: inline-block;
				position: absolute;
				left: 7%;
				top: -5px;
				width: 137px;
				height: 56px;
			}
			.close{
				width: 40px;
				height: 40px; 
				float: right;
				margin-right: 6px;
				margin-top: 10px;
				
			}
			.choose{
				width: 28px;
				height: 28px; 
				float: right;
				margin-right: 12px;
				margin-top: 12px;
			}
		}
		.pop{
			height: 100vh;
			position: absolute;
			z-index: 100;
			.list{
				// position: fixed;
				// top: 128rpx;
				background-color: #FFFFFF;
				z-index: 999;
				.pItem{
					width: 100vw;
					padding: 0 16px;
					font-size: 12px;
					line-height: 42px;
					height: 42px;
					padding-left: 24px;
					font-weight: 400;
					
				}
				.isActive{
					background-color: #edf8f5;
					color: #1989fa;
					
				}
			}
		}
	}
	.none{
		display: none;
	}
	.NavAll{
		// width: 1920px;
		// min-width: 100%;
		height: 64px;
		position: relative;
		background: #333333;
		.log{
			position: absolute;
			left: 13%;
			text-align: center;
			.NavImg{
				width: 136px;
				height: 59px;
				display: inline-block;
			}
		}
		.Menu{
			position: absolute;
			left: 30%;
			// width: 1000px;
			background: #333333;
			color:white;
			.text{
				padding-left: 80px;
				padding-right: 80px;
				font-size: 16px;
			}
		}
	}
</style>