import {
    pinyin
} from 'pinyin-pro';

const friendList = [{
        id: 1,
        nickname: "张三"
    },
    {
        id: 2,
        nickname: "放大三"
    },
    {
        id: 3,
        nickname: "啊张三"
    },
    {
        id: 4,
        nickname: "让他张三"
    },
    {
        id: 5,
        nickname: "爱人张三"
    },
    {
        id: 6,
        nickname: "那天张三"
    },
    {
        id: 7,
        nickname: "没张三"
    },
    {
        id: 8,
        nickname: "哦张三"
    },
    {
        id: 9,
        nickname: "从张三"
    },
    {
        id: 10,
        nickname: "在张三"
    },
    {
        id: 11,
        nickname: "@在张三"
    },
    {
        id: 12,
        nickname: "3在@张三"
    },
]


Page({

    data: {
        searchVal: '',
        sortFriendlist: []
    },

    onLoad(options) {
        this.getFriendList()
    },

    onChoose(e) {
        console.log('onChoose', e)
    },

    onShow() {
        this.getTabBar().init();
    },

    search(e) {

    },
    add(e) {

    },

    getFriendList() {
        const friends = friendList
        // 按拼音排序
        friends.sort((c1, c2) => {
            // 获取每个昵称第一个拼音
            let p1 = pinyin(c1.nickname, {
                toneType: 'none',
                type: 'array'
            })[0];
            let p2 = pinyin(c2.nickname, {
                toneType: 'none',
                type: 'array'
            })[0]
            return p1.localeCompare(p2)
        })
        console.log("friends:",friends);
        const map = new Map();
        const otherNick = [];
        const sortIdx = []
        friends.forEach((item, index) => {
            // 昵称首字母
            let firstChat = pinyin(item.nickname,{ toneType: 'none' }).charAt(0);
            console.log(firstChat);
            // 是否是字母
            if (/^[a-z]$/.test(firstChat)) {
                firstChat = firstChat.toUpperCase();
                if (!map.has(firstChat)) {
                    sortIdx.push(firstChat);
                    map.set(firstChat, [])
                }
                map.get(firstChat).push(item)
            } else {
                otherNick.push(item)
            }
        })
        console.log("map:",map);
        console.log("otherNick:",otherNick);
        let list = []
        sortIdx.forEach(key => {
            list.push({
                alpha: key,
                subItems: map.get(key)
            })
        })
        list.push({
            alpha: "#",
            subItems: otherNick
        })
        console.log("list:", list);
        this.setData({
            sortFriendlist:list
        })
    }

})