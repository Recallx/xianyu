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
      <nuxt-link to="#">
        <el-row type="flex" justify="space-between" class="history-item" align="middle">
          <div class="air-info">
            <div>广州-上海</div>
            <p>2019-09-10</p>
          </div>
          <span>选择</span>
        </el-row>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>