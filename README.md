# 神經系統概念圖 2.0.2｜GitHub Pages 上傳包

這是神經系統的**獨立 2.0 測試版**，**不會自動修改你原有的 1.0 網站**。

## GitHub 上傳方式（重要）

1. 在 GitHub 建立新的 **Public** 儲存庫，例如 `ipad-test-neuron-v2`。不要使用原來的 `ipad-test-neuron`。
2. **先解壓縮**下載的 ZIP；GitHub 網站不會自動把 ZIP 展開部署。打開解壓縮後的資料夾，選取其中的全部檔案及 `icons` 資料夾，一次拖曳到新儲存庫的「Add file → Upload files」。**index.html、manifest.webmanifest、sw.js 必須在儲存庫根目錄**。
3. 按「Commit changes」提交。然後進入「Settings → Pages」，選擇「Deploy from a branch」→ `main` → `/(root)` → Save。
4. GitHub Pages 網址通常是 `https://你的帳號.github.io/ipad-test-neuron-v2/`。實際網址請以 GitHub Pages 畫面為準。
5. 用電腦及 iPad 確認拖曳、連線、判定、貼齊格線、重設後再操作，都與原版預期相符；驗收前不要替換原版。

## 在 iPad／iPhone 安裝

1. 使用 **Safari** 打開**已部署的 HTTPS 網址**，先等待完整載入。
2. 按「分享」→「加入主畫面」（某些版本可先選「更多」）；若有「作為網頁 App 開啟」選項，請啟用。
3. 主畫面會出現神經系統專用 Icon。點它即可像 App 一樣開啟。

## 在 Android 安裝

使用 Chrome 開啟 GitHub Pages 網址；在瀏覽器選單選「安裝應用程式」或「新增至主畫面」（名稱依裝置／瀏覽器而異）。

## 網頁離線能力

`manifest.webmanifest` 提供可安裝資訊，`sw.js` 在首次連網時快取 HTML、Icon 與必要檔案。頁面顯示「✓ 已準備離線使用」後，可以用飛航模式重新開啟做測試。**裝置有可能清除長期未使用的快取**，因此重要教學前建議重新確認。

注意：直接在電腦以 `file:///` 開啟 `index.html` 可以測試活動，但不會註冊 PWA 或安裝離線快取；必須透過 GitHub Pages 的 HTTPS 網址驗證。

## 活動行為

- 保留原版 12 張字卡、13 條必要關係。
- 拖字卡到畫布，或點字卡再點畫布放置；在畫布點兩張字卡建立／取消連線。
- **貼齊格線：關**為預設，按成「開」時，會先一次整理已放字卡，之後拖動自動吸附；不會排成正確答案。
- 「檢查架構」要求真正的上下位概念位置正確；感覺／運動神經與腦神經／脊神經的交叉分類連線不要求彼此上下。
- 「重設畫布」會移除字卡、連線及舊資料。

## 版本、授權與測試

此版基於老師提供的 1.0 HTML 與先前製作的 2.0.1，加入 PWA 設定及安裝 Icon；未對原站部署。原版本曾做桌面 Chromium／Playwright 的基本測試；新版仍需在學校 iPad Safari 實機及真實斷網下驗收。安裝是否可用依 Apple／Android 的版本和操作設定而異。
