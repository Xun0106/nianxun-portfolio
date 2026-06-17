<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />

    <main class="page-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-title">謝念纁｜Portfolio</p>
          <p class="footer-subtitle">
            Front-End Learning × Creative Storytelling × AI-assisted Workflow
          </p>
        </div>

        <p class="footer-line">以聲音、故事與網頁，持續採集日常裡的微光。</p>

        <p class="footer-copy">© 2026 謝念纁. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.page-main {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 80px;
}

.site-footer {
  padding: 0 0 48px;
}

.footer-inner {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 34px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 10% 0%, rgba(255, 255, 255, 0.88), transparent 34%),
    radial-gradient(circle at 90% 100%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.62), rgba(244, 246, 239, 0.34));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.78),
    0 18px 48px rgba(52, 47, 42, 0.045);
}

.footer-title {
  margin: 0;
  color: #342f2a;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.footer-subtitle {
  margin: 8px 0 0;
  color: rgba(138, 111, 53, 0.78);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.footer-line {
  margin: 24px 0 0;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.8;
}

.footer-copy {
  margin: 18px 0 0;
  color: rgba(94, 87, 79, 0.62);
  font-size: 0.86rem;
}

@media (max-width: 640px) {
  .page-main {
    width: min(100% - 28px, 1120px);
    padding: 32px 0 64px;
  }

  .site-footer {
    padding-bottom: 32px;
  }

  .footer-inner {
    width: min(100% - 28px, 1120px);
    padding: 26px;
    border-radius: 26px;
  }

  .footer-subtitle {
    line-height: 1.7;
  }
}
</style>
