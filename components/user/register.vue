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
        <el-input type="password" v-model="registerList.password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- 再次输入密码 -->
      <el-form-item class="form-item" prop="chekpassword">
        <el-input type="password" v-model="registerList.chekpassword" placeholder="确认密码"></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button class="submit" type="primary" @click="handlRegister">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // 验证两次密码是否正确
    const chekpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerList.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerList: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        chekpassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        chekpassword: [{ validator: chekpassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 注册按钮
    handlRegister() {
      // 判断表单是否有数据
      this.$refs.form.validate(valid => {
        if (valid) {
          // 将双向绑定数据里面的二次确认密码隐藏...rest会将个属性隐藏
          // 帮助我们提交数据没有两次密码
          // rest会指向剩下没有隐藏的数据，我们发送请求直接发送rest
          const {chekpassword, ...rest} = this.registerList;
          // console.log(rest)

          // 发送axios请求
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: rest
          })
            .then(res => {
              // console.log(res);
              // 帮助用户自动登录，用vuex里面写好的方法
              this.$store.state('user/setUserInfo',res.token)
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          // 提示用户输入数据
          this.$message.error("注册数据不能为空！");
        }
      });
    },
    // 手机验证码的方法
    postCaptcha() {
      if (!this.registerList.username) {
        this.$message.error("手机号不能为空！");
        return;
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        // 还要发送手机号码上去
        data: {
          tel: this.registerList.username
        }
      }).then(res => {
        // console.log(res)
        // 结构出res.data里面的code
        let { code } = res.data;
        // 提示用户验证码
        this.$message.success(`这个是验证码${code}`);
      });
    },
    // 提交注册信息方法
    handlLogin() {
      // console.log(this.registerList)
      // 判断表单不能为空
      this.$refs.form.validate(valid => {
        if (valid) {
          // 去除二次确认的
          // 发送axios请求
        } else {
          // 提示用不能为空
          this.$message.error("注册信息不能为空！");
        }
      });
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