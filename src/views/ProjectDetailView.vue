<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()

const projectId = computed(() => Number(route.params.id))

const project = computed(() =>
  projects.find((item) => item.id === projectId.value),
)

const backToProjects = computed(() => {
  if (!route.query.from) {
    return '/projects'
  }

  return {
    path: '/projects',
    query: {
      category: route.query.from,
    },
  }
})
</script>

<template>
  <main v-if="project" class="detail-page">
    <!-- 金門大型專題 -->
    <div v-if="project.projectType === 'case-study'" class="case-study-page">
      <RouterLink :to="backToProjects" class="back-link case-study-back">
        ← 返回作品列表
      </RouterLink>

      <!-- Hero -->
      <header class="case-study-hero">
        <div class="case-study-hero__copy">
          <p class="case-eyebrow">FEATURED CASE STUDY</p>
          <h1>{{ project.title }}</h1>
          <p class="case-study-subtitle">{{ project.subtitle }}</p>
          <p class="case-study-summary">{{ project.summary }}</p>

          <div class="case-study-tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="case-study-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <figure class="case-study-cover">
          <img :src="project.image" :alt="`${project.title}專題封面`" />
        </figure>
      </header>

      <!-- 01 Project Overview -->
      <section class="case-study-section overview-section">
        <div class="case-section-heading">
          <p class="case-section-number">01</p>
          <div>
            <p class="case-eyebrow">PROJECT OVERVIEW</p>
            <h2>專案概覽</h2>
          </div>
        </div>

        <div class="overview-grid">
          <div class="overview-copy">
            <p>{{ project.overview }}</p>

            <div class="role-block">
              <p class="overview-label">MY ROLE</p>
              <p>{{ project.role }}</p>
            </div>

            <div class="collaboration-note">
              <p class="overview-label">TEAM COLLABORATION</p>
              <p>{{ project.collaboration }}</p>
            </div>
          </div>

          <div class="contribution-panel">
            <p class="overview-label">KEY CONTRIBUTIONS</p>
            <ul>
              <li v-for="item in project.contributions" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 02 Problem & Strategy -->
      <section class="case-study-section problem-section">
        <div class="case-section-heading">
          <p class="case-section-number">02</p>
          <div>
            <p class="case-eyebrow">PROBLEM & STRATEGY</p>
            <h2>核心問題與設計策略</h2>
          </div>
        </div>

        <div class="problem-grid">
          <article
            v-for="(problem, index) in project.problems"
            :key="problem.title"
            class="problem-card"
          >
            <p class="problem-index">0{{ index + 1 }}</p>
            <h3>{{ problem.title }}</h3>
            <p class="problem-description">{{ problem.description }}</p>

            <div class="strategy-block">
              <p class="strategy-label">DESIGN STRATEGY</p>
              <p>{{ problem.strategy }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- 03 Information Architecture -->
      <section class="case-study-section sitemap-section">
        <div class="case-section-heading">
          <p class="case-section-number">03</p>
          <div>
            <p class="case-eyebrow">INFORMATION ARCHITECTURE</p>
            <h2>從重疊入口，重新整理為五大主導覽</h2>
          </div>
        </div>

        <p class="case-section-intro">
          重新區分內容導覽與工具功能，並將參觀、教育、消息與商城整理為更容易理解與預期的入口。
        </p>

        <figure class="case-large-image">
          <img
            :src="project.sitemapImage"
            alt="金門水產試驗所改版前後 Sitemap 對照"
          />
          <figcaption>
            Sitemap Before／After｜本人負責資訊架構整理與圖表製作
          </figcaption>
        </figure>
      </section>

      <!-- 04 Selected Design Work -->
      <section class="case-study-section selected-work-section">
        <div class="case-section-heading">
          <p class="case-section-number">04</p>
          <div>
            <p class="case-eyebrow">SELECTED DESIGN WORK</p>
            <h2>核心頁面設計</h2>
          </div>
        </div>

        <div class="design-section-list">
          <article
            v-for="(section, index) in project.designSections"
            :key="section.key"
            class="design-showcase"
            :class="{ 'design-showcase--reverse': index % 2 === 1 }"
          >
            <div class="design-showcase__copy">
              <p class="case-eyebrow">{{ section.label }}</p>
              <h3>{{ section.title }}</h3>
              <p>{{ section.description }}</p>
            </div>

            <figure class="design-showcase__image">
              <img
                :src="section.image"
                :alt="`${project.title}－${section.title}`"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </section>

      <!-- 05 System & Collaboration -->
      <section class="case-study-section system-section">
        <div class="case-section-heading">
          <p class="case-section-number">05</p>
          <div>
            <p class="case-eyebrow">SYSTEM & COLLABORATION</p>
            <h2>設計系統與 AI 協作</h2>
          </div>
        </div>

        <div class="system-grid">
          <article class="system-card">
            <p class="case-eyebrow">DESIGN SYSTEM</p>
            <h3>建立跨頁面一致的元件語言</h3>
            <p>
              為了讓活動、商城與購物流程維持一致，我建立文字階層與多個共用元件規範。
            </p>

            <div class="system-tags">
              <span v-for="item in project.designSystem" :key="item">
                {{ item }}
              </span>
            </div>
          </article>

          <article class="system-card">
            <p class="case-eyebrow">AI-ASSISTED VISUAL WORKFLOW</p>
            <h3>將生成素材整合進實際介面</h3>
            <p>{{ project.aiWorkflow }}</p>

            <div class="workflow-line">
              <span>需求定義</span>
              <span aria-hidden="true">→</span>
              <span>Prompt 規劃</span>
              <span aria-hidden="true">→</span>
              <span>生成與篩選</span>
              <span aria-hidden="true">→</span>
              <span>介面測試</span>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- 原本六個作品 -->
    <section v-else class="standard-project-page">
      <RouterLink :to="backToProjects" class="back-link">
        ← 回到作品展館
      </RouterLink>

      <div class="case-layout">
        <aside class="case-sidebar" aria-label="作品摘要">
          <div class="sidebar-card">
            <p class="eyebrow">{{ project.category }}</p>
            <h1>{{ project.title }}</h1>
            <p class="sidebar-subtitle">{{ project.subtitle }}</p>

            <div class="sidebar-tags" aria-label="作品技術標籤">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="sidebar-note">
              <p class="note-label">Learning Context</p>
              <p>
                本作品為前端學習歷程中的案例紀錄，呈現主題發想、功能拆解、視覺迭代與程式理解的過程。
              </p>
            </div>

            <div class="project-links">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code ✦ 查看程式碼
              </a>

              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ✦ 查看線上作品
              </a>
            </div>
          </div>
        </aside>

        <div class="case-content">
          <header class="case-hero">
            <div class="case-hero-text">
              <p class="eyebrow">Case Study</p>
              <h2>{{ project.title }}</h2>
              <p class="summary">{{ project.summary }}</p>
            </div>

            <div class="hero-orb" aria-hidden="true"></div>
          </header>

          <div
            class="project-preview-stage"
            :class="{ 'has-image': project.image }"
            aria-label="作品預覽封面"
          >
            <img
              v-if="project.image"
              class="project-preview-image"
              :src="project.image"
              :alt="`${project.title} 的作品預覽圖`"
            />

            <template v-else>
              <div class="preview-content">
                <p class="preview-category">{{ project.category }}</p>
                <h2>{{ project.title }}</h2>
                <p>{{ project.subtitle }}</p>
              </div>

              <div class="preview-orb" aria-hidden="true"></div>
            </template>
          </div>

          <section
            v-if="project.galleryImages && project.galleryImages.length > 0"
            class="gallery-section"
            aria-label="作品圖片集"
          >
            <div class="gallery-heading">
              <p class="eyebrow">Visual Gallery</p>
              <h2>作品視覺展示</h2>
              <p>
                這組圖片記錄了從電影海報色彩觀察，到網頁配色應用練習的視覺轉譯過程。
              </p>
            </div>

            <div class="gallery-grid">
              <figure
                v-for="image in project.galleryImages"
                :key="image"
                class="gallery-item"
              >
                <img :src="image" :alt="`${project.title} 的作品展示圖`" />
              </figure>
            </div>
          </section>

          <section class="case-sections" aria-label="作品詳細內容">
            <article class="detail-section icon-goal">
              <p class="section-index">01</p>
              <h3>Project Goal｜作品目標</h3>
              <p>{{ project.goal }}</p>
            </article>

            <article class="detail-section icon-role">
              <p class="section-index">02</p>
              <h3>My Role｜我的角色</h3>
              <p>{{ project.myRole }}</p>
            </article>

            <article class="detail-section icon-ai">
              <p class="section-index">03</p>
              <h3>AI Collaboration｜AI 協作方式</h3>
              <p>{{ project.aiCollaboration }}</p>
            </article>

            <article class="detail-section list-section icon-features">
              <p class="section-index">04</p>
              <h3>Features｜功能亮點</h3>
              <ul>
                <li v-for="feature in project.features" :key="feature">
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </article>

            <article class="detail-section icon-learned">
              <p class="section-index">05</p>
              <h3>What I Learned｜我學到什麼</h3>
              <p>{{ project.learned }}</p>
            </article>

            <article class="detail-section list-section icon-next">
              <p class="section-index">06</p>
              <h3>下一步怎麼走？ Next Step</h3>
              <ul>
                <li v-for="step in project.nextStep" :key="step">
                  <span>{{ step }}</span>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="detail-page">
    <div class="not-found">
      <h1>找不到這件作品</h1>
      <p>這個作品可能不存在，或網址中的 id 不正確。</p>
      <RouterLink to="/projects" class="back-link">
        回到作品展館
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.detail-page {
  position: relative;
  display: grid;
  gap: 32px;
  padding: 56px 0 88px;
}

.detail-page::before {
  content: '';
  position: absolute;
  inset: -80px -8vw auto auto;
  width: min(520px, 72vw);
  aspect-ratio: 1;
  z-index: -1;
  border-radius: 50%;
  opacity: 0.28;
  background:
    repeating-radial-gradient(
      circle,
      rgba(108, 152, 160, 0.13) 0,
      rgba(108, 152, 160, 0.13) 1px,
      transparent 1px,
      transparent 28px
    ),
    radial-gradient(circle, rgba(255, 255, 255, 0.36), transparent 62%);
  pointer-events: none;
}

.detail-page::after {
  content: '';
  position: absolute;
  left: -10vw;
  bottom: 12%;
  width: min(420px, 70vw);
  aspect-ratio: 1;
  z-index: -1;
  border-radius: 50%;
  opacity: 0.22;
  background:
    radial-gradient(circle at 42% 38%, rgba(218, 188, 120, 0.22), transparent 34%),
    radial-gradient(circle at 64% 66%, rgba(108, 152, 160, 0.16), transparent 42%);
  filter: blur(2px);
  pointer-events: none;
}

.back-link {
  position: relative;
  z-index: 1;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  border: 1px solid rgba(138, 111, 53, 0.1);
  border-radius: 999px;
  color: rgba(94, 87, 79, 0.92);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(244, 246, 239, 0.38));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.back-link:hover {
  transform: translateY(-1px);
  border-color: rgba(138, 111, 53, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 10px 24px rgba(52, 47, 42, 0.06);
}

/* Standard project layout */
.standard-project-page {
  display: grid;
  gap: 32px;
}

.case-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(240px, 0.34fr) minmax(0, 0.66fr);
  gap: 28px;
  align-items: start;
}

.case-sidebar {
  position: sticky;
  top: 96px;
}

.sidebar-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 30px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 32px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.9), transparent 34%),
    radial-gradient(circle at 88% 92%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(244, 246, 239, 0.4));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    inset 0 -1px 0 rgba(138, 111, 53, 0.045),
    0 20px 56px rgba(52, 47, 42, 0.055);
}

