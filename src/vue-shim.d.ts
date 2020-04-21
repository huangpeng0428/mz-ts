declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.ts' {
  export function deepCopy (obj:any, cache:Array<any>): any
  export function installComs (filePath: string): Object
  export const STYLE_PX: Array<string>
  export const STYLE_MODULE: Array<Object>
  export const HOST: string
  export function getAppDetail (params: any): any
  export const COM_DEFAULT_DATA: any
  export const postLandingPage: any
  export const getLandingPageDetail: any
  export const getQRCode: any
  export default ts
}

declare module 'vuedraggable'

// declare namespace Ajax {
//   // axios 返回数据
//   export interface AxiosResponse {
//     data: AjaxResponse
//   }
//   // 请求接口数据
//   export interface AjaxResponse {
//     code: number,
//     data: any,
//     message: string
//   }
// }

// 全局变量设置
// declare global {
//   const $envType,
//         $conf
// }

// // iview 全局方法
// declare module 'vue/types/vue' {
//   interface Vue {
//     $Message: any,
//     $Modal: any
//   }
// }

// declare module 'qs' {
//   const qs: any
//   export default qs
// }
