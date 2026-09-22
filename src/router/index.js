import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: { title: 'الرئيسية' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: { title: 'من نحن' }
  },
  {
    path: '/methodology',
    name: 'Methodology',
    component: () => import('@/views/MethodologyPage.vue'),
    meta: { title: 'منهجنا في العمل' }
  },
  {
    path: '/corporate',
    name: 'Corporate',
    component: () => import('@/views/CorporatePage.vue'),
    meta: { title: 'للشركات والمؤسسات' }
  },
  {
    path: '/individuals',
    name: 'Individuals',
    component: () => import('@/views/IndividualsPage.vue'),
    meta: { title: 'للأفراد' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue'),
    meta: { title: 'تواصل معنا' }
  },
  {
    path: '/practice-areas/:slug',
    name: 'PracticeArea',
    component: () => import('@/views/practice-areas/PracticeAreaPage.vue'),
    meta: { title: 'مجالات العمل' }
  },
  {
    path: '/services/:slug',
    name: 'Service',
    component: () => import('@/views/services/ServicePage.vue'),
    meta: { title: 'خدماتنا القانونية' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  }
})

router.afterEach((to) => {
  const baseTitle = 'مؤسسة رامي شريف للمحاماة'
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | ${baseTitle}`
  } else {
    document.title = baseTitle
  }
})

export default router
