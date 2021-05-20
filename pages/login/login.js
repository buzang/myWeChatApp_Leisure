// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 用户点击登录事件
  handleGetUserInfo(e) {
    wx.getUserProfile({
      lang:'zh_CN',
        desc: 'desc',
        success(res) {
          // console.log(res);
          const userinfo = res.userInfo
          // console.log(userinfo);
          wx.setStorageSync('userinfo', userinfo)
          // 跳转回个人中心页
          wx.navigateBack({
            delta: 1,
          })
        },
        fail(err) {
          console.log(err);
        }
      })
  },
  // 用户点击拒绝授权事件
  handleFailLogin(e){
    wx.navigateBack({
      delta: 1,
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