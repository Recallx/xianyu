<template>
  <div class="container">
    <!-- 主要内容 -->
    <el-row type="flex" align="middle" justify="center" class="main">
      <!-- 表单头部 -->
      <div class="form-wrapper">
        <el-row type="flex" justify="center" class="tabs">
          <span v-for="(item,index) in ['登录','注册']" :key="index" @click="handlClick(index)"
          :class="{active:curen === index}"
          >{{item}}</span>
        </el-row>



        <!-- 登录功能组件 -->
        <LoginFrom v-if="curen == 0"></LoginFrom>
        <!-- 注册功能组件 -->
        <Register v-if="curen == 1"></Register>
      </div>
    </el-row>
  </div>
</template>
<script>
import LoginFrom from "../../components/user/loginFrom";
import Register from '../../components/user/register'
export default {
  data() {
    return {
      // 登录或者注册0,1
      curen: 0
    };
  },
  components: {
    // 注册
    LoginFrom,
    Register
  },
  methods: {
    handlClick(index) {
      this.curen = index;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  min-width: 1000px;

  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .form-wrapper {
      width: 400px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .tabs {
        span {
          display: block;
          width: 50%;
          height: 50px;
          box-sizing: border-box;
          border-top: 2px #eee solid;
          background: #eee;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          color: #666;
          &.active {
            color: orange;
            border-top-color: orange;
            background: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>