// component/testModel/testModel.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },

    ids: {
      type: Number,
      value: 0,
    },
    listType: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 1,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    // questionDetail: app.globalData.question[0].question,
    // answerA: app.globalData.question[0].option.A,
    // answerB: app.globalData.question[0].option.B,
    // answerC: app.globalData.question[0].option.C,
    // answerD: app.globalData.question[0].option.D,
    list: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
    ],
  },
  methods: {},

  /**
   * 组件的方法列表
   */
  // methods: {
  //   onload: function(option) {
  //     // console.log(option.id);
  //   },
  // randSort: function() {
  //   return Math.random() > 0.5 ? 1 : -1;
  // },

  // setList: function() {
  //   var newList = this.data.list.sort(this.randSort);
  //   this.setData({
  //     list: newList
  //   });
  // },

  // setABC: function() {
  //   var abc = this.data.listABC.sort(this.randSort);
  //   this.setData({
  //     listABC: abc
  //   });
  //   // },

  //   goBefore: function() {
  //     if (this.data.index > 1) {
  //       this.setData({
  //         index: this.data.index - 1,
  //         realIndex: this.data.list[this.data.index]
  //       });
  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },
  //   setOption: function() {},

  //   answerClickA: function() {
  //     if (this.data.listABC[0] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[0] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[0] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[0] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "A") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },

  //   answerClickB: function() {
  //     if (this.data.listABC[1] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[1] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[1] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[1] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "B") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },

  //   answerClickC: function() {
  //     if (this.data.listABC[2] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[2] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[2] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[2] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "C") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },
  //   answerClickD: function() {
  //     if (this.data.listABC[3] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[3] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[3] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[3] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "D") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   }
  // }
});
