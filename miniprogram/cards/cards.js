// pages/cards/cards.js
const app = getApp()

Page({
  data: {
    cards: [],
    selectedCard: null
  },

  onLoad() {
    this.initCards()
  },

  initCards() {
    const appData = app.globalData
    const cards = appData.chakraCards.map((card, index) => ({
      ...card,
      id: index,
      flipped: false
    }))
    
    this.setData({ cards })
  },

  flipCard(e) {
    const id = e.currentTarget.dataset.id
    const cards = this.data.cards.map(card => {
      if (card.id === id && !card.flipped) {
        return { ...card, flipped: true }
      }
      return card
    })
    
    this.setData({ 
      cards,
      selectedCard: cards[id]
    })
  },

  saveDiary() {
    const diary = {
      date: new Date().toISOString(),
      card: this.data.selectedCard,
      note: ''
    }
    
    app.globalData.diaryEntries.push(diary)
    
    wx.showToast({
      title: '已保存到日記',
      icon: 'success'
    })
    
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/diary/diary'
      })
    }, 1500)
  },

  reset() {
    this.setData({
      selectedCard: null
    })
    this.initCards()
  }
})
