const menusList = [
  {
    id: '0',
    itemName: '用户信息',
    path: 'users',
    icon: 'User',
    children: [
      {
        id: '100',
        itemName: '用户列表',
        path: 'roles',
        icon: 'Document',
        children: []
      },
      {
        id: '101',
        itemName: '个人信息',
        path: 'userInfo',
        icon: 'Setting',
        children: []
      },
      {
        id: '102',
        itemName: '修改密码',
        path: 'password',
        icon: 'Lock',
        children: []
      }
    ]
  },
  {
    id: '1',
    itemName: '寻味道',
    path: 'seek',
    icon: 'KnifeFork',
    children: [
      {
        id: '110',
        itemName: '我的发布',
        path: 'mySeek',
        icon: 'UserFilled',
        children: []
      },
      {
        id: '111',
        itemName: '全部发布',
        path: 'allSeek',
        icon: 'More',
        children: []
      }
    ]
  },
  {
    id: '2',
    itemName: '请品鉴',
    path: 'reply',
    icon: 'Food',
    children: [
      {
        id: '120',
        itemName: '当地发布',
        path: 'localSeek',
        icon: 'LocationInformation',
        children: []
      },
      {
        id: '121',
        itemName: '我的响应',
        path: 'myReply',
        icon: 'UserFilled',
        children: []
      }
    ]
  },
  {
    id: '3',
    itemName: '成功记录',
    path: 'statistics',
    icon: 'Goods',
    children: [
      {
        id: '130',
        itemName: '中介费统计',
        path: 'order',
        icon: 'Coin',
        children: []
      },
      {
        id: '131',
        itemName: '图表',
        path: 'report',
        icon: 'PieChart',
        children: []
      }
    ]
  }
]

export default menusList
