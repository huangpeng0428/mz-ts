import { RootStateTypes } from './types';
import { ActionTree } from 'vuex'
import { COM_DEFAULT_DATA } from '@/enums/index.ts'
import { deepCopy } from '@/utils/index.ts'

const action: ActionTree<RootStateTypes, any> = {
    addCp ({state, commit}, res: any) {
        console.log(res)
        let cmType = res.item ? res.item.getAttribute('type') : res.type
    }
}

export default action