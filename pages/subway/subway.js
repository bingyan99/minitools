// pages/subway/subway.js
var amapFile = require('../../utils/amap-wx.js');
const { Config } = require('../../utils/config.js');

Page({
  data: {
    cityList: [],
  },
  onLoad: function () {
    const that = this
    wx.request({
      url: 'https://webapi.amap.com/subway/data/citylist.json',
      data: {
        uid: new Date().getTime()
      },
      success ({ data }) {
        that.setData({ cityList: data.citylist })
      }
    })
  },
  gotoSubway (e) {
    const { adcode } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/webview/webview?src=${encodeURIComponent('http://101.33.202.68/?adcode=' + adcode)}` });
  }
});