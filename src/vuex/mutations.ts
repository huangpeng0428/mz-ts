

import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'
import Vue from 'vue'

const mutations: MutationTree<RootStateTypes> = {
    addCpItem (state: RootStateTypes, data: any) {
        state.sortApi.splice(data.index, 0, data.data)
    },

    setCommon (state: RootStateTypes, obj: any) {
        if (obj.hasOwnProperty('index') && obj.hasOwnProperty('flag')) {
            let timer: any = null
            if (state.editIndex === obj.index) {
                state.editShow = obj['flag']
            } else {
                state.editShow = !obj['flag']
                clearTimeout(timer)
                timer = setTimeout(() => {
                    state.editShow = obj['flag']
                }, 150)
            }
            state.editIndex = obj['index']
        } 
    }
}

export default mutations