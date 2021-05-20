// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    userListData: [{
        userlist_id: 0,
        userlist_name: '发布'
      },
      {
        userlist_id: 1,
        userlist_name: '收藏'
      }
    ]
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
    //  传值
    this.setData({
      // 通过const value = wxwx.getStorageSync('key') 获取到存储在数据缓存中的用户信息
      userinfo: wx.getStorageSync('userinfo')
    })
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