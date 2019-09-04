<template>
  <!-- 登录表单结构 -->
  <el-form :model="loginList" :rules="rules" :ref="'form'" class="form">
    <!-- 用户名/手机 -->
    <el-form-item class="form-item" prop="username">
      <el-input v-model="loginList.username" placeholder="用户名/手机"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item class="form-item" prop="password">
      <el-input v-model="loginList.password" placeholder="密码"></el-input>
    </el-form-item>
    <!-- 忘记密码 -->
    <p class="form-text">
        <nuxt-link to="#">
            忘记密码
        </nuxt-link>
    </p>
    <!-- 登录按钮 -->
    <el-button class="submit" type="primary">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginList: [
        {
          username: "",
          password: ""
        }
      ],
      //   表单添加验证
      rules: {
        username: [
          { required: true, message: "请输入用户名或手机", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
.form{
    padding: 25px;
}
.form-item{
    margin-bottom: 20px;
}
.form-text{
    font-size: 12px;
    color: #409EFF;
    text-align: right;
    line-height: 1;
}
.submit{
    width: 100%;
    margin-top: 10px;
}
</style>