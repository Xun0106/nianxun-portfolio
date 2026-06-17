<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <nav class="nav-bar" aria-label="主要導覽">
      <RouterLink to="/" class="brand">謝念纁｜Portfolio</RouterLink>

      <div class="nav-links">
        <RouterLink to="/" class="nav-link">首頁</RouterLink>
        <RouterLink to="/skills" class="nav-link">技能</RouterLink>
        <RouterLink to="/projects" class="nav-link">作品</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(138, 111, 53, 0.16);
  background: rgba(251, 248, 241, 0.78);
  backdrop-filter: blur(18px);
}

.nav-bar {
  width: min(1120px, calc(100% - 32px));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  color: #342f2a;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 8px 14px;
  border-radius: 999px;
  color: #5e574f;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-link:hover {
  color: #342f2a;
  background: rgba(255, 255, 255, 0.56);
}

.nav-link.router-link-active {
  color: #342f2a;
  background: rgba(218, 188, 120, 0.24);
  box-shadow: inset 0 0 0 1px rgba(138, 111, 53, 0.18);
}

@media (max-width: 640px) {
  .nav-bar {
    min-height: auto;
    padding: 16px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
  }

  .nav-link {
    flex: 1;
    text-align: center;
  }
}
</style>
