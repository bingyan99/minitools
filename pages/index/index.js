// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: 0, // 状态栏的高度
    navBarHeight: 0, // 导航条的高度
    isIpad: '', // 是否为ipad

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad() {
    // 胶囊的信息
    const menuData = wx.getMenuButtonBoundingClientRect();
    // 状态栏的高度
    const systemInfo = wx.getSystemInfoSync();
    const statusBarHeight = systemInfo.statusBarHeight;
    const isIpad = systemInfo.platform !== 'devtools' && systemInfo.model.indexOf('iPad') > -1;
    // 导航条的高度
    const navBarHeight = menuData.height + (menuData.top - statusBarHeight) * 2;
    this.setData({ statusBarHeight, navBarHeight, isIpad });

    this.myAnimate()
  },
  /**
   * 执行滚动动画
   */
  myAnimate() {
    this.animate(
      '.user_avatar',
      [
        {
          transform: 'scale(1) translateY(8px)',
          offset: 0,
        },
        {
          transform: 'scale(.8) translateY(8px)',
          offset: 0.5,
        },
        {
          transform: 'scale(.6) translateY(8px)',
          offset: 1,
        },
      ],
      2000,
      {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: 0,
        endScrollOffset: 60,
      }
    );
    this.animate(
      '.nav',
      [
        {
          backgroundColor: '#4f55c0',
          opacity: '1',
          offset: 0,
        },
        {
          backgroundColor: '#6268c7',
          opacity: '0.95',
          offset: 0.61875,
        },
        {
          backgroundColor: '#8a8ed5',
          opacity: '0.9',
          offset: 1,
        },
      ],
      2000,
      {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: 0,
        endScrollOffset: 320,
      }
    );
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {

        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  gotoPage (e) {
    const { url } = e.currentTarget.dataset;
    wx.navigateTo({ url });
  }
})
