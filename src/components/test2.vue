<template>
  <div class="all">
    <div class="aa">起飞</div>
    <div class="bb">
      <slot name="myslot" :value="data"></slot>
    </div>
    <div class="cc">{{shuju}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  },
  props:{
   shuju:{
     type: String,
     default: '上当'
   }
 }
}
</script>

<style lang="less" scoped>
.all{
  width: 100%;
  border: 1px red solid;
}
.aa{
  display: inline-block;
  color:red;
}
.bb{
  display: inline-block;
  color:blue;
}
.cc{
  display: inline-block;
}
</style>