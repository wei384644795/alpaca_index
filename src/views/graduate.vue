<template>

    <div name="graduate" class="container-fluid">


        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>毕业明星</span>

            </div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,i) in message" :key="i">
                    <div class="grid-content bg-purple">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>{{item.name}}</span>
                            </div>
                            <el-row :gutter="20">
                                <el-col :xs="24" :sm="12" :md="12">
                                    <el-image
                                            style="height: 200px; width: 170px"

                                            :src="item.img"
                                            fit="scale-down"></el-image>
                                </el-col>

                                <el-col :xs="24" :sm="12" :md="12"  class="text-left">
                                    <div>
                                        <el-tag

                                                type=""
                                                effect="dark">
                                            年龄:{{item.age}}
                                        </el-tag>

                                    </div>
                                    <div >
                                        <el-tag

                                                type="success"
                                                effect="dark">
                                            籍贯:{{item.old_address}}
                                        </el-tag>

                                    </div>
                                    <div>
                                        <el-tag

                                                type="info"
                                                effect="dark">
                                            学历：{{item.education}}
                                        </el-tag>

                                    </div>
                                    <div>
                                        <el-tag

                                                type="danger"
                                                effect="dark">
                                            毕业学校：{{item.school}}
                                        </el-tag>

                                    </div>
                                    <div>
                                        <el-tag

                                                type="warning"
                                                effect="dark">
                                            毕业时间：{{item.time}}
                                        </el-tag>

                                    </div>
                                    <div>
                                        <el-tag

                                                type=""
                                                effect="dark">
                                            毕业薪资：{{item.salary}}
                                        </el-tag>

                                    </div>
                                </el-col>
                            </el-row>


                        </el-card>

                    </div>
                </el-col>
            </el-row>
            <div>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left" :disabled="hasFirst"
                               @click="setMessage(this_page = this_page-1)">上一页
                    </el-button>
                    <el-button type="primary" :disabled="hasLast" @click="setMessage(this_page = this_page+1)">下一页<i
                            class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
            </div>
        </el-card>

    </div>

</template>

