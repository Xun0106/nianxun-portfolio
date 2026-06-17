<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const router = useRouter()

const featuredProjects = computed(function () {
  return projects.filter(function (project) {
    return project.featured === true
  })
})

const profileCards = [
  {
    title: 'Front-End Learning',
    description: '學習 HTML、CSS、JavaScript 與 Vue，練習用資料流、元件化與路由架構組織網頁作品。',
  },
  {
    title: 'Creative Storytelling',
    description:
      '來自音樂、手碟、Podcast、文字創作與教學背景，喜歡從感受、故事與使用者情境出發建構作品。',
  },
  {
    title: 'AI-assisted Workflow',
    description:
      '透過 AI 協作進行需求拆解、程式學習、視覺迭代與除錯，並在反覆調整中建立自己的前端理解。',
  },
]

function goToProjectDetail(projectId) {
  router.push(`/projects/${projectId}`)
}

function updateHeroOrbScroll() {
  const scrollY = window.scrollY

  const maxScroll = 520

  const progress = Math.min(scrollY / maxScroll, 1)

  document.documentElement.style.setProperty('--hero-orb-progress', progress)
}

onMounted(function () {
  updateHeroOrbScroll()
  window.addEventListener('scroll', updateHeroOrbScroll, { passive: true })
})

onBeforeUnmount(function () {
  window.removeEventListener('scroll', updateHeroOrbScroll)
  document.documentElement.style.removeProperty('--hero-orb-progress')
})
</script>

<template>
  <section class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <p class="eyebrow">Front-End Learning Portfolio</p>

        <h1 class="hero-title">
          <span>採集聲音與故事，</span>
          <span>收藏日常微光，</span>
          <span>將片刻轉譯為</span>
          <span class="title-highlight">有溫度的</span>
          <span class="title-highlight">互動網頁。</span>
        </h1>

        <p class="intro">
          我是一位正在學習前端開發的創作者，透過 Vue、JavaScript、視覺設計與 AI-assisted
          workflow，將音樂、敘事、生活觀察與使用者體驗，整理成一件件可被瀏覽、理解與互動的網頁作品。
        </p>

        <div class="hero-actions">
          <RouterLink to="/projects" class="primary-link">查看作品集</RouterLink>
          <RouterLink to="/skills" class="secondary-link">查看技能整理</RouterLink>
        </div>
      </div>

      <div class="resonance-orb" aria-hidden="true">
        <div class="orb-core"></div>
      </div>
    </section>

    <section class="snapshot-section" aria-labelledby="snapshot-title">
      <div class="section-heading">
        <p class="eyebrow">About Snapshot</p>
        <h2 id="snapshot-title">我正在建立的三種能力</h2>
      </div>
    </section>

    <div class="profile-grid">
      <article v-for="(card, index) in profileCards" :key="card.title" class="profile-card">
        <p class="profile-index">0{{ index + 1 }}</p>

        <h3>{{ card.title }}</h3>

        <p>{{ card.description }}</p>
      </article>
    </div>

    <section class="featured-section" aria-labelledby="featured-title">
      <div class="section-heading">
        <p class="eyebrow">Featured Projects</p>
        <h2 id="featured-title">精選作品</h2>
        <p>
          這三件作品分別代表目前最想延伸的方向：個人策展型 Vue 作品、嚴肅資訊的柔性轉譯，<br
            class="desktop-break"
          />以及帶有心理設計感的 JavaScript 工具。
        </p>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
          @view-project="goToProjectDetail"
        />
      </div>
    </section>

    <section class="ai-section" aria-labelledby="ai-title">
      <p class="eyebrow">AI-assisted Learning</p>

      <h2 id="ai-title">關於我與 AI 的協作方式</h2>

      <p>本作品集中的多數專案為 AI-assisted learning projects。</p>

      <p>
        我負責主題發想、需求規劃、使用者流程設計、視覺方向選擇、Prompt
        撰寫、測試回饋與程式碼理解；AI
        則協助我進行程式碼產出、語法除錯、設計方案延伸與學習步驟拆解。
      </p>

      <p>
        對我來說，AI
        不是取代人類思考的捷徑，而是一位可以與我激盪靈感、反覆打磨、協助除錯，並陪伴我理解前端概念的開發陪跑者。
      </p>
    </section>
  </section>
</template>

