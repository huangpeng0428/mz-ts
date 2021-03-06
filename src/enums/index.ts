/*
 * @Date: 2020-05-11 14:41:43
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-14 14:49:56
 */
export const HOST: string = 'mzdsp.meizu.com'
export const STYLE_PX: Array<string> = [
    'fontSize',
    'borderRadius', 'borderWidth',
    'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'
  ]
export const STYLE_MODULE: Array<Object> = [
    {
      label: '上',
      name: 'paddingTop'
    },{
      label: '下',
      name: 'paddingBottom'
    },{
      label: '左',
      name: 'paddingLeft'
    },{
      label: '右',
      name: 'paddingRight'
    }
]
const WHITE: string = 'rgba(255, 255, 255, 1)'
const BLACK: string = 'rgba(0, 0, 0, 1)'
export const COM_DEFAULT_DATA: any = {
    SiteHeader: {
        type: 'SiteHeader',
        content: {
            pageTitle: '页面标题',
            pageName: '站点名称'
        },
        attr: {
            top: { status: true, index: -1 },
            bottom: { status: false, index: -1 },
            style: {
                backgroundColor: WHITE,
                backgroundImage: ''
            }
        }
    },
    SiteText: {
        type: 'SiteText',
        content: {
            text: '默认文本',
            Link: ''
        },
        attr: {
            top: { status: false, index: -1 },
            bottom: { status: false, index: -1 },
            style: {
                backgroundColor: WHITE,
                fontSize: '14',
                fontFamily: 'nomal',
                borderColor: WHITE,
                borderWidth: '',
                borderStyle: '',
                borderRadius: '0',
                color: BLACK,
            },
            module: {
                paddingTop: '0',
                paddingLeft: '0',
                paddingBottom: '0',
                paddingRight: '0'
            }
        }
    },
    SiteImgs: {
        type: 'SiteImgs',
        content: {
            download: false,
            urls: []
        },
        attr: {
            top: { status: false, index: -1 },
            bottom: { status: false, index: -1 },
            module: {
                paddingTop: '0',
                paddingLeft: '0',
                paddingBottom: '0',
                paddingRight: '0'
            },
            style: {}
        }

    }
}