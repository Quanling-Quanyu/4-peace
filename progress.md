# 4-Peace 專案工作進度

## 專案資訊
- **專案名稱**: 4-Peace 禪卡抽牌微信小程序
- **專案描述**: 八色脈輪禪卡線上抽牌系統，含日記功能與數據統計
- **建立日期**: 2025-11-24
- **GitHub 倉庫**: https://github.com/Quanling-Quanyu/4-peace

---

## 開發階段大綱

### 階段 1: 專案初始化 ✅
- [x] 建立 GitHub 專案
- [x] 建立工作進度檔
- [ ] 設計專案資料夾結構
- [ ] 建立基本文件說明

### 階段 2: 前端開發
- [ ] 建立微信小程序基本框架
- [ ] 設計 LOGO 旋轉動畫頁面
- [ ] 設計九宮格牌面布局
- [ ] 實作抽牌功能
- [ ] 實作翻牌動畫
- [ ] 實作截圖/保存功能
- [ ] 實作日記功能

### 階段 3: 後端開發
- [ ] 設定 Azure 雲端儲存
- [ ] 設計資料庫結構
- [ ] 實作微信登入 API
- [ ] 實作抽牌記錄儲存 API
- [ ] 實作日記儲存 API
- [ ] 實作統計資料 API

### 階段 4: 數據統計功能
- [ ] 設計統計表格式
- [ ] 實作每日色卡記錄
- [ ] 實作顏色出現次數統計
- [ ] 實作下載功能 (Excel/CSV/圖片)

### 階段 5: 測試與部署
- [ ] 功能測試
- [ ] 效能優化
- [ ] 微信小程序審核準備
- [ ] 正式部署

---

## 每日進度記錄

### 2025-11-24 (星期一)
**已完成:**
- ✅ 建立 GitHub 專案 "4-peace"
- ✅ 建立工作進度檔 (progress.md)

**進行中:**
- 設計專案資料夾結構

**下一步:**
- 建立微信小程序基本資料夾結構
- 建立 README.md 完整說明文件
- 設定 Azure 帳號與資源

**問題與注意事項:**
- 無

---

## 技術堆疊
- **前端**: 微信小程序 (WXML, WXSS, JavaScript)
- **後端**: Node.js / Python (Azure Functions)
- **資料庫**: Azure Cosmos DB / Azure Table Storage
- **雲端儲存**: Azure Blob Storage
- **身份驗證**: 微信登入 API

---