<style scoped>
.home-page {
  display: grid;
  gap: 88px;
}

.hero-section {
  position: relative;
  min-height: 560px;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.75fr);
  gap: 72px;
  align-items: center;
  padding: 72px 0 64px;
}
.hero-content {
  position: relative;
  z-index: 2;
}

.eyebrow {
  margin: 0 0 16px;
  color: #8a6f35;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-title {
  display: grid;
  gap: 0.1em;
  max-width: 660px;
  margin: 0 0 34px;
  color: #342f2a;
  font-size: clamp(2.6rem, 4.4vw, 3.65rem);
  line-height: 1.22;
  letter-spacing: 0.04em;
  font-weight: 900;
}

.hero-title span {
  display: block;
}

.title-highlight {
  width: fit-content;
  padding-right: 0.08em;
  background: linear-gradient(90deg, #342f2a 0%, #536f72 46%, #8a6f35 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 18px 42px rgba(138, 111, 53, 0.12);
}

.intro {
  max-width: 660px;
  color: #5e574f;
  font-size: 1.08rem;
  line-height: 1.95;
  letter-spacing: 0.02em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.primary-link {
  color: #342f2a;
  border: 1px solid rgba(138, 111, 53, 0.32);
  background: linear-gradient(135deg, rgba(218, 188, 120, 0.46), rgba(255, 255, 255, 0.72));
  box-shadow: 0 12px 28px rgba(138, 111, 53, 0.14);
}

.secondary-link {
  color: #5e574f;
  border: 1px solid rgba(138, 111, 53, 0.18);
  background: rgba(255, 255, 255, 0.48);
}

.primary-link:hover,
.secondary-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(52, 47, 42, 0.1);
}

.resonance-orb {
  position: relative;
  min-height: 380px;
  display: grid;
  place-items: center;
  justify-items: end;
  transform: translateY(-24px);
  opacity: 1;
  will-change: transform;
}

.orb-core {
  position: relative;
  width: min(330px, 72vw);
  aspect-ratio: 1;
  border-radius: 50%;
  transform: rotate(calc(var(--hero-orb-progress, 0) * 90deg));
  filter: brightness(calc(1 + var(--hero-orb-progress, 0) * 0.14))
    saturate(calc(1 + var(--hero-orb-progress, 0) * 0.28))
    hue-rotate(calc(var(--hero-orb-progress, 0) * 10deg));
  transition: filter 0.2s ease;
  will-change: transform, filter;
  background:
    radial-gradient(circle at 36% 28%, rgba(255, 255, 255, 0.92), transparent 24%),
    radial-gradient(circle at 42% 38%, rgba(218, 188, 120, 0.34), transparent 30%),
    radial-gradient(circle at 78% 76%, rgba(108, 152, 160, 0.42), transparent 36%),
    linear-gradient(135deg, rgba(234, 232, 221, 0.86), rgba(153, 165, 164, 0.42));
  border: 1px solid rgba(138, 111, 53, 0.22);
  box-shadow:
    0 34px 90px rgba(52, 47, 42, 0.11),
    0 0 0 18px rgba(255, 255, 255, 0.18),
    inset 0 2px 22px rgba(255, 255, 255, 0.9),
    inset 0 -20px 40px rgba(66, 72, 72, 0.1);
}

.orb-core::before,
.orb-core::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.orb-core::before {
  inset: 10%;
  border: 1px solid rgba(138, 111, 53, 0.18);
  box-shadow: inset 0 0 24px rgba(255, 255, 255, 0.26);
  transform: rotate(calc(var(--hero-orb-progress, 0) * -42deg));
}

.orb-core::after {
  inset: 30%;
  border: 1px solid rgba(108, 152, 160, 0.24);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.28), transparent 64%);
  transform: rotate(calc(var(--hero-orb-progress, 0) * 56deg));
}

.snapshot-section,
.featured-section,
.ai-section {
  display: grid;
  gap: 32px;
}

.featured-section .section-heading {
  max-width: 780px;
}

.desktop-break {
  display: block;
}

.section-heading {
  max-width: 760px;
}

.section-heading h2,
.ai-section h2 {
  margin: 0 0 14px;
  color: #342f2a;
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  line-height: 1.3;
}

.section-heading p,
.ai-section p {
  margin: 0;
  color: #5e574f;
  line-height: 1.9;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: -48px;
}

