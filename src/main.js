import Vue from 'vue'
import App from './App.vue'
import Articles from '@/pages/Articles'
import Article from '@/pages/Article'
import Categories from '@/pages/Categories'
import Category from '@/pages/Category'
import Authors from '@/pages/Authors'
import MainPage from '@/pages/MainPage'
import CreateArticle from '@/pages/CreateArticle'
import CreateAuthor from '@/pages/CreateAuthor'
import CreateCategory from '@/pages/CreateCategory'
import VueRouter from 'vue-router'
import axios from 'axios'

import VueAxios from 'vue-axios'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  { path: '/', component: MainPage },
  { path: '/authors', component: Authors },
  { path: '/categories', component: Categories,
  children: [
  {
    path: '/categories/:page',
    component: Categories,
  }
]},
  { path: '/category/:id', component: Category},
  { path: '/articles', component: Articles,
    children: [
      {
        path: '/articles/:page',
        component: Articles,
      }
    ]},
  { path: '/article/:id', component: Article},
  { path: '/createArticle', component: CreateArticle },
  { path: '/createAuthor', component: CreateAuthor },
  { path: '/createCategory', component: CreateCategory },
]
const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
