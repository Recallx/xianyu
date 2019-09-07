<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <div>
          <flistHead />
        </div>
        <!-- 航班信息 -->
        <div>
          <filstItem v-for="(item,index) in dataList" :key="index" :data="item" />

          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[1, 5, 10, 15]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import flistHead from "../../components/air/airHead";
import filstItem from "../../components/air/airItem";
export default {
  data() {
    return {
      dataList: [],
      // 当前页数
      pageIndex: 0,
      pageSize: 5,
      total:0,
      // 总数据
      flightsData: {}
    };
  },
  components: {
    flistHead,
    filstItem
  },
   mounted() {
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      console.log(res);
      this.flightsData = res.data;
      // 总条数设置给total
      this.total = this.flightsData.flights.length;
      // 第一页的值,切割5条数据出来
      this.dataList = this.flightsData.flights.slice(0, this.pageSize);
    });
  },
  methods: {
    // 选择页数时触发
    handleCurrentChange(value) {
      // console.log(value)
      this.pageIndex = value;
      // 计算出页数的数据
      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    },
    // 切换当前页面条数时触发
    handleSizeChange(value) {
      // console.log(value)
      this.pageSize = value;
      this.dataList = this.flightsData.flights.slice(0,value)
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>