<template>
    <div class="btn-edit ui-edit" :data-code="comData.code">
        <el-form class="edit-form" ref="form" label-width="80px">
            <div class="form-group">
                <h3 class="form-group__title">文字样式</h3>
                <el-form-item label="内容">
                    <el-input type="textarea" :rows="4" size="large" v-model="comData.content.text" placeholder="输入文本内容"></el-input>
                </el-form-item>

                <el-form-item label="链接">
                    <el-input type="text" size="large" v-model="comData.content.Link" placeholder="输入跳转链接(选填)，必须以http(s)://开头"></el-input>
                </el-form-item>

                <div class="form-row">
                    <el-form-item label="字号">
                        <el-input type="number"
                        v-model="comData.attr.style.fontSize"
                        size="small">
                        </el-input><span> px</span>
                    </el-form-item>
                    <el-form-item label="颜色">
                        <el-color-picker
                        @active-change=" (value) => setStyle(value, 'color')"
                        v-model="comData.attr.style.color"
                        show-alpha>
                        </el-color-picker>
                    </el-form-item>
                </div>

                <div class="text-style">
                    <span
                        class="iconfont style-btn"
                        v-for="(item, idx) in fontStyleArr"
                        :class="{active: item.isActive, [`iconfont-${item.name}`]: true}"
                        :key="idx"
                        @click="setTextStyle(idx)">
                    </span>   
                </div>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { deepCopy } from '@/utils/index.ts'
import { STYLE_MODULE } from '@/enums/index.ts'

@Component
export default class DlBtnEdit extends Vue {
    @Prop(Object) comContent: any
    @Prop(Number) sortIdx: number | undefined
    @Prop(Number) currentIndex: number | undefined

    @State sortApi: Array<any>
    @State editIndex: number
    @State editEdit: boolean

    comData: any = deepCopy(this.comContent, [])
    fontStyleArr = [
        {
        name: 'weight',
        isActive: false,
        styleName: 'fontWeight',
        styleValue: 'bold'
        },{
        name: 'italic',
        isActive: false,
        styleName: 'fontStyle',
        styleValue: 'italic'
        },{
        name: 'underline',
        isActive: false,
        styleName: 'textDecoration',
        styleValue: 'underline'
        },{
        name: 'align-left',
        isActive: false,
        styleName: 'textAlign',
        styleValue: 'left'
        },{
        name: 'align-center',
        isActive: false,
        styleName: 'textAlign',
        styleValue: 'center'
        },{
        name: 'align-right',
        isActive: false,
        styleName: 'textAlign',
        styleValue: 'right'
        }
    ]
    styleOpt: Object = {
        module: STYLE_MODULE
    }

    //设置样式
    setStyle(val, style) {
        this.$set(this.comData.attr.style, style, val)
    }

    //设置字体
    setTextStyle(idx) {
        let item = this.fontStyleArr[idx]
        item.isActive = !item.isActive
        const regex = /^align/
        if(regex.test(item.name) && item.isActive) {
            for(let obj of this.fontStyleArr) {
                if(regex.test(obj.name) && item.name !== obj.name) {
                    obj.isActive = false
                }
            }
        }
        
    }
}
</script>

<style lang="scss" scoped>
  .text-style {
    margin: 0 60px 10px;
    padding: 15px 0;
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
    .style-btn {
      margin: 0 10px;
      padding: 3px;
      font-size: 22px;
      color: #adacac;
      cursor: pointer;
    }
    .active {
      border: 1px solid $blue;
      color: #666;
    }
  }
</style>