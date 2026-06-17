<script setup>
const skillGroups = [
  {
    title: 'Front-End Basics',
    subtitle: '前端基礎能力',
    description:
      '練習使用 HTML 建立語意結構，透過 CSS 控制版面、RWD 與視覺細節，並以 JavaScript 操作資料、事件與互動邏輯。',
    tags: ['HTML', 'CSS', 'JavaScript', 'RWD', 'DOM'],
  },
  {
    title: 'Vue Learning',
    subtitle: 'Vue 資料流與元件化',
    description:
      '目前正在學習用 Vue 的資料綁定、條件渲染、列表渲染、computed、props、emits 與 Vue Router，建立可維護的多頁作品集架構。',
    tags: ['v-model', 'v-for', 'computed', 'props', 'emits', 'router params'],
  },
  {
    title: 'UI / UX Thinking',
    subtitle: '使用者體驗與視覺思考',
    description:
      '從使用者情境、資訊層級、手機版閱讀體驗與色彩氛圍出發，思考作品如何被理解、被操作，也如何透過版面傳達情緒。',
    tags: ['User Flow', 'Visual Hierarchy', 'Color Study', 'Responsive UI'],
  },
  {
    title: 'AI-assisted Workflow',
    subtitle: 'AI 協作學習流程',
    description:
      '透過 AI 協助拆解需求、延伸設計方案、產出程式碼、除錯與整理學習筆記，並在反覆測試中建立自己的前端理解。',
    tags: ['Prompting', 'Debugging', 'Iteration', 'Learning Notes'],
  },
]

const learningFocus = [
  '理解資料如何從 projects.js 流向 views 與 components',
  '練習用 props 將資料傳入子元件',
  '練習用 emits 讓子元件通知上層事件',
  '使用 Vue Router 建立首頁、技能頁、作品列表頁與作品詳細頁',
  '使用 route params 顯示不同作品內容',
  '使用 query 保存作品列表的分類狀態',
]
</script>

<template>
  <section class="skills-page">
    <header class="skills-hero">
      <p class="eyebrow">Skills Map</p>

      <h1>技能整理</h1>

      <p class="intro">
        這裡記錄我目前正在建立的前端能力：從 HTML、CSS、JavaScript 到 Vue，
        也包含視覺美學、使用者流程，以及 AI 協作下的學習方式。
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

    <section class="focus-section" aria-labelledby="focus-title">
      <div>
        <p class="eyebrow">Current Focus</p>

        <h2 id="focus-title">目前這個 Vue 作業正在練習的重點</h2>
      </div>

      <ul class="focus-list">
        <li v-for="item in learningFocus" :key="item">
          {{ item }}
        </li>
      </ul>
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

h1 {
  margin: 0 0 24px;
  color: #342f2a;
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  line-height: 1.2;
  letter-spacing: 0.04em;
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
  font-size: 1.75rem;
  line-height: 1.25;
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

.focus-section {
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  gap: 36px;
  align-items: start;
  padding: 36px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 8% 0%, rgba(255, 255, 255, 0.88), transparent 32%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.66), rgba(244, 246, 239, 0.38));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 20px 56px rgba(52, 47, 42, 0.055);
}

.focus-section h2 {
  margin: 0;
  color: #342f2a;
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 1.35;
}

.focus-list {
  margin: 0;
  padding-left: 1.2rem;
  color: rgba(94, 87, 79, 0.94);
  line-height: 1.9;
}

.focus-list li + li {
  margin-top: 8px;
}

@media (max-width: 900px) {
  .skill-grid,
  .focus-section {
    grid-template-columns: 1fr;
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

  .skill-card h2 {
    font-size: 1.45rem;
  }

  .focus-section {
    padding: 26px;
    border-radius: 26px;
  }
}
</style>
