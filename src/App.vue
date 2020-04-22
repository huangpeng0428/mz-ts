<template>
  <el-container id="app">
    <router-view/>
    <!-- <div class="container">
      <div class="left-container">
        1
      </div>
    </div> -->
    <el-header class="header">
      头部
    </el-header>
    <el-container class="main">

    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
export default class App extends Vue {

}
</script>

<style lang="scss">
@import '@/assets/css/base.scss';
@import '@/assets/css/flex.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
