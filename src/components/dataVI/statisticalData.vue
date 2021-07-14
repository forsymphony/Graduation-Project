<template>
  <div class="all">    
    <!-- <img src="../../../static/img/resolve/two/pic-5.png" alt="">
    <img src="../../../static/img/resolve/two/pic-6.png" alt="">
    <img src="../../../static/img/resolve/two/pic-7.png" alt=""> -->
    <div class="item">
      <img src="../../../static/img/resolve/two/pic-4.png" alt="" class="itemImg">
      <div class="content">
        <div class="itemTitle">81.0</div>
        <div class="itemContent">订单总数(万)</div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/img/resolve/two/pic-5.png" alt="" class="itemImg">
      <div class="content">
        <div class="itemTitle">63.04</div>
        <div class="itemContent">销售总量(万元)</div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/img/resolve/two/pic-6.png" alt="" class="itemImg">
      <div class="content">
        <div class="itemTitle">59.1</div>
        <div class="itemContent">人均消费</div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/img/resolve/two/pic-7.png" alt="" class="itemImg">
      <div class="content">
        <div class="itemTitle">73</div>
        <div class="itemContent">近10分钟新增订单数(万)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.all{
  display: flex;
  flex-flow: wrap;
  margin-top: 25px;
  width: 452px;
  .item{
    display: flex;
    margin-bottom: 20px;
    .itemImg{
      margin-right: 15px;
    }
    .content{
      margin-right: 20px;
      .itemTitle{
        font-family: "Microsoft Yahei";
        font-size: 32px;
        font-weight: bold;
        color: rgb(255, 255, 255);
      }
      .itemContent{
        font-family: "Microsoft Yahei";
        font-size: 14px;
        color: rgb(176, 194, 249);
        margin-top: -3px;
        min-width: 80px;
      }
    }
  }
}
</style>