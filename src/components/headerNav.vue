<template>
    <div class="NavAll">
        <div class="log" @click="clickimg">
            <img src="../../static/img/logo1.png" alt="" class="NavImg"> 
              <!--  1920*1080 136*60  官网logo -->
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
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'dark'
            }
        },
        methods:{
            menuSelect(name){
                this.$router.push({ path: name, replace: true });
            },
            clickimg(){
                this.$router.push({ path: "homec", replace: true });
            }
        }
    }
</script>

<style scoped lang="less">
.NavAll{
    width: 100%;
    min-width: 1920px;
    height: 64px;
    position: relative;
    background: #333333;
    .log{
        position: absolute;
        left: 250px;
        text-align: center;
        .NavImg{
            // width: 208px;
            // height: 65px;
            display: inline-block;
        }
    }
    .Menu{
        position: absolute;
        left: 500px;
        width: 1000px;
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