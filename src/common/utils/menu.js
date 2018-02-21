// 这个数组用来生成一个left-side菜单的列表项,根据列表项生成菜单比较方便
// icon来源是阿里爸爸的iconfont网站，.css文件是以静态文件的形式添加在服务器的根目录上
export const allMenu = [
    {
        name: '首页',
        url: 'index',
        icon: 'iconfont icon-shouye'
    }, {
        name: '音乐模块',
        url: 'music',
        icon: 'iconfont icon-yinyue',
        children: [
            { name: '音乐系列', url: 'music' },
        ]
    }, {
        name: '工具模块',
        url: 'tool',
        icon: 'iconfont icon-gongjuxiang',
        children: [
            { name: '小应用', url: 'tools' },
            { name: '富文本编辑器', url: 'editor' },
            { name: '待办事项', url: 'todoList' },
        ],
    }, {
        name: '画廊模块',
        url: 'pic',
        icon: 'iconfont icon-gallery',
        children: [
            { name: '时光相片', url: 'album' },
        ],
    }, {
        name: '搜索模块',
        url: 'search',
        icon: 'iconfont icon-sousuo',
        children: [
            { name: '搜索引擎', url: 'searchEngine' },
        ],
    }, {
        name: '开发模块',
        url: 'dev',
        icon: 'iconfont icon-kaifa',
        children: [
            { name: '更多模块开发中', url: 'todo' },
        ],
    }, {
        name: '项目地址',
        url: 'follow',
        icon: 'iconfont icon-dizhi',
    }]