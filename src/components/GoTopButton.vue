<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

function updateVisibility() {
  isVisible.value = window.scrollY > 500
}

function scrollToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}

onMounted(function () {
  updateVisibility()

  window.addEventListener('scroll', updateVisibility, {
    passive: true,
  })
})

onBeforeUnmount(function () {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<template>
  <Transition name="go-top-fade">
    <button
      v-show="isVisible"
      class="go-top-button"
      type="button"
      aria-label="回到頁首"
      title="回到頁首"
      @click="scrollToTop"
    >
      <svg class="go-top-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 19V5M6.5 10.5 12 5l5.5 5.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.go-top-button {
  position: fixed;
  right: calc(28px + env(safe-area-inset-right));
  bottom: calc(28px + env(safe-area-inset-bottom));
  z-index: 100;

  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;

  padding: 0;
  border: 1px solid rgba(138, 111, 53, 0.26);
  border-radius: 50%;

  color: #536f72;
  background: rgba(250, 249, 245, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 12px 32px rgba(52, 47, 42, 0.12);

  cursor: pointer;

  transition:
    transform 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease,
    box-shadow 0.22s ease;
}

.go-top-button:hover {
  transform: translateY(-4px);
  color: #342f2a;
  border-color: rgba(138, 111, 53, 0.48);
  background: rgba(255, 255, 255, 0.94);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.94),
    0 18px 40px rgba(52, 47, 42, 0.16);
}

.go-top-button:active {
  transform: translateY(-1px) scale(0.96);
}

.go-top-button:focus-visible {
  outline: 3px solid rgba(108, 152, 160, 0.42);
  outline-offset: 4px;
}

.go-top-icon {
  width: 22px;
  height: 22px;
}

.go-top-fade-enter-active,
.go-top-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.go-top-fade-enter-from,
.go-top-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.92);
}

@media (max-width: 640px) {
  .go-top-button {
    right: calc(18px + env(safe-area-inset-right));
    bottom: calc(18px + env(safe-area-inset-bottom));
    width: 44px;
    height: 44px;
  }

  .go-top-icon {
    width: 20px;
    height: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .go-top-button,
  .go-top-fade-enter-active,
  .go-top-fade-leave-active {
    transition: none;
  }
}
</style>
