// app.js - 4-Peace 禪卡抽牌小程序

App({
  globalData: {
    userInfo: null,
    cards: [
      { id: 1, name: '紅色', color: '#FF0000', chakra: '海底輪' },
      { id: 2, name: '橙色', color: '#FFA500', chakra: '臍輪' },
      { id: 3, name: '黃色', color: '#FFD700', chakra: '太陽輪' },
      { id: 4, name: '綠色', color: '#00FF00', chakra: '心輪' },
      { id: 5, name: '粉色', color: '#FFC0CB', chakra: '心輪延伸' },
      { id: 6, name: '藍色', color: '#0000FF', chakra: '喉輪' },
      { id: 7, name: '紫色', color: '#800080', chakra: '眉心輪' },
      { id: 8, name: '白色', color: '#FFFFFF', chakra: '頂輪' }
    ],
    todayCards: null
  },

  onLaunch: function() {
    console.log('4-Peace 小程序啟動');
    this.checkTodayCards();
  },

  checkTodayCards: function() {
    const today = this.formatDate(new Date());
    const lastDrawDate = wx.getStorageSync('lastDrawDate');
    if (lastDrawDate === today) {
      const todayCards = wx.getStorageSync('todayCards');
      if (todayCards) this.globalData.todayCards = todayCards;
    }
  },

  drawCards: function() {
    const cards = [...this.globalData.cards];
    const drawnCards = [];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      drawnCards.push(cards[randomIndex]);
      cards.splice(randomIndex, 1);
    }
    this.globalData.todayCards = drawnCards;
    wx.setStorageSync('todayCards', drawnCards);
    wx.setStorageSync('lastDrawDate', this.formatDate(new Date()));
    return drawnCards;
  },

  formatDate: function(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});
