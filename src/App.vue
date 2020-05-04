<template>
  <el-container id="app">
    <el-header class="header">
      头部
    </el-header>
    <el-container class="main">
      <div class="left">
        <div class="comps-group" v-for="(config,index) in dragData" :key="index">
          <el-breadcrumb class="comps-group__title">
            {{ config.title }}
          </el-breadcrumb>
          <div class="comps-item-wrap">
            <draggable
              :group="dragOption.group"
              :sort="dragOption.sort"
              class="comps-group-body">
              <div v-for="(list,index) in config.content"
                class="comps-item"
                :class="list.class"
                :type="list.type"
                :defaultText="list.defaultText"
                :key="index">
                <div :class="`comps-item-icon comps-item-${list.class}`"></div>
                <div class="comps-item-name">{{ list.title }}</div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="sit-btn">
          <el-button @click="onSave('save')">保存</el-button>
          <el-button @click="onSave('preview')">预览</el-button>
          <el-button @click="onSave('publish')">发布</el-button>
        </div>
        <section class="site-wrap">
          <section class="site">
            <div class="site-header">
            </div>
            <com-sorter class="site-body"></com-sorter>
            <div class="site-footer">
            </div>
          </section>
        </section>
      </div>
      <div class="right">
        <com-editor></com-editor>
      </div>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DragApi from '@/dragapi/dragapi.ts'
import Draggable from 'vuedraggable'
import ComSorter from '@/view/ComSorter.vue'
import ComEditor from '@/view/ComEditor.vue'

@Component({
  name: 'app',
  components: {
    Draggable, ComSorter,ComEditor
  }
})
export default class App extends Vue {

  public dragData: any = DragApi.configList
  public dragOption: any = {
    group: {
      name: 'components',
      pull: 'clone',
      put: false
    },
    sort: false
  }
  created () {
  }
  mounted() {
    
  }
}
</script>

<style lang="scss">
@import '@/assets/css/base.scss';
@import '@/assets/css/flex.scss';
@import '../src/assets/iconfont/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
