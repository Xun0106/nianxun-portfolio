<!-- 作品列表頁
任務：讀取所有作品資料，產生多張作品卡，並接收作品卡發出的事件，來決定要跳到哪一個詳細頁。 -->

<script setup>
import { computed } from 'vue'

import { useRoute, useRouter } from 'vue-router'
//當你需要用函式控制跳頁時，使用 useRouter。
import { projects } from '@/data/projects'
// 引入建立好的作品資料，把 projects 這份資料拿進來使用。
import ProjectCard from '@/components/ProjectCard.vue'

const route = useRoute()
const router = useRouter()
// 建立一個可以控制路由的東西，可以想成是Vue Router的遙控器。
// 給我一個 router 工具，我把它存放到 router 這個變數裡。

const categories = ['全部', 'Vue', 'JavaScript', 'Visual Design']
const selectedCategory = computed(function () {
  return route.query.category || '全部'
  //如果網址有category，就用網址上的分類；沒有的話，就顯示全部。
})
const filteredProjects = computed(function () {
  if (selectedCategory.value === '全部') {
    return projects
  }
  return projects.filter(function (project) {
    return project.category === selectedCategory.value
  })
})

function changeCategory(category) {
  if (category === '全部') {
    router.push('/projects')
    return
  }

  router.push({
    path: '/projects',
    query: {
      category: category,
    },
  })
}

function goToProjectDetail(projectId) {
  if (selectedCategory.value === '全部') {
    router.push(`/projects/${projectId}`)
  }
  // 如果目前分類是全部，就進入/projects/作品id
  router.push({
    path: `/projects/${projectId}`,
    query: {
      from: selectedCategory.value,
    },
    //如果目前分類是 Vue / JS / Visual Design，就進入/projects/作品id?from=分類名稱
  })
}
// 負責跳轉到作品詳細頁。
// 這裡的 projectId 代表函式接收到的參數，它來自 ProjectCard.vue 發出的 emit。
</script>

<template>
  <section class="projects-page">
    <header class="projects-hero">
      <div class="projects-hero-text">
        <p class="eyebrow">Projects Archive</p>

        <h1>作品展館</h1>

        <p class="intro">
          這些作品多數來自前端課程練習與 AI
          協作。每一件作品都記錄了一次主題發想、一次功能拆解，以及一次又一次把想法落地成網頁的嘗試。
        </p>
      </div>

      <div class="projects-orb" aria-hidden="true"></div>
    </header>

    <section class="filter-panel" aria-label="作品分類篩選">
      <div class="filter-heading">
        <p class="filter-label">Filter by category</p>

        <p class="result-status">
          目前瀏覽「{{ selectedCategory }}」分類，共 {{ filteredProjects.length }} 件作品
        </p>
      </div>

      <div class="category-filter">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="category-button"
          :class="{ active: selectedCategory === category }"
          @click="changeCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <div class="project-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @view-project="goToProjectDetail"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-page {
  display: grid;
  gap: 44px;
  padding: 72px 0 88px;
}

.projects-hero {
  position: relative;
  overflow: hidden;
  min-height: 320px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 48px;
  align-items: center;
  padding: 42px;
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

.projects-hero::before {
  content: '';
  position: absolute;
  inset: -40%;
  opacity: 0.28;
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

.projects-hero-text {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 16px;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.projects-hero h1 {
  margin: 0 0 24px;
  color: #342f2a;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: 0.03em;
}

.intro {
  max-width: 720px;
  margin: 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 1.08rem;
  line-height: 1.95;
  letter-spacing: 0.02em;
}

.projects-orb {
  position: relative;
  z-index: 1;
  width: 220px;
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

.projects-orb::before,
.projects-orb::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.projects-orb::before {
  inset: 12%;
  border: 1px solid rgba(138, 111, 53, 0.12);
}

.projects-orb::after {
  inset: 32%;
  border: 1px solid rgba(108, 152, 160, 0.18);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 64%);
}

.filter-panel {
  display: grid;
  gap: 20px;
  padding: 24px 26px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.76), transparent 32%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.58), rgba(244, 246, 239, 0.32));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.76),
    0 16px 42px rgba(52, 47, 42, 0.045);
}

.filter-heading {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: baseline;
}

.filter-label {
  margin: 0;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.result-status {
  margin: 0;
  color: rgba(94, 87, 79, 0.78);
  font-size: 0.95rem;
  line-height: 1.6;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-button {
  padding: 9px 16px;
  border: 1px solid rgba(138, 111, 53, 0.12);
  border-radius: 999px;
  color: rgba(94, 87, 79, 0.92);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.64), rgba(244, 246, 239, 0.38));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.category-button:hover {
  transform: translateY(-1px);
  border-color: rgba(138, 111, 53, 0.22);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 10px 24px rgba(52, 47, 42, 0.06);
}

.category-button.active {
  color: #342f2a;
  border-color: rgba(138, 111, 53, 0.26);
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.86), transparent 34%),
    linear-gradient(135deg, rgba(218, 188, 120, 0.34), rgba(255, 255, 255, 0.68));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 12px 28px rgba(138, 111, 53, 0.1);
}

.category-button:focus-visible {
  outline: 3px solid rgba(138, 111, 53, 0.34);
  outline-offset: 4px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

@media (max-width: 960px) {
  .projects-hero {
    grid-template-columns: 1fr;
  }

  .projects-orb {
    position: absolute;
    right: -64px;
    top: 44px;
    width: 220px;
    opacity: 0.22;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .projects-page {
    gap: 32px;
    padding: 48px 0 64px;
  }

  .projects-hero {
    min-height: auto;
    padding: 28px;
    border-radius: 28px;
  }

  .projects-hero h1 {
    font-size: clamp(2.3rem, 12vw, 3.2rem);
    line-height: 1.3;
  }

  .intro {
    font-size: 1rem;
    line-height: 1.9;
  }

  .filter-panel {
    padding: 22px;
    border-radius: 24px;
  }

  .filter-heading {
    display: grid;
    gap: 8px;
  }

  .category-filter {
    gap: 8px;
  }

  .category-button {
    padding: 8px 13px;
    font-size: 0.92rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
