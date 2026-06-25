<script setup>
const skillGroups = [
  {
    title: 'Strategy & Information Architecture',
    subtitle: '企劃思考與資訊架構',
    description:
      '從使用者需求、內容脈絡與任務流程中辨認問題，重新整理資訊的分類、順序與命名，讓網站結構更清楚，也讓使用者容易找到下一步。',
    tags: ['User Needs', 'Content Structure', 'User Flow', 'Sitemap'],
  },
  {
    title: 'UI / UX & Visual Sensibility',
    subtitle: '介面設計與美感判斷',
    description:
      '從色彩、文字比例、畫面間距與資訊排列中細看每一處細節，讓內容能被自然理解、操作能夠順暢，也在反覆調整之間，找到功能與美感彼此協調的位置。',
    tags: ['Visual Hierarchy', 'Responsive UI', 'Color System', 'Figma'],
  },
  {
    title: 'Front-End Understanding',
    subtitle: '前端理解與介面實作',
    description:
      '具備 HTML、CSS、JavaScript 與 Vue 的學習背景，能理解設計轉換成實際網頁時的版面結構、響應式呈現、元件資料與互動條件。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue', 'RWD'],
  },
  {
    title: 'AI-assisted Design Workflow',
    subtitle: 'AI 協作與迭代流程',
    description:
      '運用 AI 協助拆解需求、延伸視覺方向、理解程式與排除錯誤，再透過實際測試、比較與選擇，逐步收斂成符合專案目標的設計方案。',
    tags: ['Prompting', 'Visual Iteration', 'Debugging', 'Evaluation'],
  },
]

const designProcess = [
  {
    step: '01',
    title: '理解需求',
    description: '確認專案目標、內容範圍與使用者需要完成的任務，先釐清真正需要解決的問題。',
  },
  {
    step: '02',
    title: '梳理資訊',
    description: '整理內容層級、使用流程與頁面關係，將複雜資訊轉化為清楚且容易理解的網站架構。',
  },
  {
    step: '03',
    title: '建立視覺方向',
    description: '從色彩、字級、圖像與版面比例中，尋找符合主題氣質與使用情境的設計語言。',
  },
  {
    step: '04',
    title: '設計與驗證',
    description: '透過 Wireframe、Hi-Fi 與不同裝置畫面，反覆檢查內容閱讀、資訊層級與操作流程。',
  },
  {
    step: '05',
    title: '實作與調整',
    description: '理解前端結構與技術條件，在實際測試中修正版面、互動與響應式呈現的細節。',
  },
]

const perspectiveCards = [
  {
    title: 'Music & Sensibility',
    subtitle: '音樂與感受',
    description:
      '音樂與手碟經驗，讓我留意聲音的層次、停頓與情緒變化；這份感受也延伸到色彩選擇、畫面層次與互動細節之中。',
  },
  {
    title: 'Writing & Storytelling',
    subtitle: '文字與敘事',
    description:
      '文字創作與 Podcast 製作經驗，讓我習慣先梳理主題，再安排資訊出現的順序，使複雜內容能被清楚理解，也保留適當的情緒與故事感。',
  },
  {
    title: 'Teaching & Communication',
    subtitle: '教學與溝通',
    description:
      '教學經驗讓我持續留意對方是否能理解、哪些說法需要調整，也影響了我設計導覽、提示文字與操作流程的方式。',
  },
]
</script>

