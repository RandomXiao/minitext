
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  onLoad: function (options) {
    var that = this;
    var ids = options.id;
    var type = options.type;
    this.setData({
      type: type,
    });
    if (type == "character") {
      wx.setNavigationBarTitle({
        title: "性格测试页面",
      });
      if (ids == 0) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/chara/chara_bg1.png",
              questionDetail: "你认为什么样的恶劣环境不适合人类生存?",
              option: {
                1: "酷热",
                2: "严寒",
                3: "干燥",
                4: "狂风",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 1) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/chara/chara_bg2.png",
              questionDetail:
                "下面有几种不同的沐浴方式，请凭你的直觉来选择自己喜欢的",
              option: {
                1: "泉水洗澡",
                2: "花瓣洗澡",
                3: "用薰衣草和柠檬片泡澡",
                4: "牛奶泡澡",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 2) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/chara/chara_bg3.png",
              questionDetail:
                "从写博客的习惯可以看出一个人的个性特点，你通常会在博客里写哪些内容？",
              option: {
                1: "叙述、记事",
                2: "议论他人",
                3: "把博客当作发泄对象",
                4: "抒发感慨",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 3) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/chara/chara_bg4.png",
              questionDetail: "以下项目你最喜欢哪一个？",
              option: {
                1: "排球",
                2: "羽毛球",
                3: "足球",
                4: "游泳",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 4) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/chara/chara_bg5.png",
              questionDetail: "参加赛车比赛时，你最担心身体出现什么情况？",
              option: {
                1: "眼睛不舒服，一直流泪",
                2: "手脚痒得受不了",
                3: "肚子很痛，想去厕所",
                4: "火气大，胃病发作",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 5) {
        that.setData({
          ids: 5,
          listItems: [
            {
              img: "/assets/chara/chara_bg6.png",
              questionDetail:
                "如果另一半临终前要送你最后一样礼物，你希望是什么？",
              option: {
                1: "一笔金钱",
                2: "一个秘密",
                3: "一栋房子",
                4: "一本日记",
              },
              items: 4,
            },
          ],
        });
      }
    } else {
      wx.setNavigationBarTitle({
        title: "心理测试页面",
      });
      if (ids == 0) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/psy/psy_bg1.png",
              questionDetail: "桌上放着一瓶酒和一个柠檬，你会作何种联想？",
              option: {
                1: "水果可能是要加入酒中",
                2: "水果打成汁之后要加一点儿酒",
                3: "水果和酒根本就没有什么关系",
                4: "吃完水果后喝酒或喝完酒后吃水果",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 1) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/psy/psy_bg2.png",
              questionDetail:
                "准备开始一个人生活，在找房子的你，在房租相同的情况下，更重视哪个条件呢？",
              option: {
                1: "上班、上学方便的",
                2: "房间漂亮的",
                3: "阳光照射好的",
                4: "离商店近，购物方便的",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 2) {
        that.setData({
          ids: ids,
          listItems: [
            {
              img: "/assets/psy/psy_bg3.png",
              questionDetail:
                "每个人都或多或少有掉东西的经历。假设有一天，你骑车经过一个地方，发觉自己有东西掉了，可是又没有办法回去捡，这时你会检查自己的“装备”，最不希望掉的是以下哪一项？",
              option: {
                1: "移动电话",
                2: "男（女）友送的有纪念性的东西",
                3: "皮包（有钱及证件）",
                4: "刚买的心爱物品",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 3) {
        that.setData({
          ids: ids,

          listItems: [
            {
              img: "/assets/psy/psy_bg4.png",
              questionDetail:
                "其实有很多人外在形象跟内在形象差很多，下面这个测试就是从潜意识来看看究竟你的闷骚指数到底有多高：如果你要参加整人派对，如果要你好好整你的好朋友时，你会选择以下哪一种方式？",
              option: {
                1: "找朋友的老板一起过",
                2: "跟对方爱的表白",
                3: "找人妖大跳艳舞",
                4: "假扮警察临检找碴",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 4) {
        that.setData({
          ids: ids,

          listItems: [
            {
              img: "/assets/psy/psy_bg5.png",
              questionDetail: "你是哪种女人？若你是男人，你最欣赏哪种女人：",
              option: {
                1: "外表健康活泼、男朋友多、敢爱敢恨型的",
                2: "女强人型，聪明、能干事业心强又有家庭观念",
                3: "外表风骚动人、窈窈招摇、对异性充满魅力型",
                4: "贤淑文雅、大家闺秀、品学兼优型",
              },
              items: 4,
            },
          ],
        });
      }
      if (ids == 5) {
        that.setData({
          ids: 5,

          listItems: [
            {
              img: "/assets/psy/psy_bg6.png",
              questionDetail:
                "某富商家昨夜失窃，今日查明家中只有一样东西被偷，你觉得是什么？",
              option: {
                1: "名贵古董",
                2: "金银珠宝箱",
                3: "传家之宝",
                4: "与政商勾结的证据",
              },
              items: 4,
            },
          ],
        });
      }
    }
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
