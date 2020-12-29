<template>

    <div name="graduate" class="container-fluid">


        <div class="card bg-light text-black">
            <div class="card-header ">
                <h3>
                    <b>软易毕业明星</b>
                </h3>
            </div>

            <div class="card-body ">
                <div class="row">
                    <div class="col-md-8">
                        <div class="new">
                            <div v-for="item in message" :key="item.id">
                                <div class="row">
                                    <div id="yi_span" class="col-md-4 col-lg-offset-1">

                                    <span id="app1">
                                          <img :src="item.path"
                                               class='img-thumbnail img-circle img-responsive ani-alpaca-img alpaca-img1'>
                                    </span>
                                    </div>
                                    <div class="col-md-8 ani-alpaca-font">
                                        <h3 class="user_style" v-cloak>&nbsp;
                                            &nbsp; &nbsp;<span class="glyphicon glyphicon-user"></span>
                                            姓名：{{item.name}}
                                        </h3>
                                        <ul class="list-unstyled">
                                            <li>
                                                <p class="hidden-xs fcolor">
                                                    <span class="badge">就 业 公 司</span> &nbsp;&nbsp;
                                                    &nbsp;{{item.company}}
                                                </p>
                                            </li>
                                            <li>
                                                <span class="label label-success" v-cloak>个 人 介 绍</span>
                                                <div class="user_style font-weight-light" v-cloak>{{item.introduce}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div>
                            <el-button-group>
                                <el-button type="primary" icon="el-icon-arrow-left" :disabled="hasFirst" @click="setMessage(this_page = this_page-1)">上一页</el-button>
                                <el-button type="primary"  :disabled="hasLast" @click="setMessage(this_page = this_page+1)">下一页<i class="el-icon-arrow-right el-icon--right" ></i></el-button>
                            </el-button-group>
                        </div>
                    </div>


                    <div class="col-md-4 ani-alpaca-div">
                        <div id="temp1_div">
                            <h3 id="temp1_h3">&nbsp;&nbsp;&nbsp;&nbsp;
                                软 易 IT 六 大 标 准 保 证
                            </h3>
                            <dl id="yi_font_size" class="list-inline text-left">
                                <dd>
                                    <span>1:万元课程</span> 软件工程师培养费用：32888元(一年半)
                                </dd>

                                <dd>
                                    <span>2:底薪保障</span> 入学签订就业保障合同,起薪7000元/月
                                </dd>

                                <dd>
                                    <span>3:就业城市</span> 承诺北京、上海、广州、深圳等一线城市
                                </dd>

                                <dd>
                                    <span>4:杜绝乱费</span> 除学费、食宿费外杜绝收取一切费用
                                </dd>

                                <dd>
                                    <span>5:全额退款</span> 毕业后一年未成功就业全额退款
                                </dd>
                                <dd>
                                    <span>6:安全保障</span> 学校为学员购买高额保险
                                </dd>
                            </dl>
                                  <img  src="../../public/img/graduate/594525cd89fe647242fd1092ebaa0fba.jpg" class="img-thumbnail  ani-alpaca-img"/>
                                  <hr/>
                                  <img  src="../../public/img/graduate/1d8e6311ed2e4e847b4dad666492694d.jpg" class="img-thumbnail  ani-alpaca-img"/>
                                  <hr/>
                                  <img  src="../../public/img/graduate/a03e3a8675fa80414b534d12b5f6933d.jpeg" class="img-thumbnail  ani-alpaca-img"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>

</template>

<script>


    export default {
        name: 'graduate',
        data() {  // 定义数据

            return {
                hasFirst:true,
                hasLast:true,
                this_page:1,
                message: [

                ],
                data:[
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
                            "             最终以1.3w入职于深圳宝安韵达公司，开启了人生新的征程" },
                    {
                        id: 3, name: '王鑫', path: "img/graduate/wang_20201226211048.jpg", company: '云慧',
                        introduce: " 高中毕业于湖南省永州市东安二中。\n" +
                            "        在校期间因独特的性格总是与同学们格格不入，形成了独来独往的习惯，并且学习也平淡无奇。\n" +
                            "        高中毕业后无所事事，在经家人的劝阻来本校试学，在试学期间发现自己对所学的知识都有着异于常人的理解和思维，\n" +
                            "        最后毅然的决定在本校就学。在经过两年左右不懈努力与学习，在2017年与张文韬等同学一起正式毕业。\n" +
                            "        现职与 云慧 公司，月薪1.4w。" },
                    {
                        id: 4, name: '唐群', path: "img/graduate/tang_20201226211102.jpg", company: '软件信息',
                        introduce: " 90后的农村小唐，初中毕业后，一直在 深圳富士康 流水线工作，" +
                            "不甘愿 止步于此。怀着满腔的热血，在家中自学了java，学习半年后对Java，有了深刻的理解，" +
                            "但是对于 框架 和 项目 方面，她还是小白一个。" +
                            "最终她选择了我们软易就读，" +
                            "经过一年半的不懈努力，从一个项目小白 到 自己独立开发项目。凭借自己的项目开发经验 成功 拿到12k的高薪 "
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
                    },
                ],
            }
        },
        methods: {
            setParent_img() {
                this.$emit('func', this.home_img);
            },
            setMessage(index){
                console.log(index)
                if(index <= 0)
                    index=1;
                var start = (index-1)*4;
                var end = index*4;
                if(end > this.data.length){
                    end = this.data.length;
                    start = end - 4;
                }
                console.log(start,end)
                this.message = this.data.slice(start,end);

                this.hasFirst= (index == 1 );
                this.hasLast = (end == this.data.length);


            }
        },
        beforeMount() {
            this.setParent_img();
            this.setMessage(this.this_page);
        }

    }
</script>
<style>

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


    #app1 img {
        cursor: pointer;
        transition: all 0.6s;
    }

    #yi_font_size span {
        color: red;
    }

    #yi_font_size dd {
        background-color: lawngreen;
    }

    #app1 img:hover {
        transform: scale(1.2);
    }

    #yi_font_size {
        font-family: Ebrima;
        font-size: 14px;
    }

    .guanggao {
        width: 360px;
        height: 220px;
    }

    .dl_line dt {
        width: 300px;
    }

    .alpaca-img1 {

    }

    #temp1_h3 {
        color: red;
        font-family: 方正粗黑宋简体;
        background-color: yellow;
    }

    #temp1_h3 {
        color: red;
        font-family: 方正粗黑宋简体;
        background-color: yellow;
    }

    .user_style {
        font-family: 新宋体;
    }

    #user_style span {
        color: rgb(182, 182, 182);
    }

    .fcolor span {
        font-family: 方正粗黑宋简体;
    }

    .badge {
        background-color: rgb(220, 20, 123);
    }


    /*span{
        border : 1px solid yellow;
    }*/

</style>
