<!-- 作品卡片 -->
<!-- 任務：接收上層傳來的作品資料，並顯示在卡片上；當使用者點擊「查看作品」時，通知上層：這張作品卡被點了。 -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
// 這個 ProjectCard.vue 組件，會從外面收到一包叫做project的資料。
// 它不會自己擁有作品資料，只是等待上層把作品資料傳進來。
// 它本身不會知道要顯示哪一件作品，直到上層用這種方式傳資料給它：
// <ProjectCard :project='project'/> 這個不會寫在組件裡面，而是在引用組件的地方。

const emit = defineEmits(['view-project'])
// 這個組件會對外發出一個事件，這個事件的名字叫做 view-project，字面定義的意思是：我要查看某一件作品。

function handleViewProject() {
  emit('view-project', props.project.id)
  //我這張卡片被點了，作品id是這個，請上層決定接下來怎麼做。【下層通知上層發生事情】
  // 做了兩件事：第一，發出了 view-project 事件；第二，順便把目前這張作品卡的 id 傳出去
  // 第一個事件，上層會這樣接：@view-project='goToProjectDetail'，意思是：當我聽到 view-project 這個事件時，我就去執行 goToProjectDetail 這個函式。
}
</script>

<template>
  <article class="project-card">
    <div class="project-image-wrap">
      <img
        v-if="project.image"
        class="project-image"
        :src="project.image"
        :alt="`${project.title} 的作品預覽圖`"
      />
      <div v-else class="project-image-fallback" aria-hidden="true"></div>
    </div>

    <div class="project-content">
      <p class="project-category">{{ project.category }}</p>

      <h2>{{ project.title }}</h2>

      <p class="project-subtitle">{{ project.subtitle }}</p>

      <p class="project-summary">{{ project.summary }}</p>

      <div class="tag-list" aria-label="作品技術標籤">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>

      <button type="button" class="project-button" @click="handleViewProject">查看作品</button>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  padding: 18px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  border-radius: 30px;
  background:
    radial-gradient(circle at 12% 0%, rgba(255, 255, 255, 0.88), transparent 34%),
    radial-gradient(circle at 88% 92%, rgba(108, 152, 160, 0.1), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(244, 246, 239, 0.42));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    inset 0 -1px 0 rgba(138, 111, 53, 0.045),
    0 20px 56px rgba(52, 47, 42, 0.065);
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;
}

.project-card::before {
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

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(138, 111, 53, 0.18);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    inset 0 -1px 0 rgba(138, 111, 53, 0.07),
    0 28px 72px rgba(52, 47, 42, 0.105);
}

.project-card:hover::before {
  opacity: 0.58;
  transform: rotate(-8deg) scale(1.025);
}

.project-image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  margin: 0;
  border-radius: 24px;
  border: 1px solid rgba(138, 111, 53, 0.08);
  background:
    radial-gradient(circle at 30% 20%, rgba(218, 188, 120, 0.24), transparent 32%),
    radial-gradient(circle at 80% 84%, rgba(108, 152, 160, 0.12), transparent 34%),
    linear-gradient(135deg, #eef5f6, #fbf8f1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.72),
    0 12px 30px rgba(52, 47, 42, 0.055);
}

.project-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.34),
    transparent 36%,
    rgba(255, 255, 255, 0.08) 62%,
    transparent
  );
  opacity: 0.52;
  pointer-events: none;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.95) contrast(0.98);
  transition:
    transform 0.28s ease,
    filter 0.28s ease;
}

.project-card:hover .project-image {
  transform: scale(1.035);
  filter: saturate(1.02) contrast(1);
}

.project-content {
  flex: 1;
  padding: 40px 14px 14px;
  display: flex;
  flex-direction: column;
}

.project-category {
  margin: 0 0 10px;
  color: rgba(138, 111, 53, 0.76);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h2 {
  margin: 0 0 6px;
  color: #342f2a;
  font-size: 1.32rem;
  line-height: 1.35;
  letter-spacing: 0.01em;
}

.project-subtitle {
  margin: 0 0 14px;
  color: #7a7167;
  font-size: 0.95rem;
}

.project-summary {
  margin: 0 0 20px;
  color: rgba(94, 87, 79, 0.92);
  line-height: 1.72;
  letter-spacing: 0.015em;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 22px;
}

.tag {
  padding: 5px 10px;
  border: 1px solid rgba(138, 111, 53, 0.1);
  border-radius: 999px;
  color: rgba(94, 87, 79, 0.9);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(244, 246, 239, 0.38));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  font-size: 0.8rem;
  font-weight: 650;
}

.project-button {
  align-self: flex-start;
  margin-top: auto;
  padding: 10px 18px;
  border: 1px solid rgba(138, 111, 53, 0.18);
  border-radius: 999px;
  color: #342f2a;
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.86), transparent 34%),
    linear-gradient(135deg, rgba(218, 188, 120, 0.34), rgba(255, 255, 255, 0.7));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.76),
    0 10px 24px rgba(138, 111, 53, 0.09);
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.project-button:hover {
  transform: translateY(-2px);
  border-color: rgba(138, 111, 53, 0.28);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.82),
    0 14px 30px rgba(138, 111, 53, 0.14);
}

.project-button:focus-visible {
  outline: 3px solid rgba(138, 111, 53, 0.38);
  outline-offset: 4px;
}

.project-image-fallback {
  width: 100%;
  height: 100%;
  min-height: 220px;
  background:
    repeating-radial-gradient(
      circle at 78% 70%,
      rgba(108, 152, 160, 0.13) 0,
      rgba(108, 152, 160, 0.13) 1px,
      transparent 1px,
      transparent 22px
    ),
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.86), transparent 34%),
    radial-gradient(circle at 72% 78%, rgba(218, 188, 120, 0.12), transparent 36%),
    linear-gradient(135deg, rgba(238, 245, 246, 0.92), rgba(251, 248, 241, 0.92));
}

@media (max-width: 640px) {
  .project-card {
    padding: 14px;
  }

  .project-image-wrap {
    margin: 0;
    border-radius: 20px;
  }

  .project-content {
    padding: 30px 10px 10px;
  }

  .project-card::before {
    opacity: 0.28;
  }
}
</style>
