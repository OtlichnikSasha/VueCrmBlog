<template>
  <div class="container">
    <div class="half-page">
      <div
      v-if="statusLoad"
      >
        <Input
            text="Введите название статьи"
            v-bind:value="article.title"
            v-on:input="article.title = $event.target.value"
        />
        <Textarea
            text="Введите текст статьи"
            v-model="article.text"
            v-bind:value="article.text"
            v-on:input="article.text = $event.target.value"
        />
      </div>
      <div class="heading">
        Выберите категорию
      </div>
      <select
          class="default_input"
          v-model="article.category_id"
      >
        <option value="0">Не выбрано</option>
        <option v-for="cat in categories" v-bind:value="cat.id" v-bind:key="cat.id"> {{ cat.title }}</option>
      </select>
      <div class="heading">
        Выберите автора
      </div>
      <select v-model="article.author_id"
              class="default_input"
      >
        <option value="0">Не выбрано</option>
        <option v-for="author in authors" v-bind:value="author.id" v-bind:key="author.id">{{ author.name }}
          {{ author.surname }}
        </option>
      </select>
      <div>
      </div>
      <div class="send_btn" v-on:click="editArticle">Сохранить</div>
    </div>
  </div>
</template>


<script>

import axios from "axios";
import Input from "@/components/input"
// import Select from '@/components/select'
import Textarea from '@/components/textarea'

export default {
  data() {
    return {
      authors: [],
      categories: [],
      statusLoad: false,
      id: Number(this.$route.params.id),
      article: {}
    }
  },
  mounted() {
    axios
        .get(`/api/article/get?id=${this.id}`)
        .then((response) => {
          this.article = response.data.article
          this.statusLoad = true
        })
        .catch((error) => console.log(error))
    axios
        .get('/api/categories/get')
        .then((response) => this.categories = response.data)
        .catch((error) => console.log(error))
    axios
        .get('/api/authors/get')
        .then((response) => this.authors = response.data)
        .catch((error) => console.log(error))
  },
  components: {
    Input,
    Textarea,
  },
  methods: {
    editArticle: function () {
      for (let art_value in Object.keys(this.article)) {
        let value = Object.values(this.article)[art_value]
        if (value === '' || value === 0) return console.log("Не все данные заполнены!")
      }
      let data= {
        'id': this.article.id,
        'text':this.article.text,
        'title': this.article.title,
        'author_id': this.article.author_id,
        'category_id': this.article.category_id,
        'main_img': this.article.main_img,
      }
      axios({
            url: '/api/article/edit',
            method: 'put',
            data: data
          }
      ).then((response) => console.log(response))
      .catch((error) => console.log(error))
    }
  }
}
</script>