// pages/decision/decision.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      '卤菜',
      '炒面',
      '凉面',
      '炒菜',
      '肉夹馍',
      '酱香饼',
      '烤鸭'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  goDecision () {
    const num = Math.floor(Math.random() * this.data.list.length)
    wx.showModal({
      title: '',
      content: this.data.list[num],
      showCancel: false,
      success (res) {
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})