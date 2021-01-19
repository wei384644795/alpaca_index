<template>
    <div name="recruit">
        <el-row :gutter="20">
            <el-col :span="8" v-for="item in rec_img" :key="item.id">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.img" class="img-thumbnail">
                        <div style="padding: 14px;">
                            <span>{{item.name}}</span>
                        </div>
                    </el-card>
                </div>
            </el-col>


        </el-row>
        <div class="card bg-light text-black">
            <div class="card-header ">

                <el-tag type="warning"
                        effect="dark">
                    <h4>
                        热点问答
                    </h4>
                </el-tag>


            </div>

            <div class="card-body ">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="(item,i) in list" :key="item.id" :name="i">
                        <template slot="title">
                                <h6>
                                    {{item.content}}
                                </h6>


                            <i class="header-icon el-icon-info"></i>
                        </template>
                        <div v-for="str in item.contents" class="text-left">{{str.str}}</div>

                    </el-collapse-item>

                </el-collapse>
            </div>
        </div>

    </div>
</template>

<script>

    export default {

        data() {
            return {
                activeNames: ['1'],

                list: [
                    {
                        id: 'one', content: '软易软件教育有何特点 ?有哪些优势 ?',
                        contents: [
                            {str: '答:概括地讲，软易软件教育是一一种在先进创新思想指导下的“学历教育” 和“社会就业型能力教育” 相结合的一种全新格式的教育。具体地讲，软易软件教育有如下九个方面的特点和优势:'},

                            {str: '( 1 )计算机教育思想、理念、方法的开创性和先进性，软易软件对教育的理解和施教的方法有根本性的变革。 “软易软件六观”、 “软易软件九比”、等一系列思想、理念和方法的提出在很大程度上打破了传统教育 模式下的常规。在计算机和电脑艺术教育领域，软易软件教育关于计算机系统之文化、计算机与电脑艺术 专业课程设置之原理、计算机软件开发之定义、“老师是瞎子 ，艺术是大象”之理念、“太极键法” 之发明等等，都为软易软件教育所独创。'},

                            {str: '( 2 )师资力量的强大性。'},

                            {str: '( 3 )课程设置的系统性、专业性、前贍性和实用性。'},

                            {str: '( 4 )教育剂量(学时总量)的“杀伤性”。'},

                            {str: '( 5 )教学管理的严谨性。'},

                            {str: '( 6 )求学环境的上进性。'},

                            {str: '( 7 )办学条件的优异性。深圳是东北高等教育最发达的城市之一 ，深圳的IT教育在全国也是领先的， 软易软件的办学条件在深圳的同类学校教学质量中有过之而无不及。'},

                            {str: '( 8 )就业机制的保障性。'},

                            {str: '( 9 )求学与人生命运改变的效率性。'}]
                    },
                    {
                        id: 'two', content: '请问选择个好学校的标准是什么?', contents: [
                            {str: '答:教育是一项复杂的系统工程，一一个好学校其内涵是多层次，多方面的，优秀的教育质量是多种要素有 机作用的必然结果，参阅“软易软件六观” “软易软件九比” ，我们觉得考察一 个好学校应当做到如下十看:'},

                            {str: '一看 : 学校是否有先进的教育思想、理念和方法;'},

                            {str: '二看 : 学校的师资力量是否强大，学校如何从机制上保证师资力量的强大，具体的量化指标如何;'},

                            {str: '三看 : 课程设置是否系统、专业、前瞻、实用;对比大学学历教育和国内同类职业教育处于什么样的水平;'},

                            {str: '四看 : 所选专业课程的教育剂量(学时总量)是否真正具有改变命运的“杀伤性”;'},

                            {str: '五看 : 学校的教育管理团队是否具有深厚的专业素养和行之有效的机制保证教育过程的严谨性;'},

                            {str: '六看 : 学校是否具有积极、进步、健康、 向上的校园文化和良好的求知氛围;'},

                            {str: '七看 : 学校是否有封闭的校园和完善的办学设施;'},

                            {str: '八看 : 学校是否有高层次、充分就业的保障机制;'},

                            {str: '九看 : 学生对学校教育的感受和评价;'},

                            {str: '十看 : 求学与人生命运改变的效率性。'}]
                    },


                    {
                        id: 'three', content: '影响教育质量的因素有那些，软易软件学校如何保证教育的质量?', contents: [{
                            str:

                                '影响教育质量的因素是多方面的，归纳地讲主要有教育理念， ' +
                                '师资力量、 教学方法、专业与课程设置、 学时总量、教学管理 、硬件设施、' +
                                '校园文化和学习氛围、来学者的文化基础和人文品质等十个方面。' +
                                '经 过十余年艰苦中绝的努力和发展，软易软件学校在这些方面都取得了长足的进步。' +
                                '我们深信 : 软易软件 学校先进的教育理念、' +
                                '雄厚的师资力量、科学的教育方法、专业系统的课程设置、' +
                                ' 强大的教学总量、严 谨的教学管理、完善的硬件设施' +
                                '、良好的学习氛围和蓬勃向上的校园文化，' +
                                '加上您的勤奋和努力是我们 软易软件教育最好的质量保证。'
                        }]
                    },

                    {
                        id: 'four',
                        content: '软易软件学子充分就业的保障是什么?软易软件学子有哪些就业优势?可以从事哪些工作?',
                        contents: [{str: '答:学生按照软易软件的教育思想、理念和方法，下功夫、良好地完成学业后,软易软件学子无论在理论 修养还是实践能力上 ，都具备了相当的水平，在IT行业中自信择业是一件水到渠成的事情，可选择的方 向十分广阔。 计算机专业的学生可从事:网站建设、网站维护、电子商务网站开发、Web应用开发、SQL数据库软件开发、 Oracle数据库软件开发、 数据库管理与维护、 J2EE平台软件开发、 .Net平台软件开发、 Windows应用软 件开发、Linux软件开发、移动终端软件开发、移动终端游戏开发、 软件项目管理、企业网络建设、企业网 络管理、Windows服务器管理与维护、Linux服务器管理与维护、工业控制系统开发， 电路板设计等领域的 工作。强者源于实力，专业就是力量”， 本着自强不息的精神，在软易软件学校优异的学习环境中拼搏、进 取，全面提高自身素养，是软易软件学子应对一切外在环境高层次充分就业的最好保障。'}]
                    },
                    {
                        id: 'five',
                        content: ' 除了学费、住宿费之外，学生在学习期间还需要其它什么费用?',
                        contents: [{str: '答: 软易软件学校，严谨规范。除了学费和住宿费(含每人每月标准为水3吨、电30度的水电费)， 学生在学习期间认证及学历考试费，和日常生活费有学生自理，在校期间学校承包食堂餐费7-8元 每餐，住宿200每月，学校补贴部分。根据家庭贫困想从事IT行业入学软易可以适当降低学费， 在校期间表现良好学习刻苦，前三名可以享受3000 - 5000元奖学金。'}]
                    }
                ],
                rec_img: [
                    {
                        id: '1',
                        name: '高中学历',
                        img: 'img/recruit/title5.jpg',
                    },
                    {
                        id: '2',
                        name: '中专学历',
                        img: 'img/recruit/1v1.jpg',
                    },
                    {
                        id: '3',
                        name: '大专、本科学历',
                        img: 'img/recruit/app.jpg',
                    },

                ],
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            },
            setParent_img() {
                this.$emit('func', this.home_img);
            }
        },

        beforeMount() {
            this.setParent_img();
        }
    }
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
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
</style>
