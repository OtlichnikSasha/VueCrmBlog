<template>
  <div class="container">
    <div class="half-page">
      <Input
          text="Введите имя автора"
          v-bind:value="author.name"
          v-on:input="author.name = $event.target.value"
      />
      <Input
          text="Введите фамилию автора"
          v-bind:value="author.surname"
          v-on:input="author.surname = $event.target.value"
      />
      <Input
          text="Введите специальность автора"
          v-bind:value="author.speciality"
          v-on:input="author.author = $event.target.value"
      />
      <div class="send_btn" v-on:click="createAuthor">Сохранить</div>
    </div>
  </div>
</template>


<script>
import Input from "@/components/input";
import axios from "axios";

export default {
  data() {
    return {
      author: {
        name: '',
        surname: '',
        speciality: ''
      }
    }
  },
  components: {
    Input,
  },
  methods: {
    createAuthor: function () {
      for (let auth_value in Object.keys(this.author)) {
        let value = Object.values(this.author)[auth_value]
        if (value === '' || value === 0) return console.log("Не все данные заполнены!")
      }
      let data= {
        'name':this.author.name,
        'surname': this.author.surname,
        'speciality': this.author.speciality,
      }
      console.log(data)
      axios({
            url: '/api/author/create',
            method: 'post',
            data: data
          }
      ).then((response) => response.status===200 ?
          this.author = {
              name: '',
              surname: '',
              speciality: ''
          } : console.log('Ошибка'))
      }
    }
}
</script>