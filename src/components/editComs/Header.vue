<template>
    <div class="btn-edit ui-edit"
        :data-code="comData.code">
        <el-form class="edit-form" ref="form" label-width="80px">
            <div class="form-group">
                <h3 class="form-group__title">落地页基础设置</h3>
                <el-form-item label="站点名称">
                <el-input
                    size="large"
                    v-model="comData.content.pageName"
                    placeholder="不能重复（用于管理落地页）">
                </el-input>
                </el-form-item>
                <el-form-item label="页面标题">
                <el-input size="large" v-model="comData.content.pageTitle" placeholder="对用户展示"></el-input>
                </el-form-item>
                <el-form-item label="背景颜色">
                <el-color-picker
                    @active-change=" (value) => setStyle(value, 'backgroundColor')"
                    v-model="comData.attr.style['backgroundColor']"
                    show-alpha>
                </el-color-picker>
                </el-form-item>
            </div>
            <div class="form-group">
                <h3 class="form-group__title">背景图</h3>
                <el-upload
                class="file-uploader"
                action="/common/upload"
                :show-file-list="false"
                :on-success="handleImgSuccess"
                :before-upload="beforeImgUpload()">
                <div class="file-uploader__btn">
                    <i class="el-icon-plus"></i><span> 添加图片</span>
                </div>
                </el-upload>
                <div class="img-tip">图片要求：支持 jpg、png、jpeg 格式，小于300K，建议尺寸比例 1080 X 1920。</div>
                <div class="img-wrap" v-if="comData.attr.style.backgroundImage">
                <div class="el-icon-close remove-img el-icon-close_bg_blue" @click="removeImg"></div>
                <img :src="getUrl(comData.attr.style.backgroundImage)">
                </div>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import { deepCopy } from '@/utils/index.ts'
import { HOST } from '@/enums/index.ts'
import BeforeUpload from '@/mixins/beforeUpload.ts'

@Component({
  name: 'EditHeader',
  mixins: [BeforeUpload]
})

export default class DlBtnEdit extends Vue {
    @Prop(Object) comContent: any
    @Prop(Number) sortIdx: number | undefined
    @Prop(Number) currentIndex: number | undefined
    @State sortApi: Array<any>
    @State editIndex: number
    @State editShow: boolean
    @Mutation setApiItem

    comData: any = deepCopy(this.comContent, [])
    setStyle (value, style) {
        this.$set(this.comData.attr.style, style, value)
    }

    handleImgSuccess (res, file) {
        const url = `http://${HOST}/upload/${res.value[0].url}`
        this.$set(this.comData.attr.style, 'backgroundImage', `url(${url})`)
    }

    removeImg () {
        this.comData.attr.style.backgroundImage = ''
    }

    getUrl (str) {
        return str.match(/url\((.*)\)/)[1]
    }

    @Watch('comData', { deep: true })
    onComDataChanged (newVal: Array<any>, oldVal: Array<any>) {
        //this.$store.commit('setApiItem', newVal)
        console.log(newVal)
    }
}
</script>

<style lang="scss" scoped>
.file-uploader {
  font-size: 16px;
  color: $blue;
  border: 1px solid $blue;
  margin: 10px 160px;
  text-align: center;
  line-height: 36px;
  .file-uploader__btn {
    padding: 0 10px;
  }
}
.img-tip, .video-tip {
  font-size: 12px;
  line-height: 20px;
  color: $gray;
  margin: 0 30px;
}
.form-group {
  margin: 0 10px;
  .img-wrap {
    height: 100px;
    background-color: #f0eeef;
    margin: 10px 0;
    text-align: center;
    position: relative;
    .remove-img {
      position: absolute;
      right: 0;
      top: 0;
    }
    img{
      height: 100%;
    }
  }
  .video-player {
    width: 100%;
    margin: 10px 0;
  }
}
</style>