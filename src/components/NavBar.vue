<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isHomeActive = computed(() => route.path === '/')
const isSkillsActive = computed(() => route.path === '/skills')
const isProjectsActive = computed(() => route.path.startsWith('/projects'))
</script>

<template>
  <header class="site-header">
    <nav class="nav-bar" aria-label="主要導覽">
      <RouterLink to="/" class="brand">
        謝念纁
        <span class="brand-divider" aria-hidden="true">｜</span>
        <span class="brand-en">Portfolio</span>
      </RouterLink>

      <div class="nav-links">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ 'is-active': isHomeActive }"
          :aria-current="isHomeActive ? 'page' : undefined"
        >
          首頁
        </RouterLink>

        <RouterLink
          to="/skills"
          class="nav-link"
          :class="{ 'is-active': isSkillsActive }"
          :aria-current="isSkillsActive ? 'page' : undefined"
        >
          技能
        </RouterLink>

        <RouterLink
          to="/projects"
          class="nav-link"
          :class="{ 'is-active': isProjectsActive }"
          :aria-current="isProjectsActive ? 'page' : undefined"
        >
          作品
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(138, 111, 53, 0.12);
  background: rgba(251, 248, 241, 0.82);
  box-shadow: 0 8px 28px rgba(52, 47, 42, 0.025);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.nav-bar {
  display: flex;
  width: min(1120px, calc(100% - 32px));
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin: 0 auto;
  font-family: var(--font-body);
}

/* 品牌名稱使用展示字體 */
.brand {
  display: inline-flex;
  align-items: baseline;
  color: #342f2a;
  font-family: var(--font-display);
  font-size: 1.18rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.035em;
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.brand:hover {
  color: #355c7d;
}

.brand-divider {
  margin: 0 2px;
  color: rgba(138, 111, 53, 0.48);
}

.brand-en {
  font-size: 0.96em;
  letter-spacing: 0.045em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  position: relative;
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 999px;
  color: #5e574f;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.nav-link:hover {
  color: #342f2a;
  background: rgba(255, 255, 255, 0.58);
  transform: translateY(-1px);
}

.nav-link.is-active {
  border-color: rgba(138, 111, 53, 0.15);
  color: #342f2a;
  background:
    radial-gradient(circle at 30% 18%, rgba(255, 255, 255, 0.76), transparent 38%),
    linear-gradient(135deg, rgba(218, 188, 120, 0.25), rgba(214, 232, 239, 0.3));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.72),
    0 8px 20px rgba(52, 47, 42, 0.045);
}

.brand:focus-visible,
.nav-link:focus-visible {
  outline: 3px solid rgba(108, 152, 160, 0.38);
  outline-offset: 4px;
}

/* 手機版 */
@media (max-width: 640px) {
  .nav-bar {
    min-height: auto;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    padding: 15px 0 14px;
  }

  .brand {
    justify-content: center;
    font-size: 1.12rem;
  }

  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    gap: 8px;
  }

  .nav-link {
    width: 100%;
    min-height: 42px;
    padding: 9px 10px;
    font-size: 0.9rem;
    text-align: center;
  }

  .nav-link:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brand,
  .nav-link {
    transition: none;
  }
}
</style>
