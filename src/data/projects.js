const base = import.meta.env.BASE_URL

export const projects = [
  {
    id: 7,
    projectType: 'case-study',

    title: '金門水產試驗所網站改版',
    subtitle: 'Kinmen Fisheries Research Institute Website Redesign',
    category: 'UI / UX',

    summary:
      '重新梳理舊版網站的導覽架構與內容入口，建立一套涵蓋官方資訊、海洋教育、參觀活動與特色商城的新版網站體驗。',

    tags: ['UX Research', 'Information Architecture', 'Wireframe', 'UI Design', 'Design System'],

    featured: true,

    image: `${base}images/projects/kinmen-redesign/cover.png`,

    demoUrl: 'https://nchu-11503-kinmen-fishers.dev-hub.io/',

    overview:
      '本專題以金門縣水產試驗所既有網站為基礎，重新整理導覽架構、內容入口與跨頁面視覺系統，希望讓參觀、活動、海洋教育與購物等核心任務更容易被理解與完成。',

    role: 'UX Research、Information Architecture、Wireframe Design、UI Design、Design System、AI-assisted Visual Direction',

    contributions: [
      '舊版網站痛點分析',
      '使用者旅程與競品分析',
      'Sitemap 建構',
      '首頁資訊架構與 Wireframe 設計',
      '參觀與活動列表頁、詳情頁的 Wireframe 與 Hi-Fi 設計',
      '特色商城列表頁、商品詳情頁的 Wireframe 與 Hi-Fi 設計',
      '購物車、結帳流程與空購物車頁面的 Hi-Fi 設計',
      'Typography、Button、Tag、Chip 元件建立',
      'AI 圖像需求定義、生成迭代與介面整合',
      'Sitemap 與甘特圖等簡報圖表支援',
    ],

    collaboration:
      '首頁資訊架構與 Wireframe 由我負責，最終首頁 Hi-Fi 由團隊另一位設計師完成；前端實作由其他組員負責。',

    problems: [
      {
        title: '導覽與工具功能重疊',
        description:
          '舊版網站的導覽列與工具列包含部分相近或重複的功能，使用者不容易理解不同入口之間的差異。',
        strategy: '重新區分主導覽與工具導覽，將內容入口和語言、會員、購物車等操作功能分開。',
      },
      {
        title: '首頁內容優先順序不清',
        description:
          '舊版首頁較著重商城與定義不清的主題旅遊，使參觀、活動與海洋教育等核心內容不容易被理解。',
        strategy:
          '重新安排首頁資訊層級，先建立官方定位與核心任務入口，再帶入活動、教育、消息與商城。',
      },
      {
        title: '核心任務缺乏清楚分流',
        description:
          '參觀資訊、活動報名、海洋教育與商品瀏覽散落在不同區域，使用者不容易判斷下一步。',
        strategy: '以五大主入口重整網站內容，並建立參觀、活動、教育與商城等快速入口。',
      },
    ],

    sitemapImage: `${base}images/projects/kinmen-redesign/sitemap-before-after.png`,

    designSections: [
      {
        key: 'activity',
        label: 'ACTIVITY EXPERIENCE',
        title: '參觀與活動',
        description:
          '將偏公告式的活動資訊，重新整理為可瀏覽、可理解的活動體驗，強化活動時間、地點、亮點與流程的資訊層級。',
        image: `${base}images/projects/kinmen-redesign/activity-detail.png`,
      },
      {
        key: 'shop',
        label: 'FEATURED SHOP',
        title: '特色商城',
        description:
          '在官方網站的可信度與商品導購之間取得平衡，透過用途導購、搜尋、篩選與一致的商品卡系統，協助使用者探索金門海洋特色商品。',
        image: `${base}images/projects/kinmen-redesign/shop-list.png`,
      },
      {
        key: 'cart',
        label: 'CART & CHECKOUT',
        title: '購物車與結帳體驗',
        description:
          '透過商品明細、溫層資訊、運費、訂單摘要與流程提示，協助使用者理解目前的購物狀態與下一步操作。',
        image: `${base}images/projects/kinmen-redesign/cart.png`,
      },
    ],

    designSystem: ['Typography', 'Button component', 'Tag component', 'Chip component'],

    aiWorkflow:
      '我先根據頁面用途定義物種特徵、構圖位置、留白與視覺語氣，再透過提示詞調整、結果篩選與介面測試，讓 AI 生成素材能實際融入網站版面，而不是只作為獨立插圖存在。',
  },
  {
    id: 1,
    title: '微光採集誌',
    subtitle: 'Collection of Little Lights',
    category: 'Vue',
    summary:
      '以 Vue 製作的詩意收藏展示館，將日常中的聲音、味道與故事整理成可搜尋、可篩選、可抽選的微光卡片。',
    tags: ['Vue', 'v-model', 'v-for', 'computed', 'UI Design'],
    featured: true,
    image: `${base}images/projects/glimmer-journal-cover.png`,
    goal: '將「主題收藏展示館」作業轉化為一座具有策展感的個人收藏網站，練習使用 Vue 管理資料、新增卡片、篩選內容、排序與統計，同時建立一套溫柔、詩意、有展覽感的視覺語彙。',
    myRole:
      '我負責網站主題發想、分類命名、預設收藏內容、資訊架構、視覺方向策劃、功能取捨、畫面測試與學習筆記整理。',
    aiCollaboration:
      'AI 協助我拆解 Vue 功能、規劃 HTML 結構、產出部分程式碼、調整 CSS 視覺、分析 bug，並協助我把每一步學習整理成筆記。',
    features: [
      '使用 v-model 綁定表單欄位',
      '使用 v-for 渲染收藏卡片',
      '使用 computed 進行分類、搜尋、排序與統計',
      '可新增、刪除收藏卡片',
      '可展開與收起卡片筆記',
      '可隨機抽選今日微光',
      '不同分類有對應的 icon 與卡片色彩',
    ],
    learned:
      '這個作品讓我理解 computed 很適合用來根據原始資料來計算畫面需要呈現的結果，例如搜尋、分類、排序與統計。也讓我更具體感受到 Vue 的資料流：使用者輸入資料，資料進入陣列，畫面再透過 v-for 自動更新。',
    nextStep: [
      '改寫成正式 Vue 專案架構，拆成 components',
      '加入 localStorage 保存使用者新增的收藏',
      '讓分類按鈕有 active 狀態',
      '加入新增卡片後的淡入動畫',
      '提升手機版表單與卡片瀏覽體驗',
    ],
    githubUrl: 'https://github.com/Xun0106/glimmer-journal',
    demoUrl: 'https://xun0106.github.io/glimmer-journal/',
  },

  {
    id: 2,
    title: '極地役齡牌卡',
    subtitle: '兵役年齡初步查詢',
    category: 'JavaScript',
    summary:
      '以海豹牌卡降低兵役查詢時的壓力，透過 JavaScript 判斷年齡階段，並用翻牌互動呈現制度資訊。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Form Validation', 'Accessibility'],
    featured: true,
    image: `${base}images/projects/polar-age-card-cover.png`,
    goal: '將兵役年齡查詢這類容易讓人感到壓力的制度資訊，轉譯為低壓力、有儀式感、但仍保持資訊嚴謹度的互動查詢網站。',
    myRole:
      '我負責提出「抽一張役齡牌」的核心概念、五張結果牌卡設定、語氣方向、使用者流程調整、畫面測試與互動節奏修正。',
    aiCollaboration:
      'AI 協助整理兵役年齡判斷邏輯、規劃 HTML、CSS、JavaScript 架構，撰寫表單驗證、翻牌動畫、無障礙提醒視窗與法令補充文案。',
    features: [
      '戶籍登記性別與出生年月日輸入',
      '8 碼生日格式驗證與日期合法性檢查',
      '自動移除非數字輸入',
      '根據年齡階段顯示不同結果牌',
      '自動翻牌互動',
      '顯示柔和的文字說明、役期補充、制度補充與免責聲明',
      '加入 skip-link、alertdialog、focus-visible 與 prefers-reduced-motion 等無障礙設計',
    ],
    learned:
      '這個作品讓我練習如何把使用者輸入轉成可判斷的資料，也更理解表單驗證、日期解析、條件判斷與 DOM 更新之間的關係。它也讓我意識到，前端不只是讓畫面好看，更需要考慮資訊層級、使用者壓力與互動節奏。',
    nextStep: [
      '改寫成 Vue 版本，將牌卡資料拆成資料陣列',
      '將結果牌卡做成 reusable component',
      '加入更完整的資料來源說明',
      '增加查詢後的結果分享或截圖功能',
      '加入更細緻的極光背景動畫',
    ],
    githubUrl: 'https://github.com/Xun0106/polar-age-card',
    demoUrl: 'https://xun0106.github.io/polar-age-card/',
  },

  {
    id: 3,
    title: '與物欲對話',
    subtitle: '購物慾望過濾器',
    category: 'JavaScript',
    summary:
      '一個結合購物清單、預算控管與 3 秒冷靜倒數的 JavaScript 工具，協助使用者重新衡量消費衝動。',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Dashboard UI'],
    featured: true,
    image: `${base}images/projects/desire-filter-cover.png`,
    goal: '設計一個不是單純加入購物車的清單工具，而是透過三階段清單、預算儀表板、3 秒阻力倒數與機會成本換算，協助使用者在規劃購物前停下來思考。',
    myRole:
      '我負責提出「購物慾望過濾器」的核心概念、心理阻力機制、Needed / Wanted 分類、三階段清單流轉、視覺氣質選擇與使用者操作流程。',
    aiCollaboration:
      'AI 協助規劃資料狀態、撰寫 JavaScript 清單流轉邏輯、設計 dashboard 計算、加入 GSAP 動畫與協助整理專案文案。',
    features: [
      '使用者自訂欲新增的品項與價格',
      'Needed / Wanted 分類',
      '渴望度星等',
      '願望清單、購物車、歷史反思三階段流轉',
      '移入購物車前有 3 秒冷靜倒數',
      '預算進度條與剩餘金額提示',
      '購物金額換算 0050 股數與飲料杯數',
      '使用 GSAP 加入動畫回饋',
    ],
    learned:
      '這個作品讓我練習用 JavaScript 管理狀態，理解資料不是只顯示在畫面上，而是會隨著使用者操作在不同的狀態之間流動。它也讓我看見前端互動可以承載心理設計，不只是完成按鈕功能。',
    nextStep: [
      '加入 localStorage 保存清單',
      '加入編輯與刪除單筆品項功能',
      '將想要對等換算的品項改成可自行設定',
      '改寫成 Vue component 架構',
      '優化手機版 dashboard 的閱讀性',
    ],
    githubUrl: 'https://github.com/Xun0106/desire-filter',
    demoUrl: 'https://xun0106.github.io/desire-filter/',
  },

  {
    id: 4,
    title: '色彩圖鑑檢定',
    subtitle: '像素風色弱辨識遊戲',
    category: 'JavaScript',
    summary:
      '使用 HSL 色彩差異與遞增關卡設計，製作一款結合像素風、音效與具時間限制的色彩辨識小遊戲。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic', 'Web Audio API'],
    featured: false,
    image: `${base}images/projects/color-atlas-game-cover.png`,
    goal: '設計一款以找出不同顏色方塊為核心的小遊戲，練習遊戲狀態、關卡生成、計時器、錯誤提示、分數紀錄與互動回饋。',
    myRole:
      '我負責遊戲主題設定、像素風方向選擇、難度與懲罰機制需求、音效與暫停功能想法、測試回饋與除錯需求整理。',
    aiCollaboration:
      'AI 協助設計 HSL 色彩生成邏輯、遊戲迴圈、DOM 方塊生成、Web Audio API 音效、動畫特效與 bug 修復方向。',
    features: [
      '隨機產生不同的色彩方塊',
      '關卡提升時網格數增加',
      '色差辨識度隨關卡提高而變小',
      '倒數計時與答錯扣秒',
      '錯誤震動與扣秒浮動文字',
      '最高分紀錄',
      '暫停、重新開始、回主畫面',
      '使用 Web Audio API 產生 8-bit 音效',
    ],
    learned:
      '這個作品讓我理解遊戲不僅只是畫面呈現，而是由狀態、規則、事件、時間與回饋組合而成。我也開始理解如何用 JavaScript 動態產生 DOM 元素，以及如何讓使用者的每一次點擊改變遊戲狀態。',
    nextStep: [
      '加入難度選擇',
      '優化色差演算法，避免過亮時目標方塊的顏色失真',
      '補上鍵盤操作與更完整的無障礙提示',
      '改寫成 Vue 版本',
      '增加遊戲結果分享功能',
    ],
    githubUrl: 'https://github.com/Xun0106/color-atlas-game',
    demoUrl: 'https://xun0106.github.io/color-atlas-game/',
  },

  {
    id: 5,
    title: '海豹會員資料小卡產生器',
    subtitle: 'Vue 表單與即時預覽練習',
    category: 'Vue',
    summary: '一個練習 Vue 表單綁定、條件渲染與即時預覽的可愛會員卡產生器。',
    tags: ['Vue', 'v-model', 'v-if', 'v-show', 'v-bind:class'],
    featured: false,
    image: `${base}images/projects/seal-member-card-cover.png`,
    goal: '透過一個海豹會員小卡產生器，練習 Vue 表單綁定、條件判斷、即時預覽、圖片切換與 class 動態套用。',
    myRole: '我負責海豹會員等級設定、欄位需求、預覽互動邏輯、文字風格、畫面觀察與視覺調整方向。',
    aiCollaboration: 'AI 協助整理 Vue 語法、條件渲染邏輯、class 綁定方式與 CSS 視覺設計細節。',
    features: [
      '使用 v-model.trim 綁定姓名與圖片網址',
      '使用 v-model.number 綁定年齡',
      '根據會員等級切換預設圖片',
      '使用 v-if / v-else-if / v-else 顯示不同狀態',
      '使用 v-show 控制詳細資料是否顯示',
      '使用 v-bind:class 動態切換卡片樣式',
      'VIP 模式會改變卡片視覺',
    ],
    learned:
      '這個作品讓我更具體理解 Vue 的「資料驅動畫面」核心。我也練習到 v-if 和 v-show 的差異，以及如何透過 class 綁定讓同一張卡片根據不同資料呈現不同樣式。',
    nextStep: [
      '拆成 MemberForm 與 MemberCard components',
      '加入清空表單按鈕',
      '加入更多會員等級',
      '調整圖片網址錯誤時的 fallback',
      '加入 localStorage 保存上一次輸入結果',
    ],
    githubUrl: 'https://github.com/Xun0106/seal-member-card',
    demoUrl: 'https://xun0106.github.io/seal-member-card/',
  },

  {
    id: 6,
    title: '電影海報色彩分析與網頁配色練習',
    subtitle: 'Color Study for Web Interface',
    category: 'Visual Design',
    summary: '從電影海報中萃取色彩氛圍，練習將影像情緒轉譯為可應用於網頁介面的配色方案。',
    tags: ['Color Analysis', 'Visual Design', 'Moodboard', 'UI Color System'],
    featured: false,
    image: `${base}images/projects/movie-poster-color-study-cover.png`,
    galleryImages: [
      `${base}images/projects/movie-poster-color-study/poster-color-analysis-01.jpg`,
      `${base}images/projects/movie-poster-color-study/poster-color-analysis-02.jpg`,
      `${base}images/projects/movie-poster-color-study/poster-color-analysis-03.jpg`,
      `${base}images/projects/movie-poster-color-study/web-palette-practice-01.jpg`,
    ],
    goal: '透過電影海報與既有版型重新配色練習，觀察色彩如何形塑情緒、氛圍與視覺層級，並思考這些色彩語言如何轉譯到網頁介面中。',
    myRole:
      '我負責選擇海報、萃取色票、分析主色與輔色、描述影像氛圍，並將不同的情緒轉換成網頁介面配色練習。',
    aiCollaboration: '此作品未使用 AI 協作，為設計課程中的個人色彩分析與配色練習。',
    features: [
      '分析電影海報主色、輔色與氛圍',
      '觀察色相環上的色彩關係',
      '練習替同一版型設計不同情緒配色',
      '將影像感受轉換成可描述的視覺語言',
      '作為未來網頁配色與 UI moodboard 的參考',
    ],
    learned:
      '這個作品讓我意識到配色不是單純透過直覺挑好看的顏色，而是要思考顏色之間的關係、情緒暗示與畫面層級。它也幫助我在做網頁時，更有意識地選擇背景色、重點色與輔助色。',
    nextStep: [
      '將色票整理成可用於網頁的 CSS variables',
      '選一組配色延伸成小型 landing page',
      '補充每組配色的使用情境',
      '整理成 Visual Design Study 頁面',
    ],
  },
]