<script>


    export default {
        name: 'graduate',
        data() {  // 定义数据

            return {
                hasFirst: true,
                hasLast: true,
                this_page: 1,
                message: [],
                data: [
                    {
                        id: 1, name: '谢春伟', path: "img/graduate/xieChunWei.jpg", company: '新浪',
                        introduce: '职业发展受限参加软易java软件开发工程培训，工资翻3倍获20k月薪,人生中选择正确方向比努力更重要，对于获得职业成功来说更是一样，选择的方向不同，需要付出的努力便会不同。'
                    },
                    {
                        id: 2, name: '张文滔', path: "img/graduate/zhang_20201226211032.jpg", company: '韵达',
                        introduce: "2013年毕业于湖南省永州市二中。\n" +
                            "             毕业后一直在社会大学历练，期间做过很多事情但都以失败告终。\n" +
                            "             在2015年终于迎来了自己人生的转折点，就读于本校。\n" +
                            "             因在社会的几年沉淀，来软易后学习态度积极，对自己严格要求，于2017年正式毕业。\n" +
                            "             最终以1.3w入职于深圳宝安韵达公司，开启了人生新的征程"
                    },
                    {
                        id: 3, name: '王鑫', path: "img/graduate/wang_20201226211048.jpg", company: '云慧',
                        introduce: " 高中毕业于湖南省永州市东安二中。\n" +
                            "        在校期间因独特的性格总是与同学们格格不入，形成了独来独往的习惯，并且学习也平淡无奇。\n" +
                            "        高中毕业后无所事事，在经家人的劝阻来本校试学，在试学期间发现自己对所学的知识都有着异于常人的理解和思维，\n" +
                            "        最后毅然的决定在本校就学。在经过两年左右不懈努力与学习，在2017年与张文韬等同学一起正式毕业。\n" +
                            "        现职与 云慧 公司，月薪1.4w。"
                    },
                    {
                        id: 4, name: '唐群', path: "img/graduate/tang_20201226211102.jpg", company: '软件信息',
                        introduce: "唐同学，毕业于湖南涉外科技大学，专业是软件工程，大学毕业后，\n" +
                            "\t 为了自己的吃住，一直从事着 专业不对口 的工作，不甘愿\t 一身才华就此埋没。\n" +
                            "\t 凭借着大学中所学的专业，在工作期间自学了java，\n" +
                            "\t 学习半年后对Java，有了深刻的理解，但是对于 框架 和 项目 \n" +
                            "\t 方面，她还是小白一个。最终她选择了我们软易就读，经过一年半的不懈努力，从一个项目小白\n" +
                            "\t 到 自己独立开发项目。凭借自己的项目开发经验 成功 拿到12k的高薪"
                    },
                    {
                        id: 5, name: '蒋文祥', path: "img/graduate/jiang_20201226211109.jpg", company: '鲸仓',
                        introduce: ' 于 2016 年应届毕业至湖南省永州市八中。\n' +
                            '           在校期间学习成绩总是居中，表现平平，又不想毕业后碌碌无为。\n' +
                            '           高中毕业后，整天为自己的前途担忧，最终在经别人的介绍下来就读与本校，' +
                            '           在校期间勤奋学习，刻苦努力。\n' +
                            '            2018 年初正式毕业，现12k高薪入职于深圳市 鲸仓 公司。'
                    },
                    {
                        id: 6, name: '吕忠', path: "img/graduate/lv_20201226211225.jpg", company: '平安',
                        introduce: '毕业与湖南省永州市四中。\n' +
                            '        热爱打游戏，从小有一个职业电竞梦，不善与人交流，毕业后无所事事，整天与游戏相伴。\n' +
                            '        在一个偶然的机会下了解到了软易IT，对这个新的领域充满了好奇，抱着满怀期待的来到软易。\n' +
                            '        但想法与现实不成正比，每天面对着高强度的学习，中途有着无数次的放弃念头，但都坚持了下来，\n' +
                            '        最终经过一年多的努力学习成功毕业。以15k的高薪资入职与平安保险公司'
                    }, {
                        id: 7, name: '唐晶玲', path: "img/graduate/tang_20201226211102..jpg", company: '保密',
                        introduce: "毕业于 永州市第六中学。在校成绩一直不是很理想，" +
                            " 高三的第二次模拟考试成绩出来之后，唐同学对自己的学习彻底失去了信心，" +
                            " 决定和家人商量放弃学业，家人得知消息后，推荐 唐同学 来软易试学一个月。" +
                            " 在老师的 细心教导下 唐同学找回了学习的乐趣，经过两年半的时间，" +
                            " 成功在 2019年上半年毕业于软易，现工资已达到 12k每月。"
                    },

                ],

                gra_data: [
                    {
                        name: "王鑫",
                        age: 19,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "东安二中",
                        time: "2018年11月",
                        salary: 13000,
                        img: "img/graduate/wang_20201226211048.jpg",
                    }, {
                        name: "乔明志",
                        age: 18,
                        old_address: "湖南永州",
                        education: "初中",
                        school: "永州剑桥",
                        time: "2020年03月",
                        salary: 20000,
                        img: "img/graduate/qmz_20210106111123.jpg",
                    }, {
                        name: "毛敏敏",
                        age: 20,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "东安二中",
                        time: "2019年10月",
                        salary: 13500,
                        img: "img/graduate/mmm_20210106111312.jpg",
                    }, {
                        name: "唐群",
                        age: 22,
                        old_address: "湖南永州",

                        education: "高中",
                        school: "东安二中",
                        time: "2020年4月",
                        salary: 13000,
                        img: "img/graduate/tang_20201226211102.jpg",
                    }, {
                        name: "张文滔",
                        age: 25,
                        old_address: "湖南永州",

                        education: "高中",
                        school: "永州六中",
                        time: "2018年11月",
                        salary: 13000,
                        img: "img/graduate/zhang_20201226211032.jpg",
                    }, {
                        name: "陈涛",
                        age: 19,
                        old_address: "湖南永州",

                        education: "高中",
                        school: "东安一中",
                        time: "2019年10月",
                        salary: 13000,
                        img: "img/graduate/ct_20210106111300.jpg",
                    }, {
                        name: "吕忠",
                        age: 20,
                        old_address: "湖南永州",
                        education: "中专",
                        school: "永州综合职业中专",
                        time: "2020 年 6 月",
                        salary: 15000,
                        img: "img/graduate/lv_20201226211225.jpg",
                    }, {
                        name: "文子祥",
                        age: 20,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "永州四中",
                        time: "2019 年 10 月",
                        salary: 13500,
                        img: "img/graduate/wzx_20210106111051.jpg",
                    }, {
                        name: "唐磊",
                        age: 20,
                        old_address: "湖南永州",
                        education: "中专",
                        school: "永州综合职业中专",
                        time: "2019 年 11 月",
                        salary: 13000,
                        img: "img/graduate/tl_20210106111235.jpg",
                    }, {
                        name: "蒋文祥",
                        age: 20,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "永州八中",
                        time: "2020 年 6 月",
                        salary: 11000,
                        img: "img/graduate/jiang_20201226211109.jpg",
                    }, {
                        name: "唐晶玲",
                        age: 21,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "永州六中",
                        time: "2020 年 7 月",
                        salary: 11000,
                        img: "img/graduate/tjl_20210118115001.jpg",
                    }, {
                        name: "叶展",
                        age: 20,
                        old_address: "湖南永州",
                        education: "高中",
                        school: "永州进修学校",
                        time: "2019 年 11 月",
                        salary: 12000,
                        img: "img/graduate/yz_20210106111148.jpg",
                    },
                ],
            }
        },
        methods: {
            setParent_img() {
                this.$emit('func', this.home_img);
            },
            setMessage(index) {
                console.log(index);
                if (index <= 0)
                    index = 1;
                var start = (index - 1) * 6;
                var end = index * 6;
                if (end > this.gra_data.length) {
                    end = this.gra_data.length;
                    start = end - 6;
                }
                console.log(start, end)
                this.message = this.gra_data.slice(start, end);

                this.hasFirst = (index == 1);
                this.hasLast = (end == this.gra_data.length);


            }
        },
        beforeMount() {
            this.setParent_img();
            this.setMessage(this.this_page);
        }

    }
</script>
<style scoped>

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
