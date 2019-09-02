<template>
  <div>
    <Header></Header>
    <!-- nuxt相当于router-view -->
    <nuxt />

    <foother></foother>
  </div>
</template>
<script>
import Header from '../components/header'
import foother from '../components/foother'
export default {
  // 注册引入的文件
  components:{
    Header,
    foother
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*{
  margin: 0;
  padding: 0;
}

/* 初始化css样式 */
ul,li,ol{
  list-style: none;
}

i,em{
  font-style: normal;

}
a{
  text-decoration: none;
  color: inherit;
}

a:hover{
  color:inherit;
}
</style>
