// pages/message/message.js
Page({

    data: {
        msgList:[
            {
                "id":1,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":2,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":3,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":4,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":5,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":6,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":7,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":8,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":9,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":10,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":11,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":12,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":13,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":14,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
            {
                "id":15,
                "nickname":"我の世界",
                "remark":"mc",
                "msg":"干嘛要，难道连Hello World都不会写吗",
                "avatar":"https://img.yzcdn.cn/vant/cat.jpeg",
                "msgCount":10
            },
        ],

    },

    onShow() {
        this.getTabBar().init();
    },

    toChatInfo(e){
        let msg=e.currentTarget.dataset.msg;
        msg.msg=""
        let msgStr = JSON.stringify(msg);
        wx.navigateTo({
          url: '/pages/chatInfo/chatInfo?msg=' + msgStr,
        })
    },
    delChat(e){
        let id=e.currentTarget.dataset.id;
        const instance = e.detail.instance;
        // 根据id删除数据
        let newMsgList = this.data.msgList.filter(item=>item.id!=id);
        this.setData({
            msgList: newMsgList
        });
        instance.close();
    }
})