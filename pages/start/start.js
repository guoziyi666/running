// pages/start/start.js
var time;
var orginbottom;
var i;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:0,
    // anyleft:0,
    bottom:90,
    speed:30,
    state:"",
    isjump:false,
    num:1,
    transform:1,
    srctype:"/image/person1.png",
    classtype:"person",
    arrayspan:[
      {
        left:350,
        bottom:150
      },
      {
        left: 480,
        bottom: 150
      },
      {
        left: 600,
        bottom: 220
      },
      {
        left: 710,
        bottom: 300
      },

      {
        left: 750,
        bottom: 370
      },
      {
        left: 810,
        bottom: 300
      },
      {
        left: 850,
        bottom: 200
      },

      {
        left: 350,
        bottom: 150
      },
      {
        left: 350,
        bottom: 150
      }
      
    ]
  },
  
  move:function(){
    var that=this;
    clearInterval(time)
    time =setInterval(function(){
      that.setData({
        left: that.data.left-that.data.speed
       
      });
      if (that.data.transform==1){
        that.setData({
          num: that.data.num+1
        });
        
        if (that.data.num==4){
          that.setData({
            transform:-1
          });
        }
        that.setData({
          srctype: "/image/person" + that.data.num + ".png"
        });
      }
      else if (that.data.transform == -1){
        that.setData({
          num: that.data.num - 1
        });
        
        if (that.data.num == 2) {
          that.setData({
            transform: 1
          });
        }
        that.setData({
          srctype: "/image/person" + that.data.num + ".png"
        });
      }
      if (that.data.left < -415 && (!that.data.isjump || that.data.left + that.data.arrayspan[i].left <-100)){
        that.setData({
          bottom: 0
        });
        clearInterval(time)
        wx.redirectTo({
          url: "../end/end"
        })
      }else{
        console.log(that.data.isjump)
      }
    },200)
     
  },
  
  start:function () {
    switch(this.data.state){
      case "move":
        this.setData({
          state: "jump"
        });     
        this.jump();    
        break;
      case "":
        this.setData({
          state: "move"
        });
        this.move();
        break;
    }
   
  },
  
  jump:function(){
    var that = this;
    orginbottom=that.data.bottom;   
    // clearInterval(time)    
      setTimeout(function(){
        that.setData({
          srctype: "/image/person5.png"
        });
        that.setData({
          bottom: that.data.bottom + that.data.speed*6
        });
        that.setData({
          left: that.data.left - that.data.speed
        });
       
          
        
      },30);
      setTimeout(function () {
        that.setData({
          srctype: "/image/person6.png"
        });
       
       
        
      },60);
      
      setTimeout(function () {
        that.setData({
          srctype: "/image/person7.png"
        });
        
        for ( i = 0; i < that.data.arrayspan.length-1;i++){
          if (that.data.left + that.data.arrayspan[i].left >= 0)
          break;
        }console.log(i)
          if (that.data.bottom + 110 >= that.data.arrayspan[i].bottom &&
            that.data.left + that.data.arrayspan[i].left >= 0 && that.data.left +                  that.data.arrayspan[i].left <= 100) {
            that.setData({
              bottom: that.data.arrayspan[i].bottom+30
            });
            that.setData({
              isjump: true
            });
          }else{
            
            that.setData({
              bottom: orginbottom
            });
            
              that.setData({
                isjump:false
              })
              console.log(that.data.bottom)
            
          }
        
        
      }, 90); 
      
        this.setData({
          state: "move"
        });
      this.move()
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})