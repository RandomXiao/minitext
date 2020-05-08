// component/testResult/testResult.js
Component({
  options: {
    multipleSlots: true, // 多个slot声明
  },
  externalClasses: ["my-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    result: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    img: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
