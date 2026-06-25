<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import GoTopButton from '@/components/GoTopButton.vue'
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
            Strategy & Information Architecture · UI / UX Design · Front-End Understanding
          </p>
        </div>

        <p class="footer-line">以細膩觀察梳理資訊，將感受與構想轉化為清楚、有溫度的網頁體驗。</p>

        <p class="footer-copy">© 2026 謝念纁. All rights reserved.</p>
      </div>
    </footer>

    <GoTopButton />
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
  font-family: var(--font-body);
}

.footer-inner {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 34px 36px;
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
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.035em;
}

.footer-subtitle {
  max-width: 760px;
  margin: 10px 0 0;
  color: rgba(138, 111, 53, 0.8);
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer-line {
  max-width: 680px;
  margin: 26px 0 0;
  color: rgba(94, 87, 79, 0.92);
  font-size: 0.96rem;
  line-height: 1.85;
  letter-spacing: 0.015em;
}

.footer-copy {
  margin: 20px 0 0;
  color: rgba(94, 87, 79, 0.58);
  font-size: 0.82rem;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .page-main {
    width: min(calc(100% - 28px), 1120px);
    padding: 32px 0 64px;
  }

  .site-footer {
    padding-bottom: 32px;
  }

  .footer-inner {
    width: min(calc(100% - 28px), 1120px);
    padding: 28px 24px;
    border-radius: 26px;
  }

  .footer-title {
    font-size: 1.2rem;
  }

  .footer-subtitle {
    font-size: 0.7rem;
    line-height: 1.8;
    letter-spacing: 0.08em;
  }

  .footer-line {
    margin-top: 22px;
    font-size: 0.92rem;
  }

  .footer-copy {
    margin-top: 18px;
  }
}
</style>
