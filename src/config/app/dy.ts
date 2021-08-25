const menuList = [
    {
        title: 'APP管理',
        item: [
            {
                title: '添加APP'
            },
            {
                title: 'APP列表'
            }
        ]
    },
    {
        title: '用户管理',
        item: [
            {
                title: '添加用户'
            },
            {
                title: '添加权限'
            },
            {
                title: '用户列表'
            }
        ]
    },
    {
        title: '对接管理',
        item: [
            {
                title: '添加接口'
            },
            {
                title: '接口列表'
            }
        ]
    },
    {
        title: '系统管理',
        item: [
            {
                title: '操作日志'
            },
            {
                title: '任务大厅'
            },
            {
                title: '修改密码'
            }
        ]
    },
    {
        title: '帮助',
        item: [{
            title: '应用操作手册'
        }]
    }
]

const dy = {
    name: '抖音',
    ico: './images/dy.jpg',
    url: 'https://www.douyin.com/',
    fixed: true,
    menuList
}

export default dy
