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
      <div class="login" v-if="!$store.state.user.userInfo.token">
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
      <!-- 登录成功 -->
      <div v-else>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="`${$axios.defaults.baseURL}${$store.state.user.userInfo.user.defaultAvatar}`" />
            <span>{{$store.state.user.userInfo.user.nickname}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="handLogin">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    handLogin(){
      // 调用vueX我们存的清除方法
      this.$store.commit('user/delUserInfo')
      // 提示用户
      this.$message.success('退出成功')
    }
  }
};
</script>
<style lang="less" scoped>
.app {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 2px #cccccc;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
.navs {
  flex: 1;
  margin-left: 20px;
  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
}
.logo {
  padding-top: 9px;
  img {
    width: 156px;
    height: 42px;
    display: block;
  }
}
.el-dropdown-link{
  img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    vertical-align: middle;
    box-sizing: border-box;
    border: 2px solid #fff;
    &:hover{
      border: 2px solid #409eff;
    }
  }
}
</style>