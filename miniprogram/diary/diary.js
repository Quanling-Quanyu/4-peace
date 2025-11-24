// pages/diary/diary.js
const app = getApp()

Page({
  data: {
    diaryEntries: []
  },

  onLoad() {
    this.loadDiaryEntries()
  },

  onShow() {
    this.loadDiaryEntries()
  },

  loadDiaryEntries() {
    const entries = app.globalData.diaryEntries.map(entry => ({
      ...entry,
      dateFormatted: this.formatDate(entry.date)
    }))
    
    this.setData({
      diaryEntries: entries.reverse()
    })
  },

  formatDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  },

  addNew() {
    wx.navigateTo({
      url: '/pages/cards/cards'
    })
  },

  viewDetail(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: this.data.diaryEntries[index].card.name,
      content: this.data.diaryEntries[index].note || '無筆記內容',
      showCancel: false
    })
  }
})
