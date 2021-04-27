<template>
    <div name="contact">


    <div class="panel-heading">
        <div class="card bg-secondary">
            <div class="card-header">
                <h4>
                    寄语：
                </h4>
            </div>
            <div class="card-body bg-light">

                人生如戏，只要今天还在延续，只要明天还有希望，我们就永远在起点上，永远在奔跑的路上。不要惧怕路长，
                不要抱怨路边没有风景，一个人的行程，总会有很多困难、诱惑、无奈和陷阱，任何时候都不要绝望，只要不停的跑，
                那些脚下的坎坷，原来都是垫高我们认识的基石，或许转机就在下一个转角。
            </div>
        </div>

    </div>

    <hr/>
    <div class="animated fadeInDownBig">
        <div id="msg" class="text-center"><h3><b v-cloak>{{message}}</b></h3></div>

        <div class="text-center"><h4><b>发布：软易IT   来源：软易IT</b></h4></div>
    </div>
    <hr/>

    <div class="animated fadeInDownBig">
        <div class="row">
            <div class="col-md-8">
                <div>

                        <h3>
                            <i class="el-icon-phone-outline"></i>
                            联系方式：
                        </h3>


                </div>
                <div v-for="item in list">
                    <div class="contact">
                        <b v-cloak>{{item.content}}</b>
                    </div>
                </div>
            </div>
            <div class="col-md-4">

                <div>

                    <el-image

                            src="img/contact/title7.jpg"
                            fit="scale-down"></el-image>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

    export default {
        data(){
            return  {  // 定义数据
                message:'用我们的双手实现梦想，从此走上人生巅峰,欢迎加入我们！',
                    list:[
                    {content:'王老师 18681488120 (微信同手机号)'},
                    {content:' 朱老师 18575676016 (微信同手机号)'},
                    {content:'咨询QQ: 377423702'},
                    {content:' 网址: 377423702'},
                    {content:'来信地址: 深圳坪山区坑梓街道莹展花园'},
                    {content:'邮编: 518122 '},
                ]
            };
        },
        methods:{
            setParent_img() {
                this.$emit('func','');

            }
        },
        beforeMount(){
            this.setParent_img();
        }
    }
</script>
<style scoped >

</style>
