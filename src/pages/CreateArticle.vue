<template>
  <div class="container">
    <div class="half-page">
      <Input
          text="Введите название статьи"
          v-bind:value="article.title"
          v-on:input="article.title = $event.target.value"
      />
      <Textarea
          text="Введите текст статьи"
          v-bind:value="article.text"
          v-on:input="article.text = $event.target.value"
      />
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
      <div class="send_btn" v-on:click="createArticle">Сохранить</div>
    </div>
  </div>

</template>
<script>

import axios from "axios";
import Input from "@/components/input"
import Textarea from '@/components/textarea'

export default {
  data() {
    return {
      authors: [],
      categories: [],
      article: {
        title: '',
        text: '',
        category_id: 0,
        author_id: 0,
        main_img: 'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fsun9-40.userapi.com%2Fimpf%2FtzDxmHVFu_ftv7NJVIH8ITv8SQFSUt72uyAXKQ%2FRbmHu511_kc.jpg%3Fsize%3D956x542%26quality%3D96%26proxy%3D1%26sign%3D2a583c22d5eaf3a3a4ada24b3fc35508%26type%3Dalbum'
      }
    }
  },
  mounted() {
    axios
        .get('/api/categories/get')
        .then((response) => (this.categories = response.data))
        .catch((error) => (console.log(error)))
    axios
        .get('/api/authors/get')
        .then((response) => (this.authors = response.data))
      .catch((error) => (console.log(error)))
  },
  components: {
    Input,
    Textarea,
  },
  methods: {
    createArticle: function () {
      for (let art_value in Object.keys(this.article)) {
        let value = Object.values(this.article)[art_value]
        if (value === '' || value === 0) return console.log("Не все данные заполнены!")
      }
      let data= {
        'text':this.article.text,
        'title': this.article.title,
        'author_id': this.article.author_id,
        'category_id': this.article.category_id,
        'main_img': this.article.main_img,
      }
      axios({
            url: '/api/article/create',
            method: 'post',
            data: data
          }
      ).then((response) => response.status===200 ?
          this.article = {
            title: '',
            text: '',
            category_id: 0,
            author_id: 0,
            main_img:'https://cdn.tribuna.com/fetch/?url=https%3A%2F%2Fsun9-40.userapi.com%2Fimpf%2FtzDxmHVFu_ftv7NJVIH8ITv8SQFSUt72uyAXKQ%2FRbmHu511_kc.jpg'
          } : console.log('Ошибка'))
    }
  }
}
</script>

<style>
.container .half-page {
  width: 50%;
}

.heading {
  margin: 10px 0;
  display: block;
  font-weight: bold;
  font-size: 16px;
}

.default_input {
  width: 100%;
  padding: 8px 5px;
  border-radius: 5px;
  border: 1px ridge;
  transition: all .3s;
  font-size: 16px;
}

.default_input:focus {
  transition: all .3s;
  box-shadow: 1px 1px 1px #5154c7;
  border: 1px solid #5154c7;
}


</style>