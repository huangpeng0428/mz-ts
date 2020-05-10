

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
    },

    setApiItem (state: RootStateTypes, comData: any) {
        const compare = (origin: any, target: any): void => {
            for(let key in target) {
                if(typeof origin[key] === 'object' && origin[key] !== null) {
                    compare(origin[key], target[key])
                } else {
                    if (origin.hasOwnProperty(key)) {
                        origin[key] = target[key]
                    } else {
                        Vue.set(origin, key, target[key])
                    }
                }
            }
        }
        let idx: string | number = state.sortApi.findIndex(item => item.code === comData.code)
        compare(state.sortApi[idx], comData)
    }
}

export default mutations