import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // 使用瀏覽器上一頁 / 下一頁時，優先回到瀏覽器記錄的位置
    if (savedPosition) {
      return savedPosition
    }

    // 如果只是停留在 /projects 頁面內切換 category query，
    // 不要捲回頂部，讓使用者留在原本正在瀏覽的位置。
    if (to.path === '/projects' && from.path === '/projects') {
      return false
    }

    // 其他頁面切換，回到頁面頂部。
    return { top: 0 }
  },
})

export default router
