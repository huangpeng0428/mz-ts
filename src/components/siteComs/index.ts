import { installComs } from '@/utils/index.ts'
console.log(require['context']('./', false, /\.vue$/))
export default installComs(require['context']('./', false, /\.vue$/), 'Site')