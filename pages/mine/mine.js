// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用户数据模型
        userinfo: {},
        // tabbar数据模型
        userListData: [{
                userlist_id: 0,
                userlist_name: '发布'
            },
            {
                userlist_id: 1,
                userlist_name: '收藏'
            }
        ],
        // content数据模型
        contentListData: [{
                published_id: 0,
                published_imgUrl: '//gw.alicdn.com/bao/uploaded/i2/2249285408/O1CN01VORgHD1pouZfT2OxK_!!0-item_pic.jpg_320x320q90.jpg_.webp',
                price: 3000,
                published_title: '闲置叉子',
                published_date: '2021-05-03'
            },
            {
                published_id: 1,
                published_imgUrl: '//gw.alicdn.com/bao/uploaded/i2/2249285408/O1CN01VORgHD1pouZfT2OxK_!!0-item_pic.jpg_320x320q90.jpg_.webp',
                price: 1500,
                published_title: '闲置瓷碗',
                published_date: '2021-05-04'
            },
            {
                published_id: 2,
                published_imgUrl: '//gw.alicdn.com/bao/uploaded/i2/2249285408/O1CN01VORgHD1pouZfT2OxK_!!0-item_pic.jpg_320x320q90.jpg_.webp',
                price: 1600,
                published_title: '闲置瓜皮',
                published_date: '2021-05-06'
            }
        ],
        mineTabbar_id: 0
    },
    // 导航栏按钮 发布，收藏
    handlegetMineList(e) {
        // console.log(e);
        // console.log(e.currentTarget.dataset.titleid);
        this.setData({
                mineTabbar_id: e.currentTarget.dataset.titleid
            })
            // console.log(this.data.mineTabbar_id);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        //  传值
        this.setData({
            // 通过const value = wxwx.getStorageSync('key') 获取到存储在数据缓存中的用户信息
            userinfo: wx.getStorageSync('userinfo')
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})