<!--
 * @Date: 2020-05-14 14:55:23
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-14 19:19:07
 -->
<template>
    <div class="Imgs ui-edit"
    :data-code="comData.code">
        <el-form class="edit-form" ref="form" label-width="80px">
            <div class="form-group">
                <h3 class="form-group__title">多图</h3>
                <el-upload
                    class="img-uploader"
                    action="/common/upload"
                    :show-file-list="false"
                    :on-success="handleImgSuccess"
                    :before-upload="beforeImgUpload()">
                    <div class="img-uploader__btn">
                        <i class="el-icon-plus"></i><span> 添加图片</span>
                    </div>
                </el-upload>
                <div class="img-tip">图片要求：支持 jpg、png、jpeg 格式，小于300K, 最多{{IMGS_NUM_LIMIT}}张，系统会自动压缩体积过大的图片。</div>
                <el-form-item label="支持下载">
                    <el-switch v-model="comData.content.download">
                    </el-switch>
                    <p class="info-tip">
                        <i class="el-icon-warning"></i> 需要添加下载组件后填写需要下载的应用包名才能支持下载。
                    </p>
                </el-form-item>
            </div>
            <div class="form-group form-group-imgs">
                <div v-for="(item, idx) in comData.content.urls" :key="idx">
                    <div class="img-wrap">
                        <div class="el-icon-close remove-img el-icon-close_bg_blue" @click="removeImg(idx)"></div>
                        <img :src="item.src">
                    </div>
                    <el-form-item label="跳转地址">
                        <el-input
                        size="large"
                        v-model="item.link"
                        :disabled="comData.content.download"
                        placeholder="输入跳转链接(选填)，必须以http(s)://开头"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="form-group">
                <h3 class="form-group__title">组件边距</h3>
                <div class="form-row">
                    <el-form-item v-for="(modSt, idx) in styleOpt.module" :key="idx" :label="modSt.label">
                        <el-input v-model="comData.attr.module[modSt.name]"
                        type="number"
                        class="cui-input-box"
                        size="small">
                        </el-input><span> px</span>
                    </el-form-item>
                </div>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, Mutation} from 'vuex-class'
import { deepCopy } from '@/utils/index.ts'
import { STYLE_MODULE, HOST } from '@/enums/index.ts'
import BeforeUpload from '@/mixins/beforeUpload.ts'

@Component({
  mixins: [BeforeUpload]
})

export default class ImgsEdit extends Vue {
    @Prop(Object) comContent: any
    @Prop(Number) sortIdx: number | undefined
    @Prop(Number) currentIndex: number | undefined

    @State sortApi: Array<any>
    @State editIndex: number
    @State editShow: boolean
    @Mutation setApiItem
    @Mutation deleteApiItem
    comData: any = deepCopy(this.comContent, [])
    styleOpt: Object = {
        module: STYLE_MODULE
    }
    IMGS_NUM_LIMIT: number = 10

    handleImgSuccess(res, file) {
        const url = `http://${HOST}/upload/${res.value[0].url}`
        const urls = this.comData.content.urls
        if (urls.length >= this.IMGS_NUM_LIMIT) {
        return this.$message.error(`最多添加${this.IMGS_NUM_LIMIT}张图片！`)
        }
        urls.push({
            src: url,
            link: '',
            deeplink: ''
        })
    }
}
</script>