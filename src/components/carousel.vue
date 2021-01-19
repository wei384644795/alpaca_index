<template>
    <div name="carousel">

        <el-carousel :interval="4000" type="card"   v-if="home_img">
            <el-carousel-item v-for="(item,i) in home_img" :key="i" >
                <img :src="item" alt="" class="img-fluid h-100 w-100"   >
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:['home_img'],
    }
</script>
<style scoped >
    .el-carousel__item h3 {
        color: #475669;

        opacity: 0.75;
        /*line-height: 200px;*/
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
