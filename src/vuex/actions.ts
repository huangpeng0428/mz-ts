/*
 * @Date: 2020-05-11 14:41:43
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-11 14:58:46
 */
import { RootStateTypes } from './types';
import { ActionTree } from 'vuex'
import { COM_DEFAULT_DATA } from '@/enums/index.ts'
import { deepCopy } from '@/utils/index.ts'

const action: ActionTree<RootStateTypes, any> = {
    addCp ({commit}, res: any) {
        console.log(res)
        let cmType = res.item ? res.item.getAttribute('type') : res.type
        let aIndex = res.newIndex
        let compontData = deepCopy(COM_DEFAULT_DATA[cmType])
        compontData.code = cmType + Date.now()
        commit('addCpItem', { index: aIndex, data: compontData })
        res.item && res.item.remove()
        // commit('setCommon', { index: aIndex, flag: true })
    }
}

export default action