.sidebar-card::before {
  content: '';
  position: absolute;
  inset: -45%;
  z-index: -1;
  opacity: 0.28;
  background: repeating-radial-gradient(
    circle at 82% 76%,
    rgba(108, 152, 160, 0.13) 0,
    rgba(108, 152, 160, 0.13) 1px,
    transparent 1px,
    transparent 24px
  );
  transform: rotate(-8deg);
  pointer-events: none;
}

.eyebrow {
  margin: 0 0 16px;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.sidebar-card h1 {
  margin: 0;
  color: #342f2a;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.16;
  letter-spacing: 0.04em;
}

.sidebar-subtitle {
  margin: 14px 0 0;
  color: rgba(122, 113, 103, 0.96);
  font-size: 1rem;
  line-height: 1.7;
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.tag {
  padding: 6px 11px;
  border: 1px solid rgba(138, 111, 53, 0.1);
  border-radius: 999px;
  color: rgba(94, 87, 79, 0.9);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(244, 246, 239, 0.38));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  font-size: 0.78rem;
  font-weight: 700;
}

.sidebar-note {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(138, 111, 53, 0.08);
}

.note-label {
  margin: 0 0 10px;
  color: rgba(138, 111, 53, 0.76);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.sidebar-note p:not(.note-label) {
  margin: 0;
  color: rgba(94, 87, 79, 0.9);
  font-size: 0.95rem;
  line-height: 1.85;
}

.project-links {
  display: grid;
  gap: 10px;
  margin-top: 26px;
}

.project-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid rgba(138, 111, 53, 0.12);
  border-radius: 999px;
  color: #342f2a;
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.86), transparent 34%),
    linear-gradient(135deg, rgba(218, 188, 120, 0.26), rgba(255, 255, 255, 0.58));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.76),
    0 10px 24px rgba(138, 111, 53, 0.07);
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.project-links a:hover {
  transform: translateY(-1px);
  border-color: rgba(138, 111, 53, 0.24);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.86),
    0 14px 30px rgba(138, 111, 53, 0.11);
}