.profile-card,
.ai-section {
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.86), transparent 32%),
    radial-gradient(circle at 86% 88%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(244, 246, 239, 0.42));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    inset 0 -1px 0 rgba(138, 111, 53, 0.045),
    0 18px 48px rgba(52, 47, 42, 0.055);
}

.profile-card {
  position: relative;
  min-height: 230px;
  padding: 28px;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease,
    background-color 0.24s ease;
}

.profile-card::before {
  content: '';
  position: absolute;
  inset: -40%;
  z-index: -1;
  opacity: 0.42;
  background: repeating-radial-gradient(
    circle at 82% 72%,
    rgba(108, 152, 160, 0.16) 0,
    rgba(108, 152, 160, 0.16) 1px,
    transparent 1px,
    transparent 22px
  );
  transform: rotate(-8deg);
  pointer-events: none;
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.profile-card::after {
  content: '';
  position: absolute;
  right: -56px;
  bottom: -56px;
  width: 168px;
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
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.profile-card:hover {
  transform: translateY(-4px);
  border-color: rgba(138, 111, 53, 0.16);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.86),
    inset 0 -1px 0 rgba(138, 111, 53, 0.075),
    0 26px 68px rgba(52, 47, 42, 0.09);
}

.profile-card:hover::before {
  opacity: 0.68;
  transform: rotate(-8deg) scale(1.025);
}

.profile-card:hover::after {
  transform: scale(1.06);
  opacity: 0.9;
}

.profile-card:nth-child(1)::before {
  background: repeating-radial-gradient(
    circle at 86% 78%,
    rgba(108, 152, 160, 0.15) 0,
    rgba(108, 152, 160, 0.15) 1px,
    transparent 1px,
    transparent 22px
  );
}

.profile-card:nth-child(2)::before {
  background: repeating-radial-gradient(
    circle at 74% 66%,
    rgba(138, 111, 53, 0.12) 0,
    rgba(138, 111, 53, 0.12) 1px,
    transparent 1px,
    transparent 20px
  );
}

.profile-card:nth-child(3)::before {
  background: repeating-radial-gradient(
    circle at 90% 58%,
    rgba(108, 152, 160, 0.14) 0,
    rgba(108, 152, 160, 0.14) 1px,
    transparent 1px,
    transparent 24px
  );
}

.profile-card:hover {
  transform: translateY(-4px);
  border-color: rgba(138, 111, 53, 0.28);
  box-shadow: 0 24px 64px rgba(52, 47, 42, 0.1);
}

.profile-index {
  position: relative;
  z-index: 1;
  margin: 0 0 28px;
  color: rgba(138, 111, 53, 0.72);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.profile-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 14px;
  color: #342f2a;
  font-size: 1.28rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.profile-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.85;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.ai-section {
  padding: 36px;
}

.ai-section p + p {
  margin-top: 16px;
}

@media (max-width: 960px) {
  .hero-section {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .resonance-orb {
    min-height: 260px;
  }

  .profile-grid,
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 36px 0 18px;
  }

  .hero-title {
    max-width: 100%;
    font-size: clamp(2rem, 9.6vw, 2.65rem);
    line-height: 1.3;
    letter-spacing: 0.02em;
    gap: 0.06em;
  }

  .title-highlight {
    width: fit-content;
  }

  .intro {
    font-size: 1rem;
    line-height: 1.9;
  }

  .resonance-orb {
    position: absolute;
    right: -96px;
    top: 120px;
    min-height: auto;
    opacity: 0.24;
    transform: translateY(calc(-16px + var(--hero-orb-progress, 0) * -8px));
    pointer-events: none;
  }

  .orb-core {
    width: 220px;
    transform: rotate(calc(var(--hero-orb-progress, 0) * 20deg));
  }

  .orb-core {
    width: 220px;
  }

  .profile-card {
    min-height: auto;
    padding: 24px;
  }

  .profile-index {
    margin-bottom: 20px;
  }

  .profile-card::before {
    opacity: 0.34;
  }

  .profile-card::after {
    width: 140px;
    right: -48px;
    bottom: -48px;
  }

  .profile-grid {
    margin-top: -32px;
  }

  .desktop-break {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .resonance-orb {
    transform: translateY(-24px);
  }

  .orb-core,
  .orb-core::before,
  .orb-core::after {
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
