<template>
  <div id="wc" class="wc" ref="chart"></div>
</template>

<script>
import echarts from "echarts";
import "echarts-wordcloud";
export default {
  data() {
    return {
      words: [
          {
            name: "iPhone X",
            value: 15000
          },
          {
            name: "Mac Pro",
            value: 10081
          },{
            name: "华为P20",
            value: 9386
          },
          {
            name: "玛莎拉蒂",
            value: 7500
          },
          {
            name: "特斯拉Model S",
            value: 7500
          },
          {
            name: "天生要强",
            value: 6500
          },
          {
            name: "韩都衣舍",
            value: 6500
          },
          {
            name: "小米手机",
            value: 6000
          },
          {
            name: "耐克",
            value: 5800
          },
          {
            name: "华为手机",
            value: 5000
          },
          {
            name: "jackjones",
            value: 4500
          },
          {
            name: "欧莱雅",
            value: 3800
          },
          {
            name: "小米手机",
            value: 3000
          },
          {
            name: "梅西",
            value: 2500
          },
          {
            name: "三只松鼠",
            value: 2300
          }
        ],
      mycharts: null
    };
  },
  computed: {
    option: function() {
      return {
        // 设置标题，居中显示
        // title: {
        //   text: "本届热点词",
        //   left: 20,
        //   top: 20,
        //   textStyle: {
        //     fontWeight: "normal",
        //     color: "cyan"
        //   }
        // },
        // 数据可以点击
        tooltip: {},
        backgroundColor: "#18233f",
        series: [
          {
            // maskImage: maskResource,
            // 词的类型
            type: "wordCloud",
            gridSize: 10,
            // 设置字符大小范围
            sizeRange: [25, 70],
            rotationRange: [-45, 90],
            textStyle: {
              normal: {
                // 生成随机的字体颜色
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255),
                      Math.round(Math.random() * 255)
                    ].join(",") +
                    ")"
                  );
                }
              }
            },
            //不要忘记调用数据
            data: this.words
          }
        ]
      };
    }
  },
  components: {},
  mounted() {
    const option = this.option;
      const mycharts = echarts.init(document.getElementById("wc"));
      this.mycharts = mycharts;
      mycharts.setOption(option);
      mycharts.resize();
    // this.fetchSubjectSum();
  },
  methods: {
  }
};
</script>

<style lang="less">
.wc {
  width: 514px;
  height: 411px;
  margin-top: 20px;
}
</style>
