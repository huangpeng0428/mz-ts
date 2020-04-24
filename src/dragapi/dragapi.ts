// 侧边栏数据配置（start数据）
interface Api {
    type: string
    name: string
    configList: Array<any>
  }
  
  const dragApi: Api = {
    type: 'drag',
    name: 'mzdrag',
    configList: [
      {
        type: 'content',
        title: '内容',
        content: [
          {
            type: 'SiteText',
            dragShow: true,
            title: ' 文本',
            class: 'icon-text'
          },{
            type: 'SiteImgs',
            dragShow: true,
            title: '多图',
            class: 'icon-imgs'
          },{
            type: 'SiteImgSlider',
            dragShow: true,
            title: '轮播图',
            class: 'icon-imgslider'
          },{
            type: 'SiteVideo',
            dragShow: true,
            title: '视频',
            class: 'icon-video'
          },{
            type: 'SiteMdseWindow',
            dragShow: true,
            title: '商品橱窗',
            class: 'icon-mdsewindow'
          },{
            type: 'SiteBtn',
            dragShow: true,
            title: '按钮',
            class: 'icon-btn'
          }
        ]
      },{
        type: 'download',
        title: '下载',
        content: [
          {
            type: 'SiteFloatCard',
            dragShow: true,
            title: '浮层卡片',
            class: 'icon-floatcard'
          },{
            type: 'SiteStore',
            dragShow: true,
            title: '商店样式',
            class: 'icon-store'
          },{
            type: 'SiteDlBtn',
            dragShow: true,
            title: '下载按钮',
            class: 'icon-dlbtn'
          }
        ]
      },{
        type: 'market',
        title: '营销',
        content: [
          {
          //   type: 'SitePhone',
          //   dragShow: true,
          //   title: '电话',
          //   class: 'icon-phone'
          // },{
            type: 'SiteConsult',
            dragShow: true,
            title: '在线咨询',
            class: 'icon-consult'
          }
        ]
      }
    ]
  }
  
  export default dragApi
  