.case-content {
  display: grid;
  gap: 28px;
}

.case-hero {
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 190px;
  gap: 36px;
  align-items: center;
  padding: 38px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 34px;
  background:
    radial-gradient(circle at 8% 0%, rgba(255, 255, 255, 0.9), transparent 34%),
    radial-gradient(circle at 88% 88%, rgba(108, 152, 160, 0.12), transparent 38%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.66), rgba(244, 246, 239, 0.38));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 20px 56px rgba(52, 47, 42, 0.055);
}

.case-hero::before {
  content: '';
  position: absolute;
  inset: -40%;
  opacity: 0.24;
  background: repeating-radial-gradient(
    circle at 84% 62%,
    rgba(108, 152, 160, 0.13) 0,
    rgba(108, 152, 160, 0.13) 1px,
    transparent 1px,
    transparent 26px
  );
  transform: rotate(-8deg);
  pointer-events: none;
}

.case-hero-text {
  position: relative;
  z-index: 1;
}

.case-hero h2 {
  margin: 0 0 18px;
  color: #342f2a;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.16;
  letter-spacing: 0.04em;
}

.summary {
  max-width: 680px;
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 1.05rem;
  line-height: 1.95;
  letter-spacing: 0.02em;
}

.hero-orb,
.preview-orb {
  position: relative;
  z-index: 1;
  aspect-ratio: 1;
  justify-self: end;
  border-radius: 50%;
  border: 1px solid rgba(138, 111, 53, 0.14);
  background:
    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.88), transparent 26%),
    radial-gradient(circle at 52% 50%, rgba(218, 188, 120, 0.18), transparent 34%),
    radial-gradient(circle at 72% 72%, rgba(108, 152, 160, 0.2), transparent 40%),
    linear-gradient(135deg, rgba(234, 232, 221, 0.76), rgba(153, 165, 164, 0.34));
  box-shadow:
    inset 0 1px 18px rgba(255, 255, 255, 0.82),
    inset 0 -18px 36px rgba(66, 72, 72, 0.08),
    0 24px 64px rgba(52, 47, 42, 0.08);
}

