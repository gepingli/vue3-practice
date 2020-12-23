<template>
  <el-container>
    <el-aside>

    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '/@components/menu.vue'
export default {
  name: 'App',
  setup() { 
  },
}
</script>
<style lang="less" scoped>
  .el-header {
    background-color: rgb(31, 41, 46);
    color: #fff;
    text-align: center;
    line-height: 56px;
    height: 56px !important;
  }
  
  .el-aside {
    background-color: rgb(46, 107, 230);
    color: #fff;
    text-align: center;
    height: 100vh;
    width: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    height: 100%;
  }
</style>
