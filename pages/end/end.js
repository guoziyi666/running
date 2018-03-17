const app = getApp()

Page({
  data: {
    background: "/image/background.png"
  },
  changeStart: function () {
    wx.redirectTo({
      url: "../start/start"
    })
  }

})