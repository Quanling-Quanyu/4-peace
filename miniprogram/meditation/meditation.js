// pages/meditation/meditation.js
Page({
  data: {
    countdown: 60,
    isReady: false,
    timer: null
  },

  onLoad() {
    console.log('Meditation page loaded')
  },

  startMeditation() {
    this.setData({ countdown: 60 })
    
    this.data.timer = setInterval(() => {
      if (this.data.countdown > 0) {
        this.setData({
          countdown: this.data.countdown - 1
        })
      } else {
        this.setData({ isReady: true })
        clearInterval(this.data.timer)
        wx.showToast({
          title: '準備完成！',
          icon: 'success'
        })
      }
    }, 1000)
  },

  goToCards() {
    wx.redirectTo({
      url: '/pages/cards/cards'
    })
  },

  onUnload() {
    if (this.data.timer) {
      clearInterval(this.data.timer)
    }
  }
})
