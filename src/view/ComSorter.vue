<template>
    <div class="site-content" :style="sortApi[0] && sortApi[0].attr.style">
        <div class="app-top" ref="appTop">
            <SiteHeader
            v-if="sortApi[0]"
            :content="sortApi[0].content"
            @click.native="getIndex(0)" 
            ></SiteHeader>
        </div>
        <Draggabble
            :group="sortOption.group"
            :sort="sortOption.sort"
            :animation="sortOption.animation"
            @sort="onSort"
            @add="onAdd"
            ref="appSort"
            class="app-sort">
            <div v-for="(appUi, index) in sortApi" :key="appUi.code">
                <component
                    v-if="!appUi.attr.bottom.status && !(appUi.attr.top && appUi.attr.top.status)"
                    :is="appUi.type"
                    :content="appUi.content"
                    :attrStyle="addUnitPx(appUi.attr.style)"
                    :attrModule="addUnitPx(appUi.attr.module)"
                    :sortIdx="index"
                    @click.native="getIndex(index)"
                    :key="appUi.content.code">
                </component>
                <div class="com-empty" v-if="sortApi.length < 2">
                    <img src="~assets/img/layout-tip.png" alt="">
                    <p>请从左侧拖进组件，制作落地页</p>
                </div>
            </div>
        </Draggabble>
        <div class="app-bottom" ref="appBottom">
            <div v-for="(appUi,index) in sortApi" :key="appUi.code">
                <component
                v-if="appUi.attr.bottom.status"
                :is="appUi.type"
                :content="appUi.content"
                :attrStyle="addUnitPx(appUi.attr.style)"
                :attrModule="addUnitPx(appUi.attr.module)"
                :sortIdx="index"
                @click.native="getIndex(index)"
                :key="appUi.content.code">
                </component>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'
import Draggabble from 'vuedraggable'
import { COM_DEFAULT_DATA } from '@/enums/index.ts'
import SiteComs from '@/components/siteComs/index.ts'
@Component({
    name: 'ComSorter',
    components: {
        Draggabble, ...SiteComs
    }
})
export default class Sort extends Vue {
    sortOption: any = {
        group: {
            name: 'components',
            pull: true,
            put: true
        },
        sort: true,
        animation: 300
    }
    @State sortApi: Array<any>
    @Action addCp
    @Mutation setCommon
    created() {
        if(!this.sortApi.length) {
            this.addCp(COM_DEFAULT_DATA['SiteHeader'])
        }
    }

    getIndex (index) {
        this.setCommon({ index: index, flag: true })
    }

    onAdd(res) {
        console.log(res)
        console.log(this.sortApi)
        this.addCp(res)
        this.getIndex(res.newIndex)
    }

    onSort(res) {
        if(res.from === res.to) {
            console.log(res)
        }
        
    }

    @Watch('sortApi', { deep: true })
    onSortApiChanged (newVal: Array<any>, oldVal: Array<any>) {
        console.log(newVal)
    }
}
</script>

<style lang="scss">
.site-content{
    overflow-y: auto;
    height: 100%;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    .app-top {
        z-index: 1111;
        width: 100%;
        height: 40px;
        background-color: #333;
        color: #fff;
        position: absolute;
        top: 0;
    }
    .app-sort {
        padding-top: 40px;
        min-height: 600px;
        .com-empty {
            width: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        img {
            width: 260px;
        }
        p {
            width: 100%;
            text-align: center;
            color: #ccc;
        }
        }
    }
    .com-sort {
        position: relative;
    }
    .com-sort_active {
        border: 1px solid $blue;
    }
}
</style>