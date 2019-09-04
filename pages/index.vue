<template>
  <div class="container">
    <!-- 轮播图 -->
    <el-carousel arrow="always">
      <el-carousel-item v-for="(item,index) in branne" :key="index">
        <div
          class="branne-image"
          :style="`
        background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
        background-size: contain contain;
        `"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <el-row type="flex" class="search-tab">
          <!-- 动态的class，当然的索引和循环的索引相等时候就加上active -->
          <!-- activ是css样式，如果cutren等于index就把这个css样式赋给点击的 -->
          <span v-for="(item,index) in options" :key="index"
          @click="handlClick(index)"
          :class="{active : cutren === index}"
          >
            <i>{{item.tital}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <!-- options数组，cutren是索引，当索引到某个属性，就给这个属性加上placeholder -->
          <input :placeholder="options[cutren].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cutren:0,
      input: "",
      branne: [],
      // tab栏数据
      options: [
        {
          tital: "攻略",
          placeholder: "搜索城市"
        },
        {
          tital: "酒店",
          placeholder: "请输入城市搜索酒店"
        },
        {
          tital: "机票",
          placeholder: ""
        }
      ]
    };
  },
  // 点击事件
  methods:{
    handlClick(index){
      // 赋值给我们定义好的数
      this.cutren = index
      // 判断index是否到了机场，就跳转
      if(index === 2){
        this.$router.push('/air')
      }
    }
  },
  // 钩子函数拿到图片
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      // console.log(res)
      let { data } = res.data;
      // 将图片添加到数组里面
      this.branne = data;
    });
  }
};
</script>

<style lang="less" scoped>
// 给组件中的结构添加样式要用到deep
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
  /deep/.el-carousel__container {
    height: 700px;
  }
  .branne-image {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px solid transparent;
    .search-bar {
      width: 552px;
      margin: 0 auto;
    }
    .search-tab {
      // active是点击之后效果
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #eee;
        }
      }

      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;

        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }
    .search-input {
      width: 550px;
      height: 46px;
      background: #ffffff;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-radius: 0 4px 4px 4px;
      border-top: none;
      box-sizing: unset;
      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }
      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>