// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图假数据
    swiperList: [{
      swiperImageId: 1,
      swiperImgUrl: 'https://ae01.alicdn.com/kf/U4aa62d28b0014a8084f4598946b35d3bU.jpg',
    },
    {
      swiperImageId: 2,
      swiperImgUrl: 'https://ae01.alicdn.com/kf/U4aa62d28b0014a8084f4598946b35d3bU.jpg',
    },
    {
      swiperImageId: 3,
      swiperImgUrl: 'https://www.hualigs.cn/image/60a53162e666c.jpg',
    }],
    // 横向滑动导航条数据
    scrollViewList: [
      {
        title_id: 0,
        title: '全部'
      }, {
        title_id: 1,
        title: '数码'
      },
      {
        title_id: 2,
        title: '学习'
      },
      {
        title_id: 3,
        title: '生活'
      },
      {
        title_id: 4,
        title: '衣物'
      },
      {
        title_id: 5,
        title: '其他'
      }],
    scrollCheckedId:0
  },

  scrollchecked:function(e){
    // console.log(e);
    // this.setData({
      var id = e.currentTarget.dataset.titleid
      // this.data. =id
      // })
      // console.log(this);
      console.log(id);
      this.setData({
        scrollCheckedId:id
      })
    console.log(this.data.scrollCheckedId);
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