<template>
  <div class="container">
    <div class="half-page">
      <Input
          text="Введите название категории"
          v-bind:value="category.title"
          v-on:input="category.title = $event.target.value"
      />
      <Textarea
          text="Введите текст категории"
          v-bind:value="category.text"
          v-on:input="category.text = $event.target.value"
      />
      <div class="send_btn" v-on:click="createCategory">Сохранить</div>
    </div>
  </div>
</template>


<script>
import Input from "@/components/input";
import axios from "axios";
import Textarea from "@/components/textarea";

export default {
  data() {
    return {
      category: {
        title: '',
        text: '',
      }
    }
  },
  components: {
    Textarea,
    Input,
  },
  methods: {
    createCategory: function () {
      for (let cat_value in Object.keys(this.category)) {
        let value = Object.values(this.category)[cat_value]
        if (value === '' || value === 0) return console.log("Не все данные заполнены!")
      }
      let data= {
        'title':this.category.title,
        'text': this.category.text,
      }
      console.log(data)
      axios({
            url: '/api/category/create',
            method: 'post',
            data: data
          }
      ).then((response) => response.status===200 ?
          this.category = {
            title: '',
            text: ''
          } : console.log('Ошибка'))
    }
  }
}
</script>