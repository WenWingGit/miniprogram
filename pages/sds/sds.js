// pages/sds/sds.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuti:'', 
    wish: ''
  },
  zhuti:function(e){
    this.setData({
      zhuti: e.detail.value
    })
  },
  wish: function (e) {
    this.setData({
      wish: e.detail.value
    })
  },
  weited:function(e){
    if (this.data.zhuti == ''){
      wx.showToast({
        title: '请填写主题',
        icon: 'none',
        duration: 1000
      })
      return
    }
    if (this.data.wish == ''){
      wx.showToast({
        title: '请填写内容',
        icon: 'none',
        duration: 1000
      })
      return
    }

    var list = wx.getStorageSync('list') || []

    let yw = {
      title: this.data.zhuti,
      description: this.data.wish
    }
    list.push(yw)
    wx.setStorageSync('list', list);

    wx.switchTab({
      url: '../yw/ys',
    })
    
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