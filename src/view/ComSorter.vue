<template>
    <div>
        1
    </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'
import { COM_DEFAULT_DATA } from '@/enums/index.ts'
@Component({
    name: 'ComSorter'
})
export default class Sort extends Vue {

    @State sortApi: Array<any>
    @Action addCp
    created() {
        console.log(COM_DEFAULT_DATA)
        if(!this.sortApi.length) {
            this.addCp(COM_DEFAULT_DATA['SiteHeader'])
        }
    }

}
</script>