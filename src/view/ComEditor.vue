<template>
    <transition name="slider-right">
        <div class="com-editor" v-if="sortApi.length > 0 && editShow === true">
            <div v-for="(appUi,index) in sortApi" :key="appUi.content.code">
                <component
                :is="normolizeComName(appUi.type)"
                :comContent.sync="appUi"
                :sortIdx="index"
                :currentIndex="editIndex"
                >
                </component>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import EditComs from '@/components/editComs/index.ts'

@Component({
  name: 'ComEditor',
  components: EditComs
})

export default class BaseEdit extends Vue {
    @State sortApi: Array<any>
    @State editIndex: number
    @State editShow: boolean
    normolizeComName (comName) {
        let name = comName || ''
        return 'Edit' + name.replace(/[S|s]ite/g, '')
    }

    created() {
        console.log(this.editShow)
    }
}
</script>

<style lang="scss">
.com-editor {
  padding-top: 20px;
}
.edit-form {
  .el-form-item {
    margin-bottom: 10px;
    .el-input--mini {
      width: 50px;
    }
    .el-input--small {
      width: 100px;
    }
    .el-input--medium {
      width: 150px;
    }
    .el-input--large {
      width: 300px;
    }
  }
  .form-group {
    &__title {
      font-size: 16px;
      font-weight: bold;
      padding-left: 10px;
      line-height: 40px;
    }
    .form-row {
      display: flex;
      flex-wrap: wrap;
      .el-form-item {
        width: 50%;
      }
    }
  }
}

</style>