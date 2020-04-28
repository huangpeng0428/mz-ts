export interface RootStateTypes {
  sortApi: Array<any>, // 组件配置
  editIndex: number,   // 当前编辑索引
  editShow: boolean,   // 控制编辑框显示/隐藏
  partEdit: boolean,   // 是否为局部编辑
  appInfo: any,         // 应用包信息
  id: any               // site id
}