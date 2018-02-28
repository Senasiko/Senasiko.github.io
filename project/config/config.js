module.exports = {
  rootPath: '/new',
  staticPath: 'static', // 静态文件路径
  title: '标题', // 页面标题
  pageSize: 3, // 每页的显示个数
  user: {
    img: '/new/static/img/user.png',
    msgs: [
      {
        icon: '',
        value: 'Sena',
        link: '/new'
      },
      {
        icon: 'anticon anticon-calendar',
        value: '1996-01-27',
      },
      {
        link: 'mailto: senasiko@gmail.com',
        value: 'senasiko@gmail.com',
        icon: 'anticon anticon-mail',
      },
      {
        icon: 'anticon anticon-github',
        link: 'https://github.com/Senasiko',
        newTag: true
      },

      {
        icon: 'anticon anticon-qq',
        link: 'tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=284476221',
      }
    ]

  }
};
