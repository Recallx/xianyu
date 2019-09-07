<template>
    <!-- 头部信息 -->
    <el-row type="flex" justify="space-between" class="flight-title">
      <el-col :span="5">
        <span>航空信息</span>
      </el-col>
      <el-col :span="14">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <span>起飞信息</span>
          </el-col>
          <el-col :span="12">
            <span>到达时间</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <span>价格</span>
      </el-col>
    </el-row>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.flight-title {
  height: 38px;
  padding: 0 15px;
  background: #f6f6f6;
  border: 1px solid #ccc;
  color: #6c6c6c;
  line-height: 38px;
  text-align: center;
  margin-bottom: 15px;
}
</style>