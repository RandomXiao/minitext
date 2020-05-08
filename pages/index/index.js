var app = getApp();

Page({
  data: {
    itemList: [],
  },
  goPsy: function () {
    wx.navigateTo({
      url: "/pages/text-home/text-home?type=psy",
    });
  },
  goCharacter: function () {
    wx.navigateTo({
      url: "/pages/text-home/text-home?type=character",
    });
  },

  //生成不重复的随机数组
  selectRandom: function (num, from, to) {
    let arr = [];
    let json = {};
    let needNum;

    if (from - to >= 0) {
      return "起始值要小于末尾值";
    }

    if (to - from == to) {
      needNum = parseInt(to) + 1;
    } else {
      needNum = to - from;
    }
    if (num > needNum) {
      return;
    } else {
      while (arr.length < num) {
        let ranNum = Math.ceil(Math.random() * needNum);
        if (!json[ranNum]) {
          json[ranNum] = 1;
          arr.push(ranNum);
        }
      }
      return arr;
    }
  },

  onPullDownRefresh: function () {
    var itemId = this.selectRandom(6, 0, 5);
    // console.log(itemId);

    for (var i = 0; i <= 5; i++) {
      var types = Math.floor(Math.random() * 2 + 1);
      // var ids = Math.floor(Math.random() * 6);

      var temp = "itemList[" + i + "].type";
      var id = "itemList[" + i + "].id";
      var img = "itemList[" + i + "].img";
      var title = "itemList[" + i + "].title";
      var idx = itemId[i];
      var ids = idx - 1;
      if (types == 1) {
        this.setData({
          [temp]: "character",
          [id]: ids,
          [img]: "/assets/chara/chara_bg" + idx + ".png",
          [title]: app.globalData.titleItems[ids].title,
        });
      } else {
        this.setData({
          [temp]: "psy",
          [id]: ids,
          [img]: "/assets/psy/psy_bg" + idx + ".png",
          [title]: app.globalData.titleItems[ids + 6].title,
        });
      }
    }
  },

  onLoad: function (options) {
    this.onPullDownRefresh();
  },
});
