<template>
  <div class="container">
    <div class="half-page">
      <div
        v-if="statusLoad"
      >
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
      </div>
      <div class="send_btn" v-on:click="editCategory">Сохранить</div>
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
      id: Number(this.$route.params.id),
      category: {},
      statusLoad: false
    }
  },
  components: {
    Textarea,
    Input,
  },
  mounted(){
    axios
        .get(`/api/category/get?id=${this.id}`)
        .then((response) => {
          this.category = response.data
          this.statusLoad = true
        })
        .catch((error) => (console.log(error)))
  },
  methods: {
    editCategory: function () {
      for (let cat_value in Object.keys(this.category)) {
        let value = Object.values(this.category)[cat_value]
        if (value === '' || value === 0) return console.log("Не все данные заполнены!")
      }
      let data= {
        'id': this.id,
        'title':this.category.title,
        'text': this.category.text,
      }
      axios({
            url: '/api/category/edit',
            method: 'put',
            data: data
          }
      ).then((response) => console.log(response))
      .catch((error) => console.log(error))
    }
  }
}
</script>