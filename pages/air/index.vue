<template>
  <div class="air">
    <!-- 国内机票 -->
    <h2 class="air-title">
      <span class="iconfont iconfeiji"></span>
      <i>国内机票</i>
    </h2>
    <!-- 主体部分 -->
    <el-row type="flex" justify="space-between">
      <!-- 搜索部分 -->
      <airTicket></airTicket>
      <!-- 广告部分 -->
      <div class="sale-banner">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
      </div>
    </el-row>
    <!-- 承诺部分 -->
    <el-row type="flex" class="statement">
      <el-col :span="8">
        <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF"></i>
        <span>100%航协认证</span>
      </el-col>
      <el-col :span="8">
        <i class="iconfont iconbaozheng" style="color:green"></i>
        <span>出行保证</span>
      </el-col>
      <el-col :span="8">
        <i class="iconfont icondianhua" style="color:#409EFF"></i>
        <span>7x24小时服务</span>
      </el-col>
    </el-row>
    <!-- 特价机票 -->
    <h2 class="air-sale-title">
      <span class="iconfont iconfeiji"></span>
      <i>特价机票</i>
    </h2>
    <!-- 特价机票展示 -->
    <div class="air-sale">
      <el-row class="air-sale-pic" type="flex" justify="space-between">
        <el-col v-for="(item , index) in sale" :key="index">
          <nuxt-link :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`">
            <!-- 图片和文字 -->
            <img :src="item.cover" alt="">
            <el-row class="layer-bar" type="flex" justify="space-between">
              <span>{{item.departCity}}-{{item.destCity}}</span>
              <span>￥699</span>
            </el-row>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import airTicket from "../../components/air/air-ticket";
export default {
  data() {
    return {
      sale:[]
    };
  },
  // 钩子函数
  mounted() {
    this.$axios({
      url: "/airs/sale"
    }).then(res => {
      // console.log(res);

      // 将拿到的数据放到数组里面
      this.sale = res.data.data
    });
  },
  // 注册使用
  components: {
    airTicket
  }
};
</script>
<style lang="less" scoped>
.air {
  width: 1000px;
  margin: 0 auto;
  .air-sale {
    border: 1px #ddd solid;
    padding: 20px;
    margin-bottom: 50px;

    .air-sale-pic {
      > div {
        width: 225px;
        height: 140px;
        position: relative;
        overflow: hidden;

        img {
          width: 100%;
        }

        .layer-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          height: 30px;
          line-height: 30px;
          width: 100%;
          box-sizing: border-box;
          padding: 0 15px;
          font-size: 14px;

          span:last-child {
            font-size: 18px;
          }
        }
      }
    }
  }

  .air-sale-group {
    margin-top: 20px;
    padding-top: 8px;
    border-right: 1px #eee solid;

    &:last-child {
      border-right: none;
    }

    .air-sale-row {
      font-size: 12px;
      color: #666;
      margin-bottom: 8px;

      .air-sale-price {
        color: orange;
        font-size: 20px;
      }
    }
  }

  .container {
    width: 1000px;
    margin: 0 auto;
  }

  .air-title {
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: orange;

    span {
      font-size: 20px;
    }
  }

  .statement {
    margin: 15px 0;
    border: 1px #ddd solid;
    background: #f5f5f5;
    height: 58px;
    padding: 10px 0;
    box-sizing: border-box;

    > div {
      text-align: center;
      line-height: 38px;
      border-right: 1px #ddd solid;

      &:last-child {
        border-right: none;
      }

      * {
        vertical-align: middle;
      }

      i {
        font-size: 30px;
      }
    }
  }

  .air-sale-title {
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: #409eff;

    span {
      font-size: 20px;
    }
  }
}
</style>