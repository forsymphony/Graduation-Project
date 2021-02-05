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
    mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    watch:{
    screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        console.log(this)
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                console.log(that.screenWidth)
                that.timer = false
            },400)
        }
    }
}
}
</script>

<style>
h1,h2,h3,h4,h5,h6{
    font-weight: 500;
}
</style>