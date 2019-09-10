<template>
  <div class="aside">
    <div class="statement">
      <el-row type="flex" justify="space-between" class="statement-list">
        <el-col :span="8">
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF"></i>
          <span>航协认证</span>
        </el-col>
        <el-col :span="8">
          <i class="iconfont iconbaozheng" style="color:green"></i>
          <span>出行保证</span>
        </el-col>
        <el-col :span="8">
          <i class="iconfont icondianhua" style="color:#409EFF"></i>
          <span>7x24</span>
        </el-col>
      </el-row>
      <p class="service-tel">免费客服电话： 4006345678转2</p>
    </div>
    <div class="history">
      <h5>历史查询</h5>
      <nuxt-link :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`"
      v-for="(item,index) in airsolg" :key="index">
        <el-row type="flex" justify="space-between" class="history-item" align="middle" >
          <div class="air-info">
            <div class="to-from">{{item.departCity}}-{{item.destCity}}</div>
            <p>{{item.deparDate}}</p>
          </div>
          <span>选择</span>
        </el-row>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 定义一个变量
      airsolg:[]
    }
  },
  mounted(){
    // 拿到本地存储的表单数据
    const arr = JSON.parse(localStorage.getItem('airs')) || [];
    // 将拿到的数组存到定义的数组
    this.airsolg = arr
  }
};
</script>

<style scoped lang="less">
.statement {
  border: 1px #ccc solid;
  .statement-list {
    padding: 10px 0;
    > div {
      text-align: center;
      i {
        display: block;
        font-size: 40px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .service-tel {
    font-size: 14px;
    background-color: #f6f6f6;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
}
.history {
  border: 1px #ccc solid;
  padding: 10px;
  margin-top: 10px;
  > h5 {
      font-size: 16px;
      font-weight: normal;
      padding-bottom: 10px;
    border-bottom: 1px #ccc solid;
  }
  .history-item{
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px #eee solid;
    &:last-child{
      border: none;
    }
    .to-from{
      margin-bottom: 5px;
    }
    p{
      font-size: 12px;
      color: #666;
    }
    span{
      color: #fff;
      display: block;
      padding: 2px 10px;
      background: orange;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>