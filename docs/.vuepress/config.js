module.exports = {
    base: '/',

    // 语言
    lang: 'zh-CN',

    // 标题
    title: '一条咸鱼的主页',

    // 描述
    description: '咸鱼也有梦想',

    // markdown显示行号
    markdown: {
        lineNumbers: true
    },

    // 自定义favicon
    head: [
        ['link', {rel: 'icon', href: '/img/avatar.jpg'}],
        // ['meta', {name: 'google-site-verification', content: 'CKmN6S4eXG3UM1ZtPTtoNFeB7HoPSineeV6N0redyJM'}],
        // ['meta', {name: 'baidu-site-verification', content: 'DHMDHUjY45'}]
    ],

    // 设置ga
    // plugins: [
    //     ['@vuepress/google-analytics', {
    //         ga: 'UA-146806630-1'
    //     }],
    //     ['@vuepress/back-to-top'],
    //     ['@vuepress/medium-zoom']
    // ],

    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'yitiaoxianyu22/myblog',

        // 自定义仓库链接文字。
        repoLabel: 'GitHub',

        // 最后更新时间
        lastUpdated: '更新时间',

        // 刷新弹窗
        serviceWorker: {
            updatePopup: true,// Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
                message: "有新内容",
                buttonText: "刷新"
            }
        },

        // 导航栏
        nav: [
            {text: 'ARTS总结', link: '/arts/'},
            {text: '博客', link: '/blog/'},
        ],

        // 侧边栏
        sidebar: {
            '/arts/': require('../arts/sidebar'),
            '/blog/': require('../blog/sidebar'),
        }
    }
}