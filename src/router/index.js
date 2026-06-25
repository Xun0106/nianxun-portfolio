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
    // 使用瀏覽器上一頁或下一頁時，
    // 回到瀏覽器先前記錄的捲動位置。
    if (savedPosition) {
      return savedPosition
    }

    // 在作品列表切換分類 query 時，
    // 保留使用者目前的瀏覽位置。
    if (to.path === '/projects' && from.path === '/projects' && to.fullPath !== from.fullPath) {
      return false
    }

    // 前往其他頁面時，從頁面頂端開始。
    return {
      top: 0,
      left: 0,
    }
  },
})

export default router
