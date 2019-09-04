<template>
  <div class>
    <!-- 注册表单结构 -->
    <el-form :model="registerList" :rules="rules" :ref="'form'" class="form">
      <!-- 用户名/手机 -->
      <el-form-item class="form-item" prop="username">
        <el-input v-model="registerList.username" placeholder="用户名或手机"></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item class="form-item" prop="captcha">
        <el-input v-model="registerList.captcha" placeholder="验证码" style="width:233px;"></el-input>
        <!-- 发送验证码按钮 -->
        <el-button type="info" plain @click="postCaptcha">发送验证码</el-button>
      </el-form-item>
      <!-- 你的名字 -->
      <el-form-item class="form-item" prop="nickname">
        <el-input v-model="registerList.nickname" placeholder="你的名字"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="form-item" prop="password">
        <el-input v-model="registerList.password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- 再次输入密码 -->
      <el-form-item class="form-item" prop="chekpassword">
        <el-input v-model="registerList.chekpassword" placeholder="确认密码"></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button class="submit" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerList: [
        {
          username: "",
          nickname: "",
          captcha: "",
          password: "",
          chekpassword: ""
        }
      ],
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        chekpassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" }
        ]
      }
    }
  },
  methods:{
      postCaptcha(){
          if(this.registerList.captcha === '0'){
              this.$message.error('验证码不能为空！')
          }
      }
  }
};
</script>

<style lang="less" scoped>
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.submit {
  width: 100%;
  margin-top: 10px;
}
</style>