## 重要連結
- [專案需求文件](https://docs.google.com/document/d/1-Bt4F5aoRTlEZxSnFTemKtVteVvy-Ovz92vZeR_ubZk/edit)
- [GitHub 倉庫](https://github.com/Quanling-Quanyu/4-peace)

---

**更新日期**: 2025-11-24  


### 2025-11-24 更新

**已完成的工作：**

#### GitHub 專案設置
- ✅ 建立 GitHub 專案倉庫 "4-peace"
- ✅ 配置 .gitignore (Node 模板) 和 README.md
- ✅ 建立 progress.md 工作進度追蹤檔案
  - 包含 5 個開發階段大綱
  - 包含每日進度記錄框架
  - 包含技術堆疊說明
- ✅ 更新 README.md 為完整專案說明文件
  - 添加專案簡介與特色（含表情符號）
  - 添加技術棧說明
  - 添加完整的專案結構圖
  - 添加功能特色詳解
  - 添加開發指南

#### 微信小程序核心檔案
- ✅ 建立 `miniprogram/app.json`
  - 配置 5 個頁面：index, meditation, cards, diary, stats
  - 設定視窗樣式與導航欄
  - 配置懶加載優化
- ✅ 建立 `miniprogram/app.js`
  - 實作八色禪卡全局數據（紅、橙、黃、綠、粉、藍、紫、白）
  - 實作抽牌功能（不重複随機抽取8張）
  - 實作本地存儲功能
  - 實作日期檢查功能
  - 實作日期格式化函數
- ✅ 建立 `miniprogram/app.wxss`
  - 全局樣式配置
  - 按鈕通用樣式 (btn-primary, btn-secondary)
  - 牌面通用樣式 (card)
  - 文字通用樣式

#### Azure 雲端設置
- ✅ 建立 Azure 資源群組 "4-peace-rg"
  - 區域：East Asia
  - 訂用帳戶：Azure subscription 1

**當前專案狀態：**
- GitHub Commits: 6 個提交
- 檔案結構：
  - miniprogram/ (包含 app.json, app.js, app.wxss)
  - README.md (完整專案說明)
  - progress.md (工作進度追蹤)
  - .gitignore

**下一步工作：**
1. 建立 pages 資料夾結構和基礎頁面檔案
2. 建立 Azure Storage Account
   - Table Storage 用於數據儲存
   - Blob Storage 用於圖片儲存
3. 設定 Azure 預算警示（每月上限 10 元台幣）
4. 建立 Azure Functions 用於後端 API
5. 實作微信小程序頁面功能

**問題與注意事項：**
- 無

- ### 2025-11-24 下午工作完成

**已完成項目：** ✅

1. **Azure Storage Account 建立完成**
   - 儲存體帳戶名稱：4peacestore
   - 資源群組：4-peace-rg
   - 區域：East Asia
   - 效能層級：標準 (Standard)
   - 複寫類型：本地備援儲存體 (LRS)
   - 帳戶種類：StorageV2 (一般用途 v2)
   - 部署狀態：成功 ✅
   - 建立時間：2025/11/24 上午11:57:23

2. **Azure 預算警示設定完成**
   - 預算名稱：4peace-budget
   - 預算範圍：Azure subscription 1
   - 預算金額：$10 USD/月
   - 重設期間：每月 (Monthly)
   - 警示設定：
     - 警示 1：達到預算 80% ($8) 時發送郵件
     - 警示 2：達到預算 100% ($10) 時發送郵件
   - 警示收件者：stu3410@yahoo.com.tw
   - 狀態：已啟用 ✅

**目前 GitHub 狀態：**
- 總提交次數：7 commits
- 專案檔案結構完整
- Azure 雲端資源就緒

**下一批次工作：**
1. 建立 pages 資料夾結構（index, meditation, cards, diary, stats）
2. 為每個頁面建立基礎檔案（.wxml, .wxss, .js, .json）
3. 實作卡片抽取功能
4. 設定 Azure Functions 後端 API

**工作時間：**
- 約 1 小時（專案初始化與基礎架構搭建）


### 2025-11-24 晚間工作完成

**已完成項目：** ✅

**3. 微信小程序頁面檔案結構建立完成**
- ✅ **建立完整的 5 個頁面資料夾與檔案**（總計 20 個檔案）
  - ✅ `pages/index/` - 首頁（index.wxml, index.wxss, index.js, index.json）
  - ✅ `meditation/` - 靜心冥想頁面（meditation.wxml, meditation.wxss, meditation.js, meditation.json）
  - ✅ `cards/` - 抽牌頁面（cards.wxml, cards.wxss, cards.js, cards.json）
  - ✅ `diary/` - 日記頁面（diary.wxml, diary.wxss, diary.js, diary.json）
  - ✅ `stats/` - 統計頁面（stats.wxml, stats.wxss, stats.js, stats.json）

**各頁面功能說明：**
- **Index 首頁**：
  - LOGO 旋轉動畫展示
  - 顯示今日日期與歡迎訊息
  - 「開始今日禪修」按鈕跳轉至靜心頁面
  
- **Meditation 靜心冥想頁面**：
  - 播放輕音樂功能（可靜音）
  - 5 分鐘倒數計時器
  - 完成後自動跳轉至抽牌頁面
  
- **Cards 抽牌頁面**：
  - 3x3 九宮格牌面布局
  - 隨機抽取 8 張不重複色卡
  - 點擊翻牌動畫效果
  - 顯示脈輪顏色與名稱
  - 截圖/保存功能
  
- **Diary 日記頁面**：
  - 顯示當日抽到的牌面
  - 文字輸入區域記錄心情與感受
  - 儲存/提交功能
  
- **Stats 統計頁面**：
  - 月曆格式顯示每日抽牌記錄
  - 顏色出現次數統計
  - 圖表視覺化呈現
  - 下載功能（Excel/CSV/圖片）

**目前 GitHub 狀態：**
- 總提交次數：25+ commits
- 專案檔案結構完整
- 所有頁面基礎檔案就緒
- Azure 雲端資源已就緒

**下一批次工作：**
1. **進入測試階段**
2. 檢查程式碼邏輯與語法
3. 驗證頁面功能流程
4. 準備後端 API 開發（如需要）

**工作時間：**
- 約 30 分鐘（頁面檔案建立與驗證）
