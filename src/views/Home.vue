<template>
    <div class="home">
        <div class="card bg-light text-black" v-for=" item in home_content" :key="item.id">
            <div class="card-header ">
                <h3>
                    <i class="el-icon-s-comment"></i>
                    <b>{{item.title}}</b>
                </h3>
            </div>
            <div class="card-body row">
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="(content,a) in item.content" :key="a">
                    <div v-if="content.hasImg">
                        <el-carousel indicator-position="outside" style="padding: 0px; margin: 2% " height="20em">
                            <el-carousel-item v-for="(con,b) in content.con" :key="b">
                                <el-card :body-style="{ padding: '0px' }">

                                    <img :src="con.src" class=" float-right w-100 h-25">
                                    <div style="padding: 0px; " class=" w-100 h-100">

                                        <b>
                                            <i class="el-icon-s-marketing"></i>
                                            {{con.title}}

                                        </b>
                                        <p class="form-control-sm">
                                            {{con.text}}
                                        </p>
                                    </div>
                                </el-card>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div v-else>
                        <div class="card bg-light text-black">
                            <div class="card-header ">

                                <b>{{content.title}}<i class="el-icon-document-copy"></i></b>
                            </div>
                            <div class="card-body" style="margin: 0;padding: 0;">
                                <ul class="list-group">
                                    <li class=" small text-left font-weight-light text-justify list-group-item "
                                        v-for=" (con,x) in content.con" :key="x">
                                        {{con.time}}
                                        {{con.text}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
    data(){
      return {
          my_flag:true,
          home_img:['img/home/guang_pan.png','img/home/timg.jpg','img/home/TIM.jpg'],
          home_content:[
            {
              id:1,
              title:'软易新闻',
              content:[
                  {
                    hasImg:true,
                    con:[
                        {src:'./img/home/change.jfif', title:"走进科学",text:'陪你追嫦娥'},
                        {src:'./img/home/yi.jpg', title:"抗击疫情",text:'科学认识新型冠状病毒肺炎'},
                        {src:'./img/home/yq2_20201227155225.jpg', title:"抗击疫情",text:''},
                        {src:'./img/home/yq_20201227155130.jpg', title:"抗击疫情",text:''},
                    ]
                  },
                  {
                    hasImg:false,
                    title:"校内新闻",
                    has:true,
                    con:[
                      {
                        time:'11-7 ',
                        text:'热烈庆祝，本校，王泽鹏同学喜提厕所所长职位。',
                      },
                      {
                        time:'11-6',
                        text:'马云来本校参观',

                      },
                      {
                        time:'11-5',
                        text:'通报本校，潘大爷同学，因在教室睡觉被老师发现，以示警告',

                      },
                      {
                        time:'11-3',
                        text:'注意：本校于星期六下午组织篮球比赛',

                      },
                     ]
                  },
                {
                  hasImg:false,
                  title:"软易校语",
                  has:false,
                  con:[
                    {
                      text:'程序员的问题是，你无法知道他在做什么，直到为时已晚。 —— 吕刚。',
                    },
                    {
                      text:'在编写代码的时候，你要经常想着，那个最终维护你代码的人可能将是一个有暴力倾向的疯子，并且他还知道你住在哪里。—— 潘大爷',
                    },
                    {
                      text:'设计软件有两种方法：一种是简单到明显没有缺陷，另一种复杂到缺陷不那么明显。—— 蒋 兰',
                    },

                  ],
                }

              ]
            },
            {
                id:2,
                title:"专题专栏",
                content:[
                    {
                        hasImg:false,
                        title:"通知公告",
                        con:[
                            {
                                text:'关于发布《软易IT一流技术学院》建设的公告',
                            },
                            {
                                text:'近几年，公务员热度一直不减，大多人挤破了脑袋想进去，然而里面的人却想出来， 显然体制外的高薪和机会吸引力更大。人生中选择正确方向比努力更重要，对于获得职业成功来说更是一样，选择的方向不同，需要付出的努力便会不同........',
                            },


                        ]
                    },
                    {
                        hasImg:true,

                        con:[
                            {
                                src:'./img/home/g6.jpg',alt:'1 slide',title:'技术理论中心',
                                text:' 学校组织的技术理论学习中心，空闲时间一起讨论在学习中遇见的一系列问题，共同讨论解决。'
                            },
                            {
                                src:'./img/home/title1.jpg',alt:'2 slide',title:'项目讲解',
                                text:'  阿里P9级资深专家，于2020年12月03号，来我校讲解项目，与同学们分享心德。'
                            },
                            {
                                src:'./img/home/pic2.jpg',alt:'3 slide',title:'闲暇之余',
                                text:' 星期六的篮球时光'
                            },


                        ]
                    },
                    {
                        hasImg:false,
                        title:"软易宣传语",
                        con:[
                            {
                                text:'《软易精神》',
                            },
                            {
                                text:'软易以“做中国最专业的计算机教育”为己任，在秉承理想教育“系统，专业，前瞻，实用” 经典品质的同时， 针对学科的技术发展和市场的就业需求，推出了专业定位更准确， 课程组合更优化的专业， 将为有志于IT领域发展和人生事业进步的社会各界人士提供更切实际的多样化教育选择， 其中主要分为软件开发和软件测试专业。'
                            },


                        ]
                    }
                ],
            }
          ],
      }

    },
    methods:{
      setParent_img() {
        this.$emit('func',this.home_img);

      }
    },
    beforeMount(){
      this.setParent_img();
    }

}
</script>
<style scoped>

</style>
