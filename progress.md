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

**工作時間：**
- 約 1 小時（專案初始化與基礎架構搭建）
