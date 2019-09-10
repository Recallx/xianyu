<template>
  <div class="flight-item">
    <div @click="hanldClick">
      <el-row type="flex" align="middle" class="flight-info">
        <el-col :span="6">
          <span>{{data.airline_name}}</span>
          {{data.flight_no}}
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between" class="flight-info-center">
            <el-col :span="8" class="flight-airport">
              <strong>{{data.dep_time}}</strong>
              <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
            </el-col>
            <el-col :span="8" class="flight-time">
              <span>{{rankTime}}</span>
            </el-col>
            <el-col :span="8" class="flight-airport">
              <strong>{{data.arr_time}}</strong>
              <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="flight-info-right">
          ￥
          <span class="sell-price">810</span>起
        </el-col>
      </el-row>
    </div>
    
    <div class="flight-recommend" v-show="isShow">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4">
          <span>低价推荐</span>
        </el-col>
        <el-col :span="20">
          <el-row
            type="flex"
            justify="space-between"
            class="flight-sell"
            v-for="(item,index) in data.seat_infos"
            :key="index"
          >
            <el-col :span="16" class="flight-sell-left">
              <span>{{item.name}}</span>
              | {{item.supplierName}}
            </el-col>
            <el-col :span="5" class="price">￥{{item.org_settle_price}}</el-col>
            <el-col :span="3" class="choose-button">
              <el-button type="warning" size="mini" @click="handlClick(item.seat_xid)">选定</el-button>
              <p>剩余:83</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // data表示组件可以接受的属性
    data: {
      // type用于属性的类型
      type: Object,
      // 如果调用组件不传值，采用default默认值
      default: {}
    }
  },
  // 计算属性计算到达之间的时间
  computed: {
    rankTime() {
      // 将时间分割出来
      // 出发时间
      const dep = this.data.dep_time.split(":");
      // 到达时间
      const arr = this.data.arr_time.split(":");

      // 判断到达的小时是否到达了第二天，如果是要加上24
      if (arr[0] < dep[0]) {
        arr[0] += 24;
      }

      // 将时间转换为分钟
      const arrVal = arr[0] * 60 + +arr[1];
      // 出发时间的分钟
      const depVal = dep[0] * 60 + +dep[1];

      // 相隔的分钟数
      const dis = arrVal - depVal;
      // 向下取整,拿到小时
      const disss = Math.floor(dis / 60);
      // 拿到分钟
      const min = dis % 60;

      return `${disss}时${min}分`;
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    // 选定按钮方法
    handlClick(seat_xid){
      this.$router.push({
        path:'order',
        query: {
          id:this.data.id,
          seat_xid
        }
      })
    },
    hanldClick() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="less" scoped>
.flight-item {
  border: 1px #dddddd solid;
  margin-bottom: 10px;
  .flight-info {
    padding: 15px;
    cursor: pointer;
    > div {
      &:first-child,
      &:last-child {
        text-align: center;
      }
    }
    .flight-info-center {
      padding: 0 30px;
      text-align: center;
      .flight-airport {
        strong {
          display: block;
          font-size: 24px;
          font-weight: normal;
        }
        span {
          font-size: 12px;
          color: #999;
        }
      }
      .flight-time {
        span {
          display: inline-block;
          padding: 10px 0;
          border-bottom: 1px #eee solid;
          color: #999;
        }
      }
    }
    .flight-info-right {
      .sell-price {
        font-size: 24px;
        color: orange;
        margin: 0 2px;
      }
    }
  }
  .flight-recommend {
    background: #f6f6f6;
    border-top: 1px #eee solid;
    padding: 0 20px;

    .flight-sell {
      border-bottom: 1px #eee solid;
      padding: 10px 0;

      &:last-child {
        border-bottom: none;
      }

      .flight-sell-left {
        font-size: 12px;
        line-height: 38px;
        span {
          color: green;
        }
      }

      .price {
        font-size: 20px;
        color: orange;
      }

      .choose-button {
        text-align: center;
        color: #666;
        button {
          display: block;
          width: 100%;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>