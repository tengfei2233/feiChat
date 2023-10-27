// components/customTabBar/index.js
Component({


    data: {
        active: 0,
        list: [{
                icon: 'chat-o',
                text: '消息',
                name: 'message',
                url: '/pages/message/message'
            },
            {
                icon: 'friends-o',
                text: '好友',
                name: 'friend',
                url: '/pages/friend/friend'
            },
            {
                icon: 'contact-o',
                text: '我的',
                name: 'me',
                url: '/pages/me/me'
            }
        ]
    },

    methods: {
        onChange(event) {
            this.setData({
                active: event.detail
            });
            wx.switchTab({
                url: this.data.list[event.detail].url,
            });
        },

        init() {
            const page = getCurrentPages().pop();
            this.setData({
                active: this.data.list.findIndex(item => item.url === `/${page.route}`)
            });
        }
    }
})