.hero-orb {
  width: 170px;
}

.preview-orb {
  width: 190px;
}

.hero-orb::before,
.hero-orb::after,
.preview-orb::before,
.preview-orb::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero-orb::before,
.preview-orb::before {
  inset: 12%;
  border: 1px solid rgba(138, 111, 53, 0.12);
}

.hero-orb::after,
.preview-orb::after {
  inset: 32%;
  border: 1px solid rgba(108, 152, 160, 0.18);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 64%);
}

.project-preview-stage {
  position: relative;
  overflow: hidden;
  min-height: 360px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 36px;
  align-items: center;
  padding: 42px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 32px;
  background:
    repeating-radial-gradient(
      circle at 72% 56%,
      rgba(108, 152, 160, 0.11) 0,
      rgba(108, 152, 160, 0.11) 1px,
      transparent 1px,
      transparent 28px
    ),
    radial-gradient(circle at 18% 10%, rgba(255, 255, 255, 0.9), transparent 34%),
    radial-gradient(circle at 78% 82%, rgba(218, 188, 120, 0.18), transparent 38%),
    linear-gradient(135deg, rgba(238, 245, 246, 0.9), rgba(251, 248, 241, 0.9));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 22px 64px rgba(52, 47, 42, 0.075);
}

.project-preview-stage::before {
  content: '';
  position: absolute;
  inset: -40%;
  opacity: 0.22;
  background: linear-gradient(
    115deg,
    transparent 0 44%,
    rgba(255, 255, 255, 0.5) 45% 47%,
    transparent 48% 100%
  );
  pointer-events: none;
}

