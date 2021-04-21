<!--
 * @Author: your name
 * @Date: 2020-12-29 09:26:04
 * @LastEditTime: 2021-04-09 17:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\views\home.vue
-->
<template>
  <div>
      <header-nav></header-nav>
      <router-view></router-view>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerNav from '../components/headerNav'
import footerNav from '../components/footerNav'
export default {
    data(){
        return{
            screenWidth: document.body.clientWidth
        }
    },
    components:{
        headerNav,
        footerNav
    },
    created () {
        let baseSize = 100

        function setFontSize () {
        // 设计稿 1920
            let scale = document.documentElement.clientWidth / 1920
        // 设置页面根节点字体大小，最高放大比例为2）
            document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
            console.log(document.documentElement.style.fontSize);
            // document.documentElement.style.fontSize = 100+'px'
            // if(document.documentElement.clientWidth<=767) {
            // this.$store.commit("setSamll",true)
            // } else {
            //     this.$store.commit("setSamll",false)
            // }
        }
        // 初始化
        // setFontSize()

        // 监听窗口变化
        // window.onresize = () => {
        // setFontSize()
        // }
        // window.addEventListener('resize',setFontSize)
    //     function goPAGE(){
    //         if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //                 // window.location.href="移动端url";
    //                 alert("mobile")
    //             }
    //             else {
    //                 // window.location.href="pc端url"; 
    //                 alert("pc")
    //             }
    //         }
    //  goPAGE();  
    },
    watch:{
        // screenWidth(val){
        //     // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        //     console.log(this)
        //     if(!this.timer){
        //         // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        //         this.screenWidth = val
        //         this.timer = true
        //         let that = this
        //         setTimeout(function(){
        //             // 打印screenWidth变化的值
        //             console.log(that.screenWidth)
        //             that.timer = false
        //         },400)
        //     }
        // }
    },
    methods:{
        _GXResizeEvent() {
            const nDefault_width = 1920;
            const nDefault_height = 1080;
            const nClient_width = document.documentElement.clientWidth;
            const nClient_height = document.documentElement.clientHeight;
            const nAuot_width = nClient_width / nDefault_width;
            const nAuot_height = nClient_height / nDefault_height;
            const jNodeBody = document.body;
            jNodeBody.style.transform = `scale(${nAuot_width},${nAuot_height})`;
            jNodeBody.style.msTransform = `scale(${nAuot_width},${nAuot_height})`;
            jNodeBody.style.mozTransform = `scale(${nAuot_width},${nAuot_height})`;
            jNodeBody.style.webkitTransform = `scale(${nAuot_width},${nAuot_height})`;
            jNodeBody.style.oTransform = `scale(${nAuot_width},${nAuot_height})`;
        },
        // setRem(baseWidth = 1920) {
        //     // const dpr = window.devicePixelRatio;
        //     const currentWidth = document.documentElement.clientWidth;
        //     let remSize = 0;
        //     let scale = 0;
        //     scale = currentWidth / baseWidth;
        //     remSize = baseWidth / 10;
        //     remSize = remSize * scale;
        //     document.documentElement.style.fontSize = remSize + 'px';
        //     document.documentElement.setAttribute('data-dpr', `${dpr}`);
        // }
    }
}
</script>

<style>
h1,h2,h3,h4,h5,h6{
    font-weight: 500;
}
</style>