<template>
    <div class="container">
        <el-row type="flex" justify="space-between"> 

            <!-- 订单主件 -->
            <airorder/>
            <!-- 侧边栏 -->
            <div>

            </div>
        </el-row>
    </div>
</template>

<script>
import airorder from '../../components/air/airorder'
export default {
    data () {
        return {
            
        }
    },
    components:{
        airorder
    }
}
</script>

<style scoped lang="less">
.container{
    width: 1000px;
    margin: 20px auto;
}

</style>