.project-preview-stage.has-image {
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
}

.project-preview-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 520px;
  display: block;
  object-fit: contain;
  border-radius: 24px;
  box-shadow:
    0 18px 48px rgba(52, 47, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
}

.preview-content {
  position: relative;
  z-index: 1;
}

.preview-category {
  margin: 0 0 16px;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.preview-content h2 {
  margin: 0 0 14px;
  color: #342f2a;
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.16;
  letter-spacing: 0.04em;
}

.preview-content p:not(.preview-category) {
  margin: 0;
  color: rgba(94, 87, 79, 0.88);
  font-size: 1.05rem;
  line-height: 1.8;
}

.gallery-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 38px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 32px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.9), transparent 34%),
    radial-gradient(circle at 88% 92%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(244, 246, 239, 0.4));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 20px 56px rgba(52, 47, 42, 0.055);
}

.gallery-section::before {
  content: '';
  position: absolute;
  inset: -45%;
  z-index: -1;
  opacity: 0.22;
  background: repeating-radial-gradient(
    circle at 82% 76%,
    rgba(108, 152, 160, 0.13) 0,
    rgba(108, 152, 160, 0.13) 1px,
    transparent 1px,
    transparent 24px
  );
  transform: rotate(-8deg);
  pointer-events: none;
}

.gallery-heading {
  max-width: 720px;
  margin-bottom: 28px;
}

.gallery-heading h2 {
  margin: 0 0 12px;
  color: #342f2a;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.2;
  letter-spacing: 0.04em;
}

.gallery-heading p:not(.eyebrow) {
  margin: 0;
  color: rgba(94, 87, 79, 0.9);
  line-height: 1.85;
}

.gallery-grid {
  display: grid;
  gap: 22px;
}

.gallery-item {
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.58);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.76),
    0 16px 42px rgba(52, 47, 42, 0.06);
}

.gallery-item img {
  width: 100%;
  display: block;
}

.case-sections {
  position: relative;
  display: grid;
  gap: 22px;
}

.case-sections::before {
  content: '';
  position: absolute;
  top: 18px;
  bottom: 18px;
  left: 18px;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(138, 111, 53, 0.16) 12%,
    rgba(108, 152, 160, 0.14) 48%,
    rgba(138, 111, 53, 0.12) 82%,
    transparent
  );
  pointer-events: none;
}

.detail-section {
  position: relative;
  z-index: 1;
  overflow: hidden;
  isolation: isolate;
  padding: 32px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.88), transparent 34%),
    radial-gradient(circle at 88% 92%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(244, 246, 239, 0.4));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    inset 0 -1px 0 rgba(138, 111, 53, 0.045),
    0 18px 48px rgba(52, 47, 42, 0.055);
}

.detail-section::before {
  content: '';
  position: absolute;
  inset: -45%;
  z-index: -1;
  opacity: 0.24;
  background: repeating-radial-gradient(
    circle at 82% 76%,
    rgba(108, 152, 160, 0.13) 0,
    rgba(108, 152, 160, 0.13) 1px,
    transparent 1px,
    transparent 24px
  );
  transform: rotate(-8deg);
  pointer-events: none;
}

