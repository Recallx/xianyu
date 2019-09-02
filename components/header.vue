<template>
  <div class="app">
    <el-row type="flex" class="main" justify="space-between">
      <!-- 图片部分 -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 导航部分 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录部分 -->
      <div class="login">
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.app {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 2px #cccccc;
}
.main{
  width: 1000px;
  margin: 0 auto;
}
.navs{
  flex: 1;
  margin-left: 20px;
  a{
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover{
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
}
.logo{
  padding-top: 9px;
  img{
    width: 156px;
    height: 42px;
    display: block;
  }
}
</style>