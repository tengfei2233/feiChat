Page({

    data: {
        title: "聊天页面",
        friendId: null,
        iptVal: "",
        msgList:[
            {
                id:1,
                msg:"这是第一条消息",
                type:1,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 12:00:00"
            },
            {
                id:2,
                msg:"这是第一条消息",
                type:0,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 13:00:00"
            },
            {
                id:3,
                msg:"这是第一条消息",
                type:1,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 13:00:00"
            },
            {
                id:4,
                msg:"这是第一条消息",
                type:0,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 13:00:00"
            },
            {
                id:5,
                msg:"这是第一条消息",
                type:1,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 13:00:00"
            },
            {
                id:6,
                msg:"这是第一条消息",
                type:0,
                avatar:"https://img01.yzcdn.cn/vant/logo.png",
                date:"2023-10-27 13:00:00"
            }
        ]
    },
    onLoad(options) {
        let msgStr = options.msg;
        let msg = JSON.parse(msgStr);
        this.setData({
            title: msg.nickname,
            friendId: msg.id
        });
        wx.setNavigationBarTitle({
            title: msg.nickname,
        })
    },

    onReady() {

    },

    onShow() {

    },

    bindInput(e){
        console.log(e);
        this.setData({
            iptVal:e.detail.value
        })
    },

    sendMsg(){
        console.log("发送");
    }

})