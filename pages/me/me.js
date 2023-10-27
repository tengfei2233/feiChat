// index.js
Page({
  data: {
    active: "message",
  },
  onShow() {
    this.getTabBar().init();
  },
})
