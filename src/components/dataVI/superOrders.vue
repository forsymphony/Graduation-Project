<!--
 * @Author: your name
 * @Date: 2021-03-08 09:59:39
 * @LastEditTime: 2021-04-09 18:59:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Graduation-Project\src\components\dataVI\superOrders.vue
-->
<template>
  <dv-scroll-board :config="config" style="" class="aa"/>
</template>

<script>
export default {
  data () {
    return {
      config:{
        header: ['时间', '物品', '数量','金额'],
        data: [],
        rowNum: 14,
        headerBGC: '#0e1837',
        oddRowBGC: '#0e1837',
        evenRowBGC: '#0e1837',
        headerHeight: 32,
        align: 'center',
        columnWidth: [162,92,73,103]
      }
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData() {
      for(let i=1;i<=60;i++){
        let time=new Date()
        let month=time.getMonth()+1
        let day=time.getDate()
        let h=Math.floor(Math.random() * 24)
        let m=Math.floor(Math.random() * 60)
        let s=Math.floor(Math.random() * 60)
        month = this.check(month)
        day = this.check(day)
        h = this.check(h)
        m = this.check(m)
        s = this.check(s)
        let date = month+"-"+day+" "+h+":"+m+":"+s
        let number = Math.floor(Math.random() * 100)
        let num = Math.floor(Math.random() * 1000)
        num = this.check2(num)
        let money = 1000-i+','+num
        let arr = []
        arr.push(date)
        arr.push('物品'+i)
        arr.push(number)
        arr.push(money)
        this.config.data.push(arr)
      }
    },
    check(i){
      let num
      i<10?num="0"+i:num=i
      return num
    },
    check2(num) {
      let i
      if(num<10) {
        i = "00"+num
      } else if(num<100&&num>=10) {
        i = "0"+num
      } else {
        i = num
      }
      console.log(i)
      return i
    }
  }
}
</script>

<style lang="less" scoped>
.aa{
  width:438;height:533px;margin-top: 25px;
}
</style>