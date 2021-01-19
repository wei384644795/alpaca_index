<template>
    <div name="curriculum">

        <div id="good" class="container-fluid">
            <div class="container-fluid">
                <div class="card bg-light text-black" >
                    <div class="card-header ">
                        <h3 >
                            <b>了解一下他们 入门更轻松</b>
                        </h3>
                        <p >it培训知识 it面试经验  助力成长</p>
                    </div>

                    <div class="card-body ">
                        <el-collapse accordionv >
                            <el-collapse-item v-for="(item,i) in context" :key="i">
                                <template slot="title">
                                    <b>{{item.title}}</b>
                                    <i class="header-icon el-icon-info"></i>
                                </template>
                                <div class="mm-font2 text-left">
                                    {{item.con}}
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>



                <div class="card  text-white" v-for="(item,i) in cur_list" :key="i" :class="cur_col[i%cur_col.length]" style="padding: 10px">
                    <div class="card-body ">
                        <b>{{item.name}}</b>
                    </div>
                    <table class="table table-striped table-hover table-bordered  table-dark" >
                        <thead class="thead-light">
                        <tr>
                            <th v-for="(titem,j) in thead " :key="j">{{titem}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(tr_item,x) in item.data" :key="x">
                            <td>
                                {{tr_item.td1}}</td>
                            <td>
                                {{tr_item.td2}}</td>
                        </tr>

                        </tbody>
                    </table>

                </div>


            </div>


        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h5 >
                    <b>了解一下他们 入门更轻松</b>
                </h5>
                <p >it培训知识 it面试经验  助力成长</p>

            </div>
            <el-collapse v-model="activeNames"  >
                <el-collapse-item v-for="(item,i) in context" :key="i" >
                    <template slot="title">
                        {{item.title}}<i class="header-icon el-icon-info"></i>
                    </template>
                    <div class="text-left">
                        {{item.con}}
                    </div>
                </el-collapse-item>


            </el-collapse>
        </el-card>
    </div>
</template>

<script>
    export default {

        data() {  // 定义数据
            return {
                context: [
                    {
                        title: "什么是软件开发",
                        con: "是人们为了告诉电脑要做什么事而编写的，电脑能够理解的一串指令，有时也叫代码，程序。 " +
                            "常见的中间件包括数据库和万维网服务器等， 它们在应用软件和平台之间建立一种桥梁。 " +
                            "应用软件种类最多，博爱扩办公软件，电子商务软件，通信软件，行业软件，游戏软件等等，" +
                            " 而软件开发是指一个软件项目的开发，如需求分析，可研分析，初步设计 形成文档，建立初步模型，" +
                            "编写详细代码，测试修改，发布等。",
                    },
                    {
                        title: "什么是Java",
                        con: "Java是种计算机软件开发语言。 Java语言具有功能强大和简单易用两个特征。" +
                            "Java语言作为静态面向对象编程语言的代表， 极好地实现了面向对象理论，" +
                            "允许程序员以优雅的思维方式进行复杂的编程。 Java具有简单性，面向对象，" +
                            "分布式，健壮性， 安全性，平台独立与可移植性，多线程，动态性等特点。 " +
                            "Java可以编写桌面应用程序，Web应用程序，分布式系统和嵌入式系统应用程序等",
                    },
                    {
                        title: "Java的优势",
                        con: "java是全球最流行的编程语言，不管是现在还是未来都一直有它独特的优势，由于java的流行，java工程师找工作也很容易， " +
                            "一个java工程师往往可以在短时间内找到一份薪资相当不错的工作。而且从未来的发展看，java工程师的发展水平也是不容小觑的。 " +
                            "因为行业发展带给社会的只有更大的人才缺口，所以学java不用有什么后顾之忧",
                    },
                    {
                        title: "软易精神\n",
                        con: "软易以“做中国最专业的计算机教育”为己任，在秉承理想教育“系统，专业，前瞻，实用” 经典品质的同时，" +
                            "针对学科的技术发展和市场的就业需求， 推出了专业定位更准确， 课程组合更优化的专业，" +
                            "将为有志于IT领域发展和人生事业进步的社会各界人士提供更切实际的多样化教育选择， 其中主要分为软件开发和软件测试专业",
                    },
                ],
                data_img: ["img/curriculum/css.jpg", "img/curriculum/html.jpg", "img/curriculum/js.jpg", "img/curriculum/title20.jpg"],
                cur_col: ["bg-info", "bg-secondary", "bg-warning"],
                thead: ["课程科目", "课程描述"],
                cur_list: [
                    {
                        name: '初级阶段',

                        data: [
                            {
                                td1: '计算机基础',
                                td2: '包含硬件识别，硬件组，操作系统安装，操作系统使用，DOS命令讲解，简单网络命令讲解'
                            },
                            {td1: 'HTML核心技术', td2: 'HTML各种标签灵活使用，能独立完成简单网站样式。'},
                            {td1: 'JAVA基础', td2: '面向对象,数组,io,集合,线程,异常'},
                        ]

                    },
                    {
                        name: '中级阶段',

                        data: [
                            {td1: 'Jira Bug管理工具', td2: '最强大的bug管理工具'},
                            {td1: 'Eclipse高级用法', td2: '讲解Eclipse的最高级用法'},
                            {td1: 'JSP/Servlet核心技术', td2: '最基本的Java Web开发'},
                            {td1: 'Ajax(DWR)', td2: '一个java中最流行的AJAX框架'},
                            {td1: '版本控制', td2: '讲解常用版本控制空间SVN、GIT等等'},
                            {td1: '代码规范', td2: 'Java开发中最基本最重要的规范'},
                            {td1: 'Linux操作系统使用进阶', td2: '高级Linux知识点'},
                            {td1: 'Ant脚本工具', td2: 'java中最常用的脚本工具'},
                            {td1: 'XMl', td2: '结构化文本格式的讲解及xml解析，以及常有SAX，DOM的调用'},
                            {td1: '面向对象的原则', td2: '最基本的面向对象的原则和注意事项'},
                            {td1: 'log4j,logback', td2: 'Java中常用的日志记录工具'},
                            {td1: 'Junit', td2: '最经典的单元测试工具'},
                            {td1: 'JavaScript', td2: 'Js面向对象编程'},
                            {td1: 'Jquery', td2: '目前应用最广的JS框架'},
                            {td1: 'AngularJS', td2: '一款优秀的前段JS框架'},
                        ]
                    },
                    {
                        name: '高级阶段',

                        data: [

                            {td1: 'Struts2', td2: 'mvc框架'},
                            {td1: 'Spring', td2: '依赖注入框架'},
                            {td1: 'Springmvc', td2: 'MVC框架'},
                            {td1: '重构(ide)', td2: '常用的重构方式'},
                            {td1: 'Mysql,Oracle', td2: '企业级数据库讲解'},
                            {td1: '经典设计模式', td2: '常用设计模式,包括MVC'},
                            {td1: '数据库设计规范', td2: '数据库设计的注意事项'},
                            {td1: 'Spring安全机制', td2: '一个最流行的安全框架'},
                            {td1: '调试框架源代码', td2: '介绍怎么样调试经典程序的源代码，以及源代码分析'},
                            {td1: 'Hibernat与ORM', td2: 'JPA实现'},
                            {td1: 'Mybatis', td2: '持久层框架'},
                            {td1: 'Maven', td2: '软件项目管理工具'},
                            {td1: 'Linux(centos)', td2: '熟悉linux的基本知识、环境搭建'},
                            {td1: 'Webservice与分布式技术', td2: '企业服务交流接口应用'},
                            {td1: 'Redis', td2: '缓存数据库'},
                            {td1: 'Nginx', td2: '负载均衡,反向代理'},
                            {td1: '极光推送', td2: 'Websocke'},
                            {td1: 'MQ', td2: '消息队列'},
                            {td1: 'Dubbo，zookeeper', td2: 'SOA(面向服务的体系结构)'},
                        ]
                    },
                    {
                        name: '项目阶段',
                        data: [

                            {td1: '大型电商项目', td2: '网上购物系统'},
                            {td1: '快递智能柜', td2: '软硬件结合，安卓与JAVA交互'},
                            {td1: 'ERP系统', td2: '企业资源计划，制造业系统和资源计划软件'},
                            {td1: '进销存系统', td2: '进销存系统是对企业生产经营中进货、出货、批发销售、付款等进行全程跟踪管理'},
                            {td1: '跨境物流', td2: '国际物流项目'},

                        ]
                    }
                ],
                curriculum:"",

            }
        },
        methods: {
            setParent_img() {
                this.$emit('func', this.data_img);
            },
            setCurriculum(){
                this.axios("http://localhost:8080/my_ssm/curriculum/findAll").then(function(data){
                    alert("lai");
                    console.log(data);
                });
            }
        },
        beforeMount() {
            this.setParent_img();
            this.setCurriculum();
        }
    }
</script>
<style>

    .mm-img {
        width: 1400px;
        height: 350px;
    }


</style>
