import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import { useProjStore } from '../stores/proj'
import { useCategoriesStore } from '../stores/Categories'

import { useTheme } from "../utils/theme";
import { reactive, ref } from 'vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from) => {
        const { isFirstLoading, resetList } = useProjStore()
        resetList()
        isFirstLoading()

        return true

      },
      meta: { position: "work" },

    },

    {
      path: '/category',
      name: 'category',
      component: HomeView,
      meta: { position: "work" },

      beforeEnter: (to, from) => {

        const { isFirstLoading } = useProjStore()
        const { searchBycategory } = useProjStore()

        async function dd() {
          await isFirstLoading()
          console.log('加载完成')
          const categoryId = to.query.categoryId
          searchBycategory(categoryId)
        }
        dd()

        return true
      },
    },
    {
      path: '/tag',
      name: 'tag',
      component: HomeView,
      meta: reactive({ position: "work" }),

      beforeEnter: (to, from) => {

        const { isFirstLoading } = useProjStore()
        const { searchByTag } = useProjStore()

        async function dd() {
          await isFirstLoading()
          console.log('加载完成')
          console.log("meta----", to.meta.card)
          const tagId = to.query.tagId
          searchByTag(tagId)

        }
        dd()


        return true
      },
    },
    {
      path: '/cardtag',
      name: 'cardtag',
      component: HomeView,
      meta: reactive({ position: "work", card: true }),

      beforeEnter: (to, from) => {

        const { isFirstLoading } = useProjStore()
        const { searchByTag } = useProjStore()

        async function dd() {
          await isFirstLoading()
          console.log('加载完成')
          console.log("meta----", to.meta.card)
          const tagId = to.query.tagId
          searchByTag(tagId)

        }
        dd()


        return true
      },
    },
    {
      path: '/clients',
      name: 'clients',
      component: HomeView,
      meta: { position: "work" },

      beforeEnter: (to, from) => {

        const { isFirstLoading } = useProjStore()
        const { searchByClient } = useProjStore()

        async function dd() {
          await isFirstLoading()
          console.log('加载完成')

          const Id = to.query.clientId
          searchByClient(Id)

        }
        dd()

        return true
      },
    },
    {
      path: '/designers',
      name: 'designers',
      component: HomeView,
      meta: { position: "work" },

      beforeEnter: (to, from) => {

        const { isFirstLoading } = useProjStore()
        const { searchByDesigners } = useProjStore()

        async function dd() {
          await isFirstLoading()
          console.log('加载完成')

          const Id = to.query.designerId
          searchByDesigners(Id)

        }
        dd()

        return true
      },
    },

    {
      path: '/work/:projName/:projId',
      name: 'ArticleView',
      component: ArticleView,
      meta: { position: "work" },
      props: true,
      beforeEnter: (to, from) => {
        const { changeBG } = useTheme()
        changeBG()
        const { isFirstLoading, getProjDataById } = useProjStore()


        async function dd() {
          await isFirstLoading()
          console.log('加载完成')
          const categoryId = to.query.categoryId
          const tagId = to.query.tagId
          getProjDataById(to.params.projId)


        }
        dd()


        return true
      },


    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: { position: "contact" },
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name == "ArticleView") {



      return {
        top: 0,
        // behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    }



  }
})

export default router


router.beforeEach((to, from) => {

  if (to.name == "home") { }
  if (to.name == "contact") { }



  return true
})


