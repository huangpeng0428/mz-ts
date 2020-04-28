import { RootStateTypes } from './types';

let sortApi: Array<any> = []

const state: RootStateTypes = {
    sortApi,
    editIndex: -1,
    editShow: false,
    partEdit: false,
    appInfo: {
        packageName: '',
        name: '',
        icon: '',
        versionCode: '',
        id: '',
        status: ''
      },
      id: ''
}

export default state
