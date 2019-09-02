<template>
  <div class="app">
    <!-- 上面 -->
    <div class="top">
      <el-row type="flex" class="main" justify="space-between">
        <!-- 文件部分 -->
        <el-col :span="9">
          <h5>闲云旅游旅游网</h5>
          <p>上亿旅行者共同打造的"旅行神器"</p>
          <p><span>60,000</span> 多个全球旅游目的地</p>
          <p><span>600,000</span> 个细分目的地新玩法</p>
          <p><span>760,000,000</span> 次攻略下载</p>
          <p><span>38,000</span> 家旅游产品供应商</p>
        </el-col>
        <el-col :span="7">
          <h5>关于我们</h5>
          <p>隐私政策 商标声明</p>
          <p>服务协议 游记协议</p>
          <p>商城平台服务协议</p>
          <p>网络信息侵权通知指引</p>
          <p>闲云旅游旅游网服务监督员</p>
          <p>网站地图加入闲云旅游</p>
        </el-col>
        <el-col :span="5">
          <h5>旅行服务</h5>
          <p>旅游攻略 酒店预订</p>
          <p>旅游特价 国际租车</p>
          <p>旅游问答 旅游保险</p>
          <p>旅游指南 订火车票</p>
          <p>旅游资讯 APP下载</p>
        </el-col>
        <!-- 二维码部分 -->
        <div class="imgs">
          <el-col>
            <img src="http://157.122.54.189:9093/images/1556522965.png" alt />
            <p>关注我们</p>
          </el-col>
        </div>
      </el-row>
    </div>
    <!-- 下面 -->
    <div class="bott">
      <p>京ICP备08001421号 京公网安备110108007702 Copyright &copy; 2016-2019 博学谷 All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.app {
  line-height: 21px;
  color: #cccccc;
  height: 329px;
  background-color: #333333;
  .top {
    width: 1000px;
    margin: 0 auto;
  }
}
.main {
  flex: 1;
  padding: 0 20px;
  padding-top: 30px;
  h5 {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    span{
      color: #dea51a;
    }
  }
  .imgs {
    width: 250px;
    height: 162px;
    text-align: center;
    img {
      width: 140px;
      height: 140px;
    }
  }
}
.bott {
  width: 1000px;
  font-size: 12px;
  border-top: 1px solid #cccccc;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  padding: 50px 0;
}
</style>