<template>
    <div name="features" class="container-fluid">




        <div v-for="(item,i) in my_list" :key="i" >
            <div class='card'  >
                <div class="card-header" :class="item.bg">
                    <b>
                        {{item.name}}
                    </b>
                </div>
                <div class="new row  h-25">

                    <div v-for="(path,i) in item.paths" class="col-md-3">
                        <el-image

                                :src="path"
                                :preview-src-list="item.paths">
                        </el-image>
                    </div>
                </div>

            </div>
        </div>

        <img style="width: 100%" src="../../public/img/feature/pic6.png" class="img-fluid ani-alpaca-backInDown"/>



    </div>
</template>

<script>

    export default {


        data() {  // 定义数据


            return {
                data_img:[
                    "./img/feature/quanJing.jpg",
                    "./img/feature/juTi.jpg",
                    "./img/feature/yiJiao.jpg",
                    "./img/feature/zhong_20201229110551.jpg",
                    "./img/feature/suShe_20201229110659.jpg"

                   ],

                my_list: [
                    {
                        name: "校园风貌---教室",
                        bg:'bg-info',
                        form:'rounded-circle ',
                        my_style: {
                            my_color: '#4cae4c',
                        },
                        paths: [

                            './img/feature/class1_20201227155357.jpg',
                            './img/feature/class2_20201227155415.jpg',
                            './img/feature/class4_20201229154055.jpg' ,
                            './img/feature/class5_20201229154107.jpg' ,
                            './img/feature/class6_20201229154116.jpg',
                            './img/feature/office1_20201229154134.jpg',
                            './img/feature/office_20201229154233.jpg',
                            './img/feature/class7_20201229154124.jpg',
                        ]
                    },
                    {
                        name: "乐在软易",
                        bg:'bg-danger',
                        form:'img-fluid',
                        my_style: {
                            my_color: '#4cae4c',
                        },
                        paths: [
                            './img/feature/pic3.jpg',
                            './img/feature/IMG.jpg',
                            './img/feature/dongYou5_20201227155442.jpg',
                            './img/feature/port.jpg',
                            './img/feature/pic2.jpg',
                            './img/feature/xport.jpg',
                            './img/feature/dongYou_20201227155242.jpg',
                            './img/feature/dongYou4_20201227155426.jpg',

                        ]
                    },
                    {
                        name: "趣味时光",
                        bg:'bg-warning ',
                        form:'img-fluid',
                        my_style: {
                            my_color: '#4cae4c',
                        },
                        paths: [
                            './img/feature/birthday.jpg',
                            './img/feature/birthday1.jpg',
                            './img/feature/birthday3.jpg',
                            './img/feature/alpaca_cake.jpg',
                        ]
                    }
                ],


            }

        },
        methods:{
            setParent_img() {
                this.$emit('func',this.data_img);
            }
        },
        beforeMount(){
            this.setParent_img();
        }
    }
</script>
<style scope>
    .alpaca-img {
        width: 100%;
        height: 20em;
    }

</style>
