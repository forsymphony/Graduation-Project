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

        }
    },
    components:{
        headerNav,
        footerNav
    }
}
</script>

<style>
h1,h2,h3,h4,h5,h6{
    font-weight: 500;
}
</style>