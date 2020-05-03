import { installComs } from '@/utils/index.ts'
export default installComs(require['context']('./', false, /\.vue$/), 'Site')