<template>
  <section class="skills-page">
    <header class="skills-hero">
      <p class="eyebrow">How I Think & Work</p>

      <h1>設計能力與工作方式</h1>

      <p class="intro">
        從需求梳理、資訊架構到介面設計與前端實作，這裡整理的不只是使用過的工具，也包含面對問題時的觀察方式、設計判斷與協作流程。透過細看內容、使用情境與視覺細節，逐步將想法轉化為清楚且具有一致感的網頁體驗。
      </p>
    </header>

    <section class="skill-grid" aria-label="技能分類">
      <article v-for="(skill, index) in skillGroups" :key="skill.title" class="skill-card">
        <p class="skill-index">0{{ index + 1 }}</p>

        <div class="skill-content">
          <p class="skill-subtitle">{{ skill.subtitle }}</p>

          <h2>{{ skill.title }}</h2>

          <p class="skill-description">
            {{ skill.description }}
          </p>

          <div class="tag-list" aria-label="技能關鍵字">
            <span v-for="tag in skill.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </section>

    <section class="process-section" aria-labelledby="process-title">
      <div class="process-intro">
        <p class="eyebrow">Design Process</p>

        <h2 id="process-title">從問題理解到介面呈現</h2>

        <p>
          每個專案的起點不一定相同，但會從需求、資訊與使用情境出發，在分析、設計、測試與調整之間逐步收斂。
        </p>
      </div>

      <ol class="process-list">
        <li v-for="item in designProcess" :key="item.step" class="process-item">
          <span class="process-step">
            {{ item.step }}
          </span>

          <div class="process-content">
            <h3>{{ item.title }}</h3>

            <p>{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="perspective-section" aria-labelledby="perspective-title">
      <div class="perspective-heading">
        <p class="eyebrow">Personal Perspective</p>

        <h2 id="perspective-title">不同經驗如何影響我的設計</h2>

        <p>
          音樂、文字、Podcast
          與教學並不是與設計分開的經歷，而是觀察情緒、整理資訊與理解他人的方式。這些經驗讓我在處理介面時，不只思考畫面是否好看，也留意內容如何被感受、理解與使用。
        </p>
      </div>

      <div class="perspective-grid">
        <article
          v-for="(item, index) in perspectiveCards"
          :key="item.title"
          class="perspective-card"
        >
          <p class="perspective-index">0{{ index + 1 }}</p>

          <h3>{{ item.title }}</h3>

          <p class="perspective-subtitle">
            {{ item.subtitle }}
          </p>

          <p class="perspective-description">
            {{ item.description }}
          </p>
        </article>
      </div>

      <RouterLink to="/projects" class="perspective-link">
        看看這些思考如何出現在作品中
        <span aria-hidden="true">→</span>
      </RouterLink>
    </section>
  </section>
</template>

<style scoped>
.skills-page {
  display: grid;
  gap: 56px;
  padding: 72px 0 88px;
}

.skills-hero {
  max-width: 820px;
}

.eyebrow {
  margin: 0 0 16px;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.skills-hero h1 {
  margin: 0 0 24px;
  color: #342f2a;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0.03em;
}

.intro {
  max-width: 760px;
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 1.08rem;
  line-height: 1.95;
  letter-spacing: 0.02em;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.skill-card {
  position: relative;
  min-height: 320px;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.88), transparent 34%),
    radial-gradient(circle at 88% 92%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(244, 246, 239, 0.42));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    inset 0 -1px 0 rgba(138, 111, 53, 0.045),
    0 20px 56px rgba(52, 47, 42, 0.06);
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: -45%;
  z-index: -1;
  opacity: 0.34;
  background: repeating-radial-gradient(
    circle at 82% 76%,
    rgba(108, 152, 160, 0.13) 0,
    rgba(108, 152, 160, 0.13) 1px,
    transparent 1px,
    transparent 24px
  );
  transform: rotate(-8deg);
  pointer-events: none;
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.skill-card::after {
  content: '';
  position: absolute;
  right: -64px;
  bottom: -64px;
  width: 184px;
  aspect-ratio: 1;
  z-index: -1;
  border-radius: 50%;
  border: 1px solid rgba(108, 152, 160, 0.12);
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.34), transparent 38%),
    radial-gradient(circle, rgba(108, 152, 160, 0.1), transparent 68%);
  box-shadow:
    0 0 0 18px rgba(108, 152, 160, 0.035),
    0 0 0 42px rgba(138, 111, 53, 0.025);
  pointer-events: none;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: rgba(138, 111, 53, 0.16);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    inset 0 -1px 0 rgba(138, 111, 53, 0.07),
    0 28px 72px rgba(52, 47, 42, 0.1);
}

.skill-card:hover::before {
  opacity: 0.56;
  transform: rotate(-8deg) scale(1.025);
}

