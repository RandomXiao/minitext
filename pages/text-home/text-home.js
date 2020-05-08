// pages/character/character.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var type = options.type;
    this.setData({
      type: type,
    });
    if (type == "character") {
      wx.setNavigationBarTitle({
        title: "性格测试大全",
      }),
        this.setData({
          testItems: [
            {
              img: "/assets/chara/chara_bg1.png",
              title: "生存环境测试你的性格特点",
            },
            {
              img: "/assets/chara/chara_bg2.png",
              title: "沐浴方式测你的性格特点",
            },
            {
              img: "/assets/chara/chara_bg3.png",
              title: "写博客测试你的个性",
            },
            {
              img: "/assets/chara/chara_bg4.png",
              title: "从你的运动项目看你的个性",
            },
            {
              img: "/assets/chara/chara_bg5.png",
              title: "测你个性中哪方面最惹人厌",
            },
            {
              img: "/assets/chara/chara_bg6.png",
              title: "揭秘你的第二性格",
            },
          ],
        });
    } else {
      wx.setNavigationBarTitle({
        title: "心理测试大全",
      }),
        this.setData({
          testItems: [
            {
              img: "/assets/psy/psy_bg1.png",
              title: "测测你的另一半在哪里等你",
            },
            {
              img: "/assets/psy/psy_bg2.png",
              title: "测测什么样的异性适合你",
            },
            {
              img: "/assets/psy/psy_bg3.png",
              title: "谁是你现在最在意的人",
            },
            {
              img: "/assets/psy/psy_bg4.png",
              title: "你的闷骚指数是多少",
            },
            {
              img: "/assets/psy/psy_bg5.png",
              title: "测试你的爱情素质",
            },
            {
              img: "/assets/psy/psy_bg6.png",
              title: "爱情会让你失去什么",
            },
          ],
        });
    }
  },
  navigatorList: function (e) {
    // console.log(e);
    let id = e.detail.id;

    wx.navigateTo({
      url: "/pages/text-list/text-list?id=" + id + "&type=" + this.data.type,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
