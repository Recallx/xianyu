<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in branne" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      branne:[

      ]
    };
  },
  // 钩子函数，一刷新拿到数据
  mounted(){
    this.$axios.get('http://127.0.0.1:1337/scenics/banners')
    .then(res =>{
      console.log(res)
    })
  }
};
</script>

<style>
</style>