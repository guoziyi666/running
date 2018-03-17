//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background:"/image/background.png",
   
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    
  },
  changeStart:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://up.mcyt.net/down/45758.mp3',
      title:'back'
    })
      wx.redirectTo({
        url: "../start/start"
      })
  }
   
    
})
