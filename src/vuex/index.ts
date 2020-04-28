import  Vue  from 'vue';
import Vuex, {Store} from 'vuex'
import state from './state.ts' 
import mutations from './mutations.ts'
import actions from './actions.ts'


Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store