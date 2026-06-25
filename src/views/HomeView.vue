<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const router = useRouter()

const featuredCaseStudy = computed(function () {
  return projects.find(function (project) {
    return project.projectType === 'case-study' && project.featured === true
  })
})

const featuredProjects = computed(function () {
  return projects
    .filter(function (project) {
      return project.projectType !== 'case-study' && project.featured === true
    })
    .slice(0, 3)
})

const profileCards = [
  {
    title: 'Strategy & Information Architecture',
    subtitle: '企劃思考與資訊架構',
    description:
      '從使用者需求、內容脈絡與任務流程中梳理問題，將複雜資訊重新分類、排序與命名，建立清楚且容易理解的網站結構。',
  },
  {
    title: 'UI / UX & Visual Sensibility',
    subtitle: '介面設計與美感判斷',
    description:
      '從色彩、文字比例、畫面間距與資訊排列中細看每一處細節，讓內容能被自然理解、操作能夠順暢，也在反覆調整之間，找到功能與美感彼此協調的位置。',
  },
  {
    title: 'Front-End & AI Workflow',
    subtitle: '前端理解與 AI 協作流程',
    description:
      '具備 HTML、CSS、JavaScript 與 Vue 的學習背景，能在設計與實作之間理解版面、互動與技術條件，並運用 AI 協助需求拆解、視覺迭代、程式理解與除錯。',
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
        <p class="eyebrow">UI / UX & Visual Design Portfolio</p>

        <h1 class="hero-title">
          <span>採集聲音與故事，</span>
          <span>收藏日常微光，</span>
          <span>將片刻轉譯為</span>
          <span class="title-highlight">有溫度的</span>
          <span class="title-highlight">互動網頁。</span>
        </h1>

        <p class="intro">
          具有前端學習背景，並對視覺細節與使用者感受保持敏銳。從內容梳理、資訊層級到色彩、文字比例與操作情境，反覆推敲每一項選擇，將複雜構想整理成清楚、細膩且容易理解的網頁體驗。
        </p>

        <div class="hero-actions">
          <RouterLink to="/projects" class="primary-link">瀏覽作品集</RouterLink>
          <RouterLink to="/skills" class="secondary-link">看看我的設計思路</RouterLink>
        </div>
      </div>

      <div class="resonance-orb" aria-hidden="true">
        <div class="orb-core"></div>
      </div>
    </section>

    <section class="snapshot-section" aria-labelledby="snapshot-title">
      <div class="section-heading">
        <p class="eyebrow">Core Capabilities</p>
        <h2 id="snapshot-title">我的三項核心能力</h2>
      </div>

      <div class="profile-grid">
        <article v-for="(card, index) in profileCards" :key="card.title" class="profile-card">
          <p class="profile-index">0{{ index + 1 }}</p>

          <h3>{{ card.title }}</h3>

          <p class="profile-subtitle">
            {{ card.subtitle }}
          </p>

          <p class="profile-description">
            {{ card.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="featured-section" aria-labelledby="featured-case-title">
      <!-- 核心專題 -->
      <div class="section-heading featured-case-heading">
        <p class="eyebrow">Featured Case Study</p>
        <h2 id="featured-case-title">核心專題</h2>

        <p>
          從舊站問題梳理、使用者需求與資訊架構出發，逐步完成核心頁面與設計系統，記錄網站改版如何從分析轉化為具體介面。
        </p>
      </div>

      <RouterLink
        v-if="featuredCaseStudy"
        :to="`/projects/${featuredCaseStudy.id}`"
        class="featured-case-card"
      >
        <div class="featured-case-card__image">
          <img :src="featuredCaseStudy.image" :alt="`${featuredCaseStudy.title}專題封面`" />
        </div>

        <div class="featured-case-card__content">
          <p class="featured-case-card__category">UX / UI WEBSITE REDESIGN</p>

          <h3>{{ featuredCaseStudy.title }}</h3>

          <p class="featured-case-card__subtitle">
            {{ featuredCaseStudy.subtitle }}
          </p>

          <p class="featured-case-card__summary">
            {{ featuredCaseStudy.summary }}
          </p>

          <div class="featured-case-card__tags">
            <span v-for="tag in featuredCaseStudy.tags.slice(0, 4)" :key="tag">
              {{ tag }}
            </span>
          </div>

          <span class="featured-case-card__action">
            查看完整專題
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </RouterLink>

      <!-- 其他精選作品 -->
      <div class="section-heading secondary-project-heading">
        <p class="eyebrow">Interactive Projects</p>
        <h2>精選互動作品</h2>

        <p>
          透過Vue、JavaScript與視覺設計，將故事、生活觀察與互動概念轉化為可瀏覽、可操作的網頁作品。
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
      <p class="eyebrow">Design Process & AI Workflow</p>

      <h2 id="ai-title">設計思考與 AI 協作方式</h2>

      <p>
        從需求梳理、資訊架構到視覺方向與介面調整，透過反覆觀察與測試，逐步確認內容是否清楚、操作是否自然，以及不同頁面是否維持一致的設計語言。
      </p>

      <p>
        過程中運用 AI
        協助拆解問題、延伸設計方案、理解程式結構與排除錯誤；重要的企劃判斷、視覺選擇與修改方向，則依據專案目標與使用者感受進行取捨。
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
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 4.4vw, 3.65rem);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0.02em;
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

/* ========================================
   Homepage Button System
   首頁按鈕統一設定
======================================== */

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.primary-link,
.secondary-link,
.featured-case-card__action {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.primary-link,
.featured-case-card__action {
  color: #ffffff;
  background:
    radial-gradient(circle at 22% 16%, rgba(255, 255, 255, 0.2), transparent 34%),
    linear-gradient(135deg, #355c7d, #284e6b);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    0 14px 30px rgba(53, 92, 125, 0.18);
}

.primary-link:hover,
.featured-case-card:hover .featured-case-card__action {
  color: #ffffff;
  background:
    radial-gradient(circle at 22% 16%, rgba(255, 255, 255, 0.25), transparent 34%),
    linear-gradient(135deg, #3f6b8e, #2d5774);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.26),
    0 18px 38px rgba(53, 92, 125, 0.24);
  transform: translateY(-2px);
}

.secondary-link {
  border-color: rgba(53, 92, 125, 0.16);
  color: #355c7d;
  background:
    radial-gradient(circle at 24% 18%, rgba(255, 255, 255, 0.86), transparent 36%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(214, 232, 239, 0.42));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.84),
    0 10px 24px rgba(53, 92, 125, 0.07);
}

.secondary-link:hover {
  border-color: rgba(53, 92, 125, 0.3);
  color: #284e6b;
  background:
    radial-gradient(circle at 24% 18%, rgba(255, 255, 255, 0.92), transparent 36%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(214, 232, 239, 0.62));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 14px 30px rgba(53, 92, 125, 0.12);
  transform: translateY(-2px);
}

.primary-link:focus-visible,
.secondary-link:focus-visible,
.featured-case-card:focus-visible {
  outline: 3px solid rgba(108, 152, 160, 0.45);
  outline-offset: 4px;
}

.featured-case-card__action {
  width: fit-content;
  margin-top: 32px;
  pointer-events: none;
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

.featured-case-heading {
  margin-bottom: 0;
}

.featured-case-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(360px, 0.75fr);
  align-items: center;
  margin-bottom: 56px;
  border: 1px solid rgba(53, 92, 125, 0.1);
  border-radius: 32px;
  color: inherit;
  background:
    radial-gradient(circle at 88% 10%, rgba(214, 232, 239, 0.5), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(247, 246, 243, 0.82));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 28px 76px rgba(53, 92, 125, 0.1);
  text-decoration: none;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
}

.featured-case-card:hover {
  transform: translateY(-6px);
  border-color: rgba(53, 92, 125, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.94),
    0 38px 90px rgba(53, 92, 125, 0.16);
}

.featured-case-card:focus-visible {
  outline: 3px solid rgba(108, 152, 160, 0.45);
  outline-offset: 5px;
}

.featured-case-card__image {
  position: relative;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f6f3;
}

.featured-case-card__image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.featured-case-card:hover .featured-case-card__image img {
  transform: scale(1.01);
}

.featured-case-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px 40px;
}

.featured-case-card__category {
  margin: 0 0 18px;
  color: #9b7f43;
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.6;
  letter-spacing: 0.12em;
}

.featured-case-card__content h3 {
  margin: 0;
  color: #355c7d;
  font-size: clamp(2rem, 2.7vw, 2.7rem);
  line-height: 1.16;
  letter-spacing: -0.035em;
}

.featured-case-card__subtitle {
  margin: 14px 0 0;
  color: #70808a;
  font-size: 0.92rem;
  line-height: 1.65;
}

.featured-case-card__summary {
  margin: 24px 0 0;
  color: #53616a;
  font-size: 0.96rem;
  line-height: 1.85;
}

.featured-case-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.featured-case-card__tags span {
  padding: 7px 11px;
  border: 1px solid rgba(53, 92, 125, 0.13);
  border-radius: 999px;
  color: #355c7d;
  background: rgba(255, 255, 255, 0.68);
  font-size: 0.7rem;
  font-weight: 700;
}

.secondary-project-heading {
  margin-top: 8px;
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
  min-height: 300px;
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
  margin: 0;
  color: #342f2a;
  font-size: 1.22rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.profile-subtitle {
  position: relative;
  z-index: 1;
  margin: 8px 0 16px;
  color: rgba(138, 111, 53, 0.9);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.5;
}

.profile-description {
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 0.96rem;
  line-height: 1.85;
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

  .featured-case-card {
    grid-template-columns: 1fr;
  }

  .featured-case-card__image {
    min-height: auto;
    aspect-ratio: 8 / 5;
  }

  .featured-case-card__content {
    padding: 38px;
  }
}

@media (max-width: 640px) {
  .hero-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .primary-link,
  .secondary-link {
    width: 100%;
  }

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

  .profile-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .featured-case-card {
    min-height: auto;
    margin-bottom: 48px;
    border-radius: 24px;
  }

  .featured-case-card__image {
    aspect-ratio: 8 / 5;
  }

  .featured-case-card__content {
    padding: 28px 24px 30px;
  }

  .featured-case-card__content h3 {
    font-size: clamp(1.85rem, 9vw, 2.4rem);
  }

  .featured-case-card__summary {
    margin-top: 20px;
  }

  .featured-case-card__action {
    width: 100%;
    justify-content: center;
  }

  .primary-link:hover,
  .secondary-link:hover,
  .featured-case-card:hover .featured-case-card__action {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .primary-link,
  .secondary-link,
  .featured-case-card__action {
    transition: none;
  }

  .primary-link:hover,
  .secondary-link:hover,
  .featured-case-card:hover .featured-case-card__action {
    transform: none;
  }

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
