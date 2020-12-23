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

</style>