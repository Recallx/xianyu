<template>
  <div class="search-form">
    <!-- 表头 -->
    <el-row type="flex" class="search-tab">
      <span
        @click="handltab(index)"
        v-for="(item,index) in tabs"
        :key="index"
        :class="{active: cusnd === index}"
      >
        <i :class="item.icon">{{item.name}}</i>
      </span>
    </el-row>
    <!-- 主体 -->
    <el-form class="search-form-content" ref="form" label-width="80px;">
      <el-form-item label="出发城市">
        <el-autocomplete
          v-model="form.departureCity"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入出发城市"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>
      <!-- 到达城市 -->
      <el-form-item label="到达城市">
        <el-autocomplete
          v-model="form.destCity"
          :fetch-suggestions="queryDestSearch"
          placeholder="请输入到达城市"
          @select="handleDestSelect"
        ></el-autocomplete>
      </el-form-item>
      <!-- 出发日期 -->
      <el-form-item label="出发时间">
        <el-date-picker
          v-model="form.deparDate"
          @change="hanldDate"
          type="date"
          placeholder="请选择日期"
          style="width:100%;"
        ></el-date-picker>
      </el-form-item>
      <!-- 搜索按钮 -->
      <el-form-item>
        <el-button @click="handlsearch" type="primary" class="boutton" icon="el-icon-search">搜索</el-button>
      </el-form-item>
      <!-- 换样式 -->
      <div class="reverse">
        <span @click="handljiao">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      cusnd: 0,
      // form提交城市数据
      form: {
        // 出发城市
        departureCity: "",
        departCode: "",
        destCity: "",
        destCode: "",
        deparDate: ""
      },
      // tab栏
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ]
    };
  },
  methods: {
    // 交换城市
    handljiao() {
      const { departureCity, departCode, destCity, destCode } = this.form;
      // 拿到城市和代码，交叉赋值
      this.form.departureCity = destCity;
      this.form.departCode = destCode;
      this.form.destCity = departureCity;
      this.form.destCode = departCode;
    },
    // tab栏切换
    handltab(index) {
      if (index === 1) {
        this.$alert("往返页面尚未开通！", "提示");
      }
    },
    // 出发城市获取搜索建议，并显示在框内
    // queryString是输入框的值，cb是回调函数，必须是一个数组。
    querySearchAsync(value, cb) {
      // 判断value是否有值
      if (!value) {
        // 传入空数组就不会出现
        cb([]);
        return;
      }
      // console.log(value)
      // 发送axios请求拿到相关城市
      this.$axios({
        url: "/airs/city",
        params: {
          name: value
        }
      }).then(res => {
        console.log(res);
        // 将data解构出来
        const { data } = res.data;
        // 因为参数带有市，我们要把市去掉
        const newData = [];
        // 循环数组
        data.forEach(e => {
          // replace（要替换的，替换成什么）
          e.value = e.name.replace("市", "");
          newData.push(e);
        });
        // 默认选中第一个城市
        this.form.departureCity = newData[0].value;
        this.form.departCode = newData[0].value;

        cb(newData);
      });
    },
    // 出发城市在下拉框中选中时触发
    handleSelect(item) {
      // console.log(item)
      // 将拿到的城市名和城市代码付给我们定义的表单
      this.form.departureCity = item.value;
      this.form.departCode = item.sort;
    },
    // 到达城市获取搜索建议，并显示在框内
    queryDestSearch(value, cb) {
      // 判断value是否有值
      if (!value) {
        cb([]);
        return;
      }
      // console.log(value)
      // 发送axios请求拿到相关城市
      this.$axios({
        url: "/airs/city",
        params: {
          name: value
        }
      }).then(res => {
        // console.log(res)
        // 将data解构出来
        const { data } = res.data;
        // 因为参数带有市，我们要把市去掉
        const newData = [];
        // 循环数组
        data.forEach(e => {
          // replace（要替换的，替换成什么）
          e.value = e.name.replace("市", "");
          newData.push(e);
        });
        // 默认选中第一个城市
        this.form.destCity = newData[0].value;
        this.form.destCode = newData[0].value;
        cb(newData);
      });
    },
    // 到达城市在下拉框中选中时触发
    handleDestSelect(item) {
      // 将拿到的城市名和城市代码付给我们定义的表单
      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },
    // 获取时间
    hanldDate(value) {
      // console.log(value)
      // 将格式转换
      this.form.deparDate = moment(value).format(`YYYY-MM-DD`);
    },
    // 搜索按钮
    handlsearch() {
      // console.log(this.form);
      // 判断不能为空
      if (!this.form.departureCity) {
        this.$alert("出发城市不能为空", "提示");
        return;
      }
      if (!this.form.destCity) {
        this.$alert("到达城市不能为空", "提示");
        return;
      }
      if (!this.form.deparDate) {
        this.$alert("出发日期不能为空", "提示");
        return;
      }
      // 跳转到机票页
      this.$router.push({
        path: "/air/flights",
        query: this.form
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
} 
</style>