.detail-section::after {
  content: '';
  position: absolute;
  top: 28px;
  right: 28px;
  width: 54px;
  aspect-ratio: 1;
  z-index: -1;
  opacity: 0.42;
  pointer-events: none;
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.detail-section:hover::after {
  opacity: 0.62;
  transform: translateY(-2px) scale(1.03);
}

.icon-goal::after {
  border-radius: 50%;
  border: 1px solid rgba(138, 111, 53, 0.2);
  background:
    radial-gradient(circle, rgba(138, 111, 53, 0.28) 0 3px, transparent 4px),
    radial-gradient(circle, transparent 0 14px, rgba(108, 152, 160, 0.13) 15px 16px, transparent 17px),
    radial-gradient(circle, transparent 0 25px, rgba(138, 111, 53, 0.12) 26px 27px, transparent 28px);
}

.icon-role::after {
  border-radius: 50%;
  border: 1px solid rgba(138, 111, 53, 0.18);
  background:
    radial-gradient(circle at 50% 38%, rgba(255, 255, 255, 0.72) 0 5px, transparent 6px),
    radial-gradient(circle at 50% 40%, rgba(138, 111, 53, 0.46) 0 10px, transparent 11px),
    radial-gradient(ellipse at 50% 70%, rgba(108, 152, 160, 0.2) 0 18px, transparent 19px),
    radial-gradient(circle, transparent 0 25px, rgba(138, 111, 53, 0.12) 26px 27px, transparent 28px),
    linear-gradient(145deg, rgba(255, 255, 255, 0.5), rgba(218, 188, 120, 0.1));
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.62),
    inset 0 -8px 14px rgba(108, 152, 160, 0.08),
    0 0 0 7px rgba(138, 111, 53, 0.025);
}

.icon-ai::after {
  border-radius: 18px;
  border: 1px solid rgba(138, 111, 53, 0.12);
  background:
    radial-gradient(circle at 28% 50%, rgba(108, 152, 160, 0.32) 0 4px, transparent 5px),
    radial-gradient(circle at 72% 50%, rgba(138, 111, 53, 0.3) 0 4px, transparent 5px),
    linear-gradient(18deg, transparent 0 43%, rgba(108, 152, 160, 0.18) 44% 47%, transparent 48%),
    linear-gradient(-18deg, transparent 0 52%, rgba(138, 111, 53, 0.16) 53% 56%, transparent 57%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.34), transparent 62%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.44), rgba(244, 246, 239, 0.12));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.62),
    0 0 0 7px rgba(108, 152, 160, 0.025);
}

.icon-features::after {
  border-radius: 16px;
  border: 1px solid rgba(138, 111, 53, 0.14);
  background:
    linear-gradient(rgba(108, 152, 160, 0.16), rgba(108, 152, 160, 0.16)) 14px 15px / 26px 3px no-repeat,
    linear-gradient(rgba(138, 111, 53, 0.16), rgba(138, 111, 53, 0.16)) 14px 26px / 20px 3px no-repeat,
    linear-gradient(rgba(108, 152, 160, 0.14), rgba(108, 152, 160, 0.14)) 14px 37px / 28px 3px no-repeat,
    linear-gradient(135deg, rgba(255, 255, 255, 0.44), rgba(244, 246, 239, 0.14));
}

.icon-learned::after {
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, rgba(138, 111, 53, 0.3) 0 3px, transparent 4px),
    linear-gradient(90deg, transparent 0 44%, rgba(138, 111, 53, 0.18) 45% 55%, transparent 56%),
    linear-gradient(0deg, transparent 0 44%, rgba(138, 111, 53, 0.18) 45% 55%, transparent 56%),
    radial-gradient(circle, rgba(108, 152, 160, 0.1), transparent 62%);
  transform: rotate(45deg);
}

.icon-next::after {
  border-radius: 18px;
  border: 1px solid rgba(138, 111, 53, 0.12);
  background:
    linear-gradient(135deg, transparent 0 48%, rgba(108, 152, 160, 0.18) 49% 54%, transparent 55%),
    linear-gradient(135deg, transparent 0 62%, rgba(138, 111, 53, 0.22) 63% 68%, transparent 69%),
    radial-gradient(circle at 70% 28%, rgba(138, 111, 53, 0.26) 0 4px, transparent 5px),
    radial-gradient(circle at 34% 66%, rgba(108, 152, 160, 0.2) 0 4px, transparent 5px),
    linear-gradient(135deg, rgba(255, 255, 255, 0.42), rgba(244, 246, 239, 0.12));
}

.detail-section h3 {
  margin: 0 0 16px;
  color: #342f2a;
  font-size: 1.35rem;
  line-height: 1.35;
}

