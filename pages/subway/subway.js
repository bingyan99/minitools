// pages/subway/subway.js
var amapFile = require('../../utils/amap-wx.js');
const { Config } = require('../../utils/config.js');

Page({
  onLoad: function () {
    const that = this;
    wx.getLocation({
      type: 'gcj02', // 坐标类型为国测局坐标系
      success: function(res) {
        const latitude = res.latitude; // 纬度
        const longitude = res.longitude; // 经度
        
        // 在成功获取到位置后，调用获取地铁信息的函数
        that.getSubwayMap(latitude, longitude);
      },
      fail: function(err) {
        console.log(err);
      }
    })
  },
  getSubwayMap(latitude, longitude) {
    const myMap = new amapFile.AMapWX({ key: Config.key });
    
    myMap.getPoiAround({
      location: `${longitude},${latitude}`, // 经纬度格式为"经度,纬度"
      keywords: '珠江新城', // 关键词为地铁站
      success: function(data) {
        const subwayStations = data.pois; // 获取地铁站点列表
        
        // 在这里处理地铁站点数据，比如展示地铁图或者显示附近的地铁站点列表等
        console.log(subwayStations);
      },
      fail: function(info) {
        console.log(info);
      }
    });
  },
});