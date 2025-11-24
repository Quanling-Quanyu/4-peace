// pages/index/index.js
const app = getApp()

Page({
  data: {
    cards: []
  },

  onLoad() {
    console.log('Index page loaded')
  },

  drawCard() {
    // 跳轉到卡片抽取頁面
    wx.navigateTo({
      url: '/pages/cards/cards'
    })
  },

  goToMeditation() {
    // 跳轉到冥想準備頁面
    wx.navigateTo({
      url: '/pages/meditation/meditation'
    })
  },

  onShareAppMessage() {
    return {
      title: '4-Peace 禪卡抽牌',
      path: '/pages/index/index'
    }
  }
})
