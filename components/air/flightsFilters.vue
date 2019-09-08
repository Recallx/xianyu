<template>
  <div class="filters">
    <el-row type="flex" justify="space-between" class="filters-top" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            v-for="(item,index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option
            v-for="(item,index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option
            v-for="(item,index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            v-for="(item,index) in airSizes"
            :key="index"
            :label="item.name"
            :value="item.size"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件传过来的值
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      airport: "",
      flightTimes: "",
      company: "",
      airSize: "",
      //   机型大中小
      airSizes: [
        { name: "大", size: "L" },
        { name: "中", size: "M" },
        { name: "小", size: "S" }
      ]
    };
  },
  methods: {
    //   起飞选择触发
    handleAirport(value) {
      const arr = this.data.flights.filter(v => {
        return (v.org_airport_name = value);
      });
      this.$emit("setDataList", arr);
    },
    // 起飞时间选择触发
    handleFlightTimes(value) {
      // 将value切割,切割之后是数组
      const [form, to] = value.split(",");
      // 拿到的数据也要切割
      const arr = this.data.flights.filter(v => {
        console.log(v);
        const curren = v.dep_time.split(":")[0];
        // 将满足条件的数据返回,因为是字符串所以要转换。+
        return +curren >= +form && +curren < +to;
      });
      this.$emit("setDataList", arr);
    },
    // 航空公司选择触发
    handleCompany(value) {
      // 拿到数据过滤
      const arr = this.data.flights.filter(v => {
        return v.airline_name === value;
      });
      // 返回数据
      this.$emit("setDataList", arr);
    },
    // 选择机型触发
    handleAirSize(value) {
      const arr = this.data.flights.filter(v => {
        return v.plane_size === value;
      });
      //   返回数据到父组件
      this.$emit("setDataList", arr);
    },
    //   撤销
    handleFiltersCancel() {
      // 将数据全部清空
      this.airport = "",
        this.flightTimes = "",
        this.company = "",
        this.airSize = ""
        // 回到第一页
        this.pageIndex = 1;
        // 数据发送回去
        this.$emit('setDataList',this.data.flights)
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 15px;
  .filters-top {
    > div {
      /deep/ .el-select {
        margin-left: 10px;
      }
    }
  }
}
</style>