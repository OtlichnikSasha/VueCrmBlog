import Vue from 'vue'
import App from './App.vue'
import Articles from '@/pages/Articles'
import Categories from '@/pages/Categories'
import Authors from '@/pages/Authors'
import MainPage from '@/pages/MainPage'
import CreateArticle from '@/pages/CreateArticle'
import VueRouter from 'vue-router'
import axios from 'axios'

import VueAxios from 'vue-axios'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  { path: '/', component: MainPage },
  { path: '/authors', component: Authors },
  { path: '/categories', component: Categories },
  { path: '/articles', component: Articles,
    children: [
      {
        path: '/articles/:page',
        component: Articles,
      }
    ]},
  { path: '/createArticle', component: CreateArticle },
  { path: '/createAuthor', component: CreateArticle },
  { path: '/createCategory', component: CreateArticle },
]
const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
