module.exports = {
    title: '一条咸鱼',
    description: '咸鱼也有梦想',
    serviceWorker: true,
    // head: [ // 注入到当前页面的 HTML <head> 中的标签
    //   ['link', { rel: 'icon', href: '/img/head.jpeg' }], // 标签里的头像
    // ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {text: '首页', link: '/'},
            {
                text: '技术',
                items: [
                    {text: 'ARTS', link: '/arts/'}
                ]
            },
            {
                text: '链接',
                items: [
                    {text: 'csdn', link: 'https://blog.csdn.net/qq_38409264'},
                    {text: 'github', link: 'https://github.com/yitiaoxianyu22'}
                ]
            }
            // { text: '生活',link: '/life/' },
            // { text: '思考',link: '/ponder/'},
            // { text: '标签库', link: '/tags/' },
            // { text: '关于', link:'/about/'},
        ],
        lastUpdated: 'Last Updated',
        sidebar: {
            '/arts/': [
                'ARTS_1',
                'ARTS_2',
                'ARTS_3',
            ],
        },// 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