.skill-index {
  margin: 0 0 34px;
  color: rgba(138, 111, 53, 0.72);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.skill-content {
  position: relative;
  z-index: 1;
}

.skill-subtitle {
  margin: 0 0 8px;
  color: rgba(138, 111, 53, 0.76);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.skill-card h2 {
  margin: 0 0 16px;
  color: #342f2a;
  font-size: clamp(1.45rem, 2.2vw, 1.7rem);
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.skill-description {
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.85;
  letter-spacing: 0.01em;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.tag {
  padding: 6px 11px;
  border: 1px solid rgba(138, 111, 53, 0.1);
  border-radius: 999px;
  color: rgba(94, 87, 79, 0.9);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(244, 246, 239, 0.38));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  font-size: 0.8rem;
  font-weight: 700;
}

.process-section {
  display: grid;
  grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
  gap: 52px;
  align-items: start;
  padding: 44px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 8% 0%, rgba(255, 255, 255, 0.88), transparent 32%),
    radial-gradient(circle at 94% 88%, rgba(108, 152, 160, 0.1), transparent 30%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.66), rgba(244, 246, 239, 0.38));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 20px 56px rgba(52, 47, 42, 0.055);
}

.perspective-section {
  display: grid;
  gap: 32px;
  padding-top: 24px;
}

.perspective-heading {
  max-width: 780px;
}

.perspective-heading h2 {
  margin: 0 0 16px;
  color: #342f2a;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.perspective-heading > p:last-child {
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 1.02rem;
  line-height: 1.9;
}

.perspective-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.perspective-card {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  padding: 28px;
  border-top: 1px solid rgba(138, 111, 53, 0.2);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(244, 246, 239, 0.18));
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background-color 0.24s ease;
}

.perspective-card:hover {
  transform: translateY(-4px);
  border-color: rgba(138, 111, 53, 0.5);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.68), rgba(244, 246, 239, 0.3));
}

.perspective-index {
  margin: 0 0 28px;
  color: rgba(138, 111, 53, 0.68);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.perspective-card h3 {
  margin: 0;
  color: #342f2a;
  font-size: 1.3rem;
  line-height: 1.4;
}

.perspective-subtitle {
  margin: 8px 0 16px;
  color: rgba(138, 111, 53, 0.88);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.perspective-description {
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.85;
}

.perspective-link {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(138, 111, 53, 0.32);
  color: #5e574f;
  font-weight: 800;
  text-decoration: none;
  transition:
    gap 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.perspective-link:hover {
  gap: 15px;
  color: #8a6f35;
  border-color: rgba(138, 111, 53, 0.7);
}

.perspective-link:focus-visible {
  outline: 3px solid rgba(108, 152, 160, 0.4);
  outline-offset: 5px;
  border-radius: 4px;
}

.process-intro {
  position: sticky;
  top: 120px;
}

.process-intro h2 {
  margin: 0;
  color: #342f2a;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.process-intro > p:last-child {
  margin: 18px 0 0;
  color: rgba(94, 87, 79, 0.9);
  line-height: 1.9;
}

.process-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-item {
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 20px;
  padding: 8px 0 30px;
}

.process-item:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 45px;
  bottom: 0;
  left: 23px;
  width: 1px;
  background: linear-gradient(to bottom, rgba(138, 111, 53, 0.25), rgba(108, 152, 160, 0.12));
}

.process-step {
  position: relative;
  z-index: 1;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid rgba(138, 111, 53, 0.16);
  border-radius: 50%;
  color: rgba(138, 111, 53, 0.9);
  background: rgba(255, 255, 255, 0.82);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 8px 22px rgba(52, 47, 42, 0.06);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.process-content {
  padding: 3px 0 0;
}

.process-content h3 {
  margin: 0 0 8px;
  color: #342f2a;
  font-size: 1.15rem;
  line-height: 1.4;
}

.process-content p {
  margin: 0;
  color: rgba(94, 87, 79, 0.9);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .skill-grid,
  .process-section {
    grid-template-columns: 1fr;
  }

  .process-intro {
    position: static;
  }

  .perspective-grid {
    grid-template-columns: 1fr;
  }

  .perspective-card {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .skills-page {
    gap: 44px;
    padding: 48px 0 64px;
  }

  .skill-card {
    min-height: auto;
    padding: 26px;
    border-radius: 26px;
  }

  .skill-index {
    margin-bottom: 28px;
  }

  .skill-card {
    min-height: 350px;
  }

  .process-section {
    gap: 36px;
    padding: 26px;
    border-radius: 26px;
  }

  .process-item {
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 16px;
    padding-bottom: 26px;
  }

  .process-step {
    width: 42px;
    height: 42px;
  }

  .process-item:not(:last-child)::before {
    top: 40px;
    left: 20px;
  }

  .perspective-section {
    gap: 28px;
  }

  .perspective-card {
    padding: 24px 4px;
  }

  .perspective-index {
    margin-bottom: 20px;
  }

  .perspective-link {
    align-items: flex-start;
    line-height: 1.6;
  }
}
</style>
