// component/x-list/x-list.js
// component/psy_list/psy_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testItems: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerTap(e) {
      let id = e.currentTarget.id;

      this.triggerEvent("testList", { id }, {});
    },
  },
});
