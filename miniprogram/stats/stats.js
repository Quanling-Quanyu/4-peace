// pages/stats/stats.js
const app = getApp()

Page({
  data: {
    totalDraws: 0,
    uniqueCards: 0,
    thisMonth: 0,
    cardStats: [],
    monthlyInsight: ''
  },

  onLoad() {
    this.calculateStats()
  },

  onShow() {
    this.calculateStats()
  },

  calculateStats() {
    const entries = app.globalData.diaryEntries
    const totalDraws = entries.length
    
    // 計算本月次數
    const now = new Date()
    const thisMonthEntries = entries.filter(entry => {
      const entryDate = new Date(entry.date)
      return entryDate.getMonth() === now.getMonth() && 
             entryDate.getFullYear() === now.getFullYear()
    })
    
    // 計算卡片頻率
    const cardFrequency = {}
    entries.forEach(entry => {
      const cardName = entry.card.name
      if (cardFrequency[cardName]) {
        cardFrequency[cardName].count++
      } else {
        cardFrequency[cardName] = {
          name: cardName,
          color: entry.card.color,
          count: 1
        }
      }
    })
    
    const cardStats = Object.values(cardFrequency)
      .sort((a, b) => b.count - a.count)
      .map(stat => ({
        ...stat,
        percentage: (stat.count / totalDraws) * 100
      }))
    
    // 生成洞察
    let insight = '繼續保持每日抽卡的習慣，了解自己的內在狀態。'
    if (cardStats.length > 0) {
      const topCard = cardStats[0]
      insight = `本月您最常抽到「${topCard.name}」，這可能代表您近期需要關注相關的能量平衡。`
    }
    
    this.setData({
      totalDraws,
      uniqueCards: Object.keys(cardFrequency).length,
      thisMonth: thisMonthEntries.length,
      cardStats,
      monthlyInsight: insight
    })
  }
})
