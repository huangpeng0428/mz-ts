<template>
    <div class="site-content" :style="sortApi[0] && sortApi[0].attr.style">
        <div class="app-top" ref="appTop">
            <SiteHeader
            v-if="sortApi[0]"
            :content="sortApi[0].content"
            @click.native="getIndex(0)" 
            ></SiteHeader>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'
import { COM_DEFAULT_DATA } from '@/enums/index.ts'
import SiteComs from '@/components/siteComs/index.ts'
@Component({
    name: 'ComSorter',
    components: {
        ...SiteComs
    }
})
export default class Sort extends Vue {

    @State sortApi: Array<any>
    @Action addCp
    created() {
        console.log(COM_DEFAULT_DATA)
        console.log(SiteComs)
        if(!this.sortApi.length) {
            this.addCp(COM_DEFAULT_DATA['SiteHeader'])
        }
    }

    @Watch('sortApi', { deep: true })
    onSortApiChanged (newVal: Array<any>, oldVal: Array<any>) {
        console.log(newVal)
    }
}
</script>