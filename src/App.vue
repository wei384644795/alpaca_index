<template>
    <div id="app">

        <div class="container-fluid">

            <div class="row">

                <div class="col-md-2 col-xs-2 col-lg-2 col-sm-2 ">
                    <a href="/">
                        <img src="./assets/ryit-logo.jpg" alt="" class=" ani-alpaca-img " height="80px">
                    </a>
                </div>
                <div class="col-md-7 col-xs-7 col-lg-7 col-sm-7">
                    <br>
                    <p>
                        如果错过互联网, 与你擦肩而过的不仅仅是机会, 而是整整一个时代
                    </p>


                </div>
                <div class="col-md-3 col-xs-3 col-lg-3 col-sm-3">
                    <p>咨询中心-ryit.education</p>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-2 ">
                            <h3>
                                <i class="el-icon-phone-outline"></i>
                            </h3>

                        </div>
                        <div class="col-md-6 col-md-auto html-editor-align-center">
                            18575676016
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="nav" class="container-fluid">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#01c6f1"
            >

                <el-menu-item index="1">
                    <i class="el-icon-s-home"></i><router-link to="/">首页</router-link>

                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-s-comment"></i>
                    <router-link to="/schoolBriefIntroduction">学校介绍</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-picture-outline"></i>
                    <router-link to="/features">校园风貌</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-s-custom"></i>
                    <router-link to="/teacherResourcePower">师资力量</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-s-management"></i>
                    <router-link to="/curriculum">教学课程</router-link>
                </el-menu-item>


                    <el-menu-item index="10-1">
                        <i class="el-icon-picture-outline-round"></i>
                        <router-link to="/graduate">毕业明星</router-link>
                    </el-menu-item>
                    <el-menu-item index="10-2">
                        <i class="el-icon-s-opportunity"></i>
                        <router-link to="/recruit">招生对象</router-link>
                    </el-menu-item>
                    <el-menu-item index="10-3">
                        <i class="el-icon-phone"></i>
                        <router-link to="/contact">联系方式</router-link>
                    </el-menu-item>
                    <el-menu-item index="10-5">
                        <router-link to="/about"> 关于</router-link>
                    </el-menu-item>

            </el-menu>
        </div>

        <!--    <mybtn type="primary" @click="show">123</mybtn>-->
        <!--    <mt-button type="primary" @click="show">default</mt-button>-->
        <div class="container-fluid">
            <router-view name="carousel" :home_img="home_img"></router-view>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <!--   main -->
                <router-view @func="setHome_img"/>
            </div>

        </div>



        <!--    底部 -->
        <div class="container-fluid footer ">
            <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan ">
                    <img src="../public/img/title16.jpg" class="img-responsive mm-png">
                </div>

                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan">
                    <img src="../public/img/title17.jpg" class="img-responsive mm-png">
                </div>


                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan ">
                    <img src="../public/img/title12.jpg" class="img-responsive mm-png">
                </div>

                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan ">
                    <img src="../public/img/spring.jpg" class="img-responsive mm-png">
                </div>

                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan ">
                    <img src="../public/img/title13.jpg" class="img-responsive mm-png">
                </div>

                <div class="col-md-2 col-sm-2 col-xs-2 col-lg-2 mm-kuan ">
                    <img src="../public/img/title11.jpg" class="img-responsive mm-png">
                </div>

            </div>


            <div class="text-center mm-font4 ">
                <p>咨询QQ：377423702 邮编：518109</p>
            </div>

            <div class="text-center mm-font4">
                <p>网址：www.ryitedu.com</p>
            </div>
        </div>

        <div class="mm-font4 bottom" style="background-color: #481414">
            <p class="text-center">
                <span>Copyrght © ryit.com  版权所有 软易IT </span>
            </p>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                home_img: ['img/home/guang_pan.png', 'img/home/timg.jpg', 'img/home/TIM.jpg'],
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            setHome_img(data) {
                this.home_img = data;
            }

        },

    }
</script>

<style>
    @import "~animate.css";

    /*
      ani 开头
      动画
    */
    .new {
        animation: jackInTheBox;
        animation-duration: 0.5s;
    }


    /*动画 左右摇晃*/
    .ani-alpaca-img {
        animation: jackInTheBox;
        animation-duration: 2s;
    }

    /*动画 上面掉下来*/
    .ani-alpaca-font {
        animation: fadeInDown;
        animation-duration: 2s;
    }

    /*从右边过来*/
    .ani-alpaca-div {
        animation: fadeInRight;
        animation-duration: 1s;
    }

    /*变大变小*/
    .ani-alpaca-heartBeat {
        animation: heartBeat;
        animation-duration: 2s;

    }

    /*从上到下*/
    .ani-alpaca-backInDown {
        animation: backInDown;
        animation-duration: 3s;

    }



    .navbar {
        background-color: #01c6f1;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: black;
    }

    #nav a.router-link-exact-active {
        color: #ff0000;
    }


    .mm-kuan {
        padding-top: 30px;
    }

    div[class^="col-lg"] {
        border: 1px;
    }

    .mm-png {
        height: 120px;
        width: 200px;
    }


    .mm-font3 {
        color: white;
        font-size: 20px;
        font-family: 楷体;
    }


    .mm-font4 {
        color: #c1b0bd;
        font-size: 12px;
        font-family: 楷体;
    }

    .footer {
        width: 100%;
        overflow: hidden;
        background: black;
        text-align: center;
    }

    .footer * {
        padding: 3px;
        margin: 0;
    }

    * {
        font-family: 华文中宋;
        padding: 0;
        margin: 0;
    }

    /*

      div{
        border:1px solid red;
      }
      span{
        border:1px solid green;
      }
    */


</style>