.section-index {
  position: relative;
  width: fit-content;
  margin: 0 0 24px;
  padding-left: 18px;
  color: rgba(138, 111, 53, 0.72);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.section-index::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(138, 111, 53, 0.44);
  box-shadow:
    0 0 0 4px rgba(138, 111, 53, 0.08),
    0 0 18px rgba(108, 152, 160, 0.14);
  transform: translateY(-50%);
}

.detail-section p {
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.85;
  letter-spacing: 0.01em;
}

.detail-section ul {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  list-style: none;
}

.detail-section li {
  position: relative;
  padding-left: 22px;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.75;
}

.detail-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(138, 111, 53, 0.42);
  box-shadow:
    0 0 0 4px rgba(138, 111, 53, 0.08),
    0 0 18px rgba(108, 152, 160, 0.14);
}

/* Kinmen case study */
.case-study-page {
  position: relative;
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 32px 0 120px;
  color: #38424a;
}

.case-study-back {
  display: inline-flex;
  margin-bottom: 40px;
}

.case-study-hero {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 56px;
  align-items: center;
  margin-bottom: 112px;
}

.case-study-hero__copy h1 {
  max-width: 620px;
  margin: 12px 0 14px;
  color: #355c7d;
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.case-eyebrow {
  margin: 0;
  color: #9b7f43;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.case-study-subtitle {
  margin: 0 0 24px;
  color: #66747e;
  font-size: 1rem;
  letter-spacing: 0.04em;
}

.case-study-summary {
  max-width: 580px;
  margin: 0;
  color: #52616b;
  font-size: 1.02rem;
  line-height: 1.9;
}

.case-study-tags,
.system-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.case-study-tag,
.system-tags span {
  padding: 8px 13px;
  border: 1px solid rgba(53, 92, 125, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  color: #355c7d;
  font-size: 0.78rem;
  font-weight: 600;
}

.case-study-cover {
  overflow: hidden;
  margin: 0;
  border: 1px solid rgba(53, 92, 125, 0.12);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 80px rgba(48, 69, 80, 0.13);
}

.case-study-cover img,
.case-large-image img,
.design-showcase__image img {
  display: block;
  width: 100%;
  height: auto;
}

.case-study-section {
  margin-top: 120px;
}

.case-section-heading {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 40px;
}

.case-section-heading h2 {
  margin: 8px 0 0;
  color: #355c7d;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.case-section-number {
  min-width: 54px;
  margin: 0;
  color: rgba(53, 92, 125, 0.18);
  font-size: 2rem;
  font-weight: 700;
}

.case-section-intro {
  max-width: 760px;
  margin: -12px 0 40px 78px;
  color: #60707a;
  line-height: 1.9;
}

.overview-grid,
.system-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.82fr);
  gap: 28px;
}

.overview-copy,
.contribution-panel,
.system-card,
.problem-card {
  border: 1px solid rgba(53, 92, 125, 0.1);
  border-radius: 26px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(242, 247, 247, 0.78));
  box-shadow: 0 20px 52px rgba(54, 69, 75, 0.07);
}

.overview-copy,
.contribution-panel,
.system-card {
  padding: 34px;
}

.overview-copy > p {
  margin-top: 0;
  font-size: 1.02rem;
  line-height: 1.9;
}

