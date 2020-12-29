<template>
</template>

<style scoped >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>

  export default {
    data() {  // 定义数据

      return {

        message: [
          {
            id: 1, name: '谢春伟', path: "img/graduate/xieChunWei.jpg", company: '新浪',
            introduce: '职业发展受限参加软易java软件开发工程培训，工资翻3倍获26k月薪,人生中选择正确方向比努力更重要，对于获得职业成功来说更是一样，选择的方向不同，需要付出的努力便会不同。'
          },
          {
            id: 2, name: '邓鑫', path: "img/graduate/dengXin.jpg", company: '百度',
            introduce: '近几年，公务员热度一直不减，大多人挤破了脑袋想进去，然而里面的人却想出来，显然体制外的高薪和机会吸引力更大，90后年轻小伙把握机会来到软易求学软件开发，毕业出任CEO月薪32K'
          },
          {
            id: 3, name: '刘哥', path: "img/graduate/捕获.PNG", company: '安居客',
            introduce: '在这个行业众多竞争力强大的时代，我刘哥选择了软易IT,从此走上了人生巅峰，迎娶白富美，出任CEO,如今21岁的年纪就月收入过百万，当有人问他成功的秘密时，他解释说，人生没有什么是不可能的，只要你敢想'
          },
          {
            id: 4, name: '空你脊瓦', path: "img/graduate/IMG_0044.JPG", company: '微博',
            introduce: '暂无介绍'
          }
        ]
      }
    },
  }
</script>

