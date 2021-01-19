<template>
    <div  name="teacherResourcePower" class="container-fluid "  @change="setParent_img"  >

        <div class="card  ">
            <div class="card-header" >
                <h3>
                    <i class="el-icon-s-custom"></i>
                    <b>
                        优秀教师
                    </b>
                </h3>
            </div>
<!--            教师 栅格展示 -->


            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 h-25" v-for="(item , i) in teacher_data" :key="item.id"  >
                    <div class="card bg-light " >
                        <div class="card-header h-25 bg-purple-light" >
                            <el-image
                                    class="h-100 w-50"
                                    :src="item.tea_img"
                                    fit="contain"></el-image>
                        </div>
                        <div class="card-body" style="padding: 0">
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-success">
                                    <el-tag type="success"
                                            effect="dark">
                                        <h5>
                                            <i class="el-icon-s-custom"></i>
                                            <b>

                                            教师 : {{item.name}}
                                        </b></h5>
                                    </el-tag>

                                <li class="list-group-item list-group-item-secondary">
                                <el-tag type="info"
                                        effect="dark"
                                        text-color="black"
                                >

                                    <i class="el-icon-s-cooperation"></i>现任职务:
                                </el-tag>
                                    {{item.duty}}
                                </li>
                                <li class="list-group-item list-group-item-info">
                                    <el-tag
                                            effect="dark"
                                            text-color="black"
                                    >
                                        <i class="el-icon-chat-dot-square"></i>教师寄语:

                                    </el-tag>
                                    {{item.sendWord}}
                                </li>
                                <li class="list-group-item list-group-item-warning">
                                    联系方式：{{item.touchWay}}
                                    <el-tag type="warning"
                                            effect="dark">
                                        （微信同号）<i class="el-icon-user"></i>
                                    </el-tag>
                                </li>
                                <li class="list-group-item list-group-item-light">
                                    <el-collapse v-model="activeNames" @change="handleChange">
                                        <el-collapse-item title="详细信息 ">
                                            {{item.intro}}
                                        </el-collapse-item>

                                    </el-collapse>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>

        </div>


    </div>



</template>

<script>

    export default {
        data(){  // 定义数据
            return {
                centerDialogVisible: false,
                activeNames: ['1'],
                data_img:["img/teacher/shiXue.jpg","img/teacher/hello_world.jpg","img/teacher/long.jpg","img/teacher/java.jpg"],
                teacher_data:[
                    {
                        id:1,
                        name:'王余',//姓名
                        duty:'高级讲师，J2EE软件开发讲师',//职务
                        intro:'6年的软件开发经验，曾在金立担任多个项目的核心研发人，并有大型跨境电商管理经验。在校主要负责学生就业，业务的扩展，就业管理，学生的日常管理',//个人
                        sendWord:'在心为志',//寄语
                        touchWay:'18681488120',//联系方式
                        tea_img:'img/teacher/wangTeacher.jpg',//老师图片
                        qr_code:'12'//微信添加二维码

                    },


                    {id:2,
                        name:'朱卫安',
                        duty:'高级讲师，J2EE软件开发讲师',
                        intro:' 6年的软件开发经验，曾在顺丰科技负责多个项目的管理，大数据处理。还参与过港口收费，银行等多个项目的架构设计和开发 在校主要负责学生就业，渠道的开拓，业务的扩展，就业管理，学生的日常管理',
                        sendWord:'成功是1%的灵感加上99%的努力',
                        touchWay:' 18575676016',
                        tea_img:'img/teacher/zhuTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },
                    {
                        id:3,
                        name:'高欢',
                        duty:'技术调研讲师',
                        intro:'8年的软件开发经验，互联网金融业的标杆。现担任鲸仓科技技术总监，精通架构设计。',
                        sendWord:'要想做个坚韧的人，贵在持之以恒',
                        touchWay:'13650254756',
                        tea_img:'img/teacher/gaoTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },

                    {
                        id:4,
                        name:'周志桥',
                        duty:'技术调研讲师',
                        intro:'8年的软件开发经验，增担任多家企业项目负责人。现担任信息技术科技技术总监',
                        sendWord:'只为成功找方法，不为失败找借口！',
                        touchWay:' 18714956325',
                        tea_img:'img/teacher/zhouTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },
                    {
                        id:5,
                        name:'江建莉',
                        duty:'外聘高级讲师',
                        intro:'9年的软件开发经验，现担任顺丰科技工业工程部高级项目经理。对软硬件的交互有深入的研究',
                        sendWord:'努力不一定有回报，但是不努力，就一定没有回报',
                        touchWay:' 15705597512',
                        tea_img:'img/teacher/jiangTeacher.jpg',
                        qr_code:''//微信添加二维码
                     },
                    {id:6,
                        name:'廖东海',
                        duty:'外聘高级讲师',
                        intro:'8年的软件开发经验，现担任国际电商物流公司技术总监。长期驻扎美国，提供有力的技术支持',
                        sendWord:'沟通是一个人在成功和事业上的重要基础',
                        touchWay:'18808455741',
                        tea_img:'img/teacher/liaoTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },
                    {id:7,
                        name:'唐伟',
                        duty:'高级UI讲师',
                        intro:'6年的UI设计经验，现担任腾讯高级UI工程师。参与过QQ空间及腾讯多款热门游戏的设计。',
                        sendWord:'一只狼捉一只羊都是费力的 但是一群狼 连狮子都要怕上三分',
                        touchWay:'13817844235',
                        tea_img:'img/teacher/tangTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },
                    {id:8,
                        name:'彭刚定',
                        duty:'安卓高级讲师',
                        intro:' 5年的安卓开发经验，曾在360负责360健康卫士开发；与新浪合作开发360锁屏杂志。现担任乐视TV高级安卓研发工程师。精通wifi协议栈wpa-supplicant，精通systemUI keyguard开发',
                        sendWord:'学会专注，勇于舍弃',
                        touchWay:' 18824532469',
                        tea_img:'img/teacher/pengTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },
                    {   id:9,
                        name:'邓人玮',
                        duty:'教导处副主任',
                        intro:' 毕业于湖南师大物理信息科技软件工程学院，3年项目管理现场施工经验，资深企业项目策划。擅长项目策划，HR管理，喜欢用创新的思维引爆学生的大脑，通过模拟面试及心理辅导帮助学员自我定位，为将来的成功之路奠定基础',
                        sendWord:'不自矜，故长',
                        touchWay:'13874923365',
                        tea_img:'img/teacher/dengTeacher.jpg',
                        qr_code:''//微信添加二维码
                    },

                ],

            }
        },
        methods:{
            handleChange(val) {
                console.log(val);
            },
            setParent_img(){
                this.$emit('func',this.data_img);
            }
        },

        beforeMount(){
            this.setParent_img();
        }
    }
</script>




<style scoped >

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }



    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;

    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>
