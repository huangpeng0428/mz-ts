

import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'
import Vue from 'vue'

const mutations: MutationTree<RootStateTypes> = {
    addCpItem (state: RootStateTypes, data: any) {
        state.sortApi.splice(data.index, 0, data.data)
    },
}

export default mutations