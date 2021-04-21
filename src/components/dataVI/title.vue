<!--
 * @Author: your name
 * @Date: 2021-04-11 12:54:53
 * @LastEditTime: 2021-04-11 19:06:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\components\dataVI\title.vue
-->
<template>
    <div class="title">
        <img :src="add" alt="">
        <div class="division"></div>
        <div class="_right">
            <div class="right1">{{chinese}}</div>
            <div class="right2">{{eng}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['chinese','eng','add']
}
</script>

<style lang="less" scoped>
.title{
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 42px;
        height: 42px;
        display: inline-block;
    }
    .division{
        display: inline-block;
        width: 3px;
        height: 31px;
        background: #FFFFFF;
        margin-left: 9px;
        margin-right: 10px;
    }
    ._right{
        display: inline-block;
        margin-top: -8px;
        .right1{
            height: 20px;
            font-size: 20px;
            font-weight: 400;
            color: #FFFFFF;
            margin-bottom: 6px;
        }
        .right2{
            height: 15px;
            font-size: 14px;
            font-weight: 300;
            color: #FFFFFF;
        }
    }
}
</style>