.overview-label,
.strategy-label {
  margin: 0 0 10px;
  color: #9b7f43;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.role-block,
.collaboration-note {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(53, 92, 125, 0.1);
}

.role-block p:last-child,
.collaboration-note p:last-child {
  margin-bottom: 0;
  line-height: 1.8;
}

.contribution-panel ul {
  display: grid;
  gap: 12px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.contribution-panel li {
  position: relative;
  padding-left: 20px;
  line-height: 1.65;
}

.contribution-panel li::before {
  content: '';
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d0b46f;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.problem-card {
  display: flex;
  min-height: 390px;
  flex-direction: column;
  padding: 30px;
}

.problem-index {
  margin: 0 0 30px;
  color: rgba(53, 92, 125, 0.2);
  font-size: 2.7rem;
  font-weight: 700;
}

.problem-card h3,
.design-showcase__copy h3,
.system-card h3 {
  margin: 0 0 18px;
  color: #355c7d;
  font-size: 1.5rem;
  line-height: 1.35;
}

.problem-description,
.design-showcase__copy > p:last-child,
.system-card > p {
  color: #5d6a72;
  line-height: 1.85;
}

.strategy-block {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid rgba(53, 92, 125, 0.1);
}

.strategy-block p:last-child {
  margin-bottom: 0;
  line-height: 1.7;
}

.case-large-image {
  overflow: hidden;
  margin: 0;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 28px 80px rgba(48, 69, 80, 0.1);
}

.case-large-image figcaption {
  padding: 16px 20px;
  color: #71808a;
  font-size: 0.82rem;
}

.design-section-list {
  display: grid;
  gap: 112px;
}

.design-showcase {
  display: grid;
  grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
}

.design-showcase--reverse {
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
}

.design-showcase--reverse .design-showcase__copy {
  order: 2;
}

.design-showcase--reverse .design-showcase__image {
  order: 1;
}

.design-showcase__copy h3 {
  margin-top: 10px;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.design-showcase__image {
  overflow: hidden;
  max-height: 720px;
  margin: 0;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0 25px 70px rgba(48, 69, 80, 0.11);
}

.system-card {
  min-height: 320px;
}

.workflow-line {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  margin-top: 28px;
  color: #355c7d;
  font-size: 0.82rem;
  font-weight: 600;
}

.not-found {
  padding: 40px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.58);
  box-shadow: 0 18px 48px rgba(52, 47, 42, 0.06);
}

.not-found h1 {
  font-size: 2rem;
}

@media (max-width: 960px) {
  .case-layout,
  .case-study-hero,
  .overview-grid,
  .system-grid,
  .problem-grid,
  .design-showcase,
  .design-showcase--reverse {
    grid-template-columns: 1fr;
  }

  .case-sidebar {
    position: static;
  }

  .case-hero {
    grid-template-columns: 1fr;
  }

  .hero-orb {
    position: absolute;
    right: -64px;
    top: 44px;
    width: 210px;
    opacity: 0.2;
  }

  .case-study-hero {
    gap: 36px;
  }

  .design-showcase--reverse .design-showcase__copy,
  .design-showcase--reverse .design-showcase__image {
    order: initial;
  }

  .problem-card {
    min-height: auto;
  }

  .case-section-intro {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .detail-page {
    gap: 28px;
    padding: 44px 0 64px;
  }

  .sidebar-card,
  .case-hero,
  .detail-section,
  .not-found {
    padding: 26px;
    border-radius: 26px;
  }

  .sidebar-card h1,
  .case-hero h2,
  .preview-content h2 {
    font-size: clamp(2rem, 11vw, 3rem);
  }

  .summary {
    font-size: 1rem;
    line-height: 1.9;
  }

  .case-sections::before {
    left: 14px;
  }

  .detail-section::after {
    top: 22px;
    right: 22px;
    width: 44px;
    opacity: 0.32;
  }

  .detail-section:hover::after {
    transform: none;
  }

  .project-preview-image {
    min-height: 220px;
    max-height: 520px;
    object-fit: contain;
    border-radius: 20px;
  }

  .preview-orb {
    position: absolute;
    right: -64px;
    bottom: -64px;
    width: 190px;
    opacity: 0.22;
  }

  .detail-page::before {
    right: -44vw;
    top: -40px;
    width: 360px;
    opacity: 0.18;
  }

  .detail-page::after {
    left: -48vw;
    bottom: 20%;
    width: 320px;
    opacity: 0.14;
  }

  .gallery-section {
    padding: 26px;
    border-radius: 26px;
  }

  .gallery-grid {
    gap: 16px;
  }

  .gallery-item {
    border-radius: 20px;
  }

  .case-study-page {
    width: min(100% - 32px, 1200px);
    padding-bottom: 80px;
  }

  .case-study-hero {
    margin-bottom: 80px;
  }

  .case-study-section {
    margin-top: 88px;
  }

  .case-section-heading {
    gap: 14px;
  }

  .case-section-number {
    min-width: 38px;
    font-size: 1.5rem;
  }

  .overview-copy,
  .contribution-panel,
  .system-card,
  .problem-card {
    padding: 24px;
    border-radius: 20px;
  }

  .design-section-list {
    gap: 76px;
  }

  .case-study-cover,
  .case-large-image,
  .design-showcase__image {
    border-radius: 20px;
  }
}
</style>
