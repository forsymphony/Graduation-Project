<template>
  <div class="resolve">
      <div class="resolveArea">
        <h2>行业解决方案</h2>
        <div class="show1Area">
          <div class="show1">
            <div class="title">移动充电与感知应用</div>
            <div class="img1">
              <div class="showimg">
                <img class="showimg1" src="http://qiniu.terabits.cn/solve01.jpg" alt="">
              </div>
              <div class="imgcontent"></div>
            </div>
          </div>
          <div class="show1">
            <div class="title">新能源汽车智能监控系统解决</div>
            <div class="img1">
              <div class="showimg">
                <img src="http://qiniu.terabits.cn/solve03.jpg" alt="">
              </div>
              <div class="imgcontent"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.resolve{
  .resolveArea{
    width: 95%;
    margin: 40px auto 309px;
    padding: 30px;
    h2{
      font-weight: bold;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
      margin: 10px 0;
      text-indent: 16px;
    }
    .show1Area{
      display: flex;
      justify-content: space-around;
      
      .show1{
        width: 23%;
        height: 500px;
        margin-top: 10px;
        background: #fff;
        border-radius: 2px;
        font-size: 12px;
        position: relative;
        transition: all .3s;
        border: 1px solid #eee;
      }
      .title{
        width: 100%;
        height: 48px;
        line-height: 48px;
        background: #fff;
        border-bottom: 1px solid #e9e9e9;
        padding: 0 24px;
        border-radius: 2px 2px 0 0;
        margin-bottom: -1px;
        white-space: nowrap;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
      }
      .img1{
        .showimg{
          // width: 100%;
          .shoimg1{
            width: 355px;
            height: 417px;
          }
        }
        .imgcontent{

        }
      }
    }
  }
}
</style>