<template>
  <div class="container">
    <div class="half-page">
      <router-link to="createAuthor" class="send_btn">Добавить автора</router-link>
    </div>
    <div class="authors_place">
      <div
          class="user_item"
          v-for="author in authors"
          v-bind:key="author.id"
      >
        <div class="fl f-d-c j-c">
          <div>{{author.surname}} {{author.name}}</div>
          <div class="send_btn" v-on:click="removeAuthor(author.id)">
            Удалить
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data(){
    return {
      authors: []
    }
  },
  mounted() {
    axios
        .get('/api/authors/get')
        .then((response) => (this.authors = response.data))
        .catch((error) => (console.log(error)))
  },
  methods: {
    getAuthors: function(){
      axios
          .get('/api/authors/get')
          .then((response) => (this.authors = response.data))
          .catch((error) => (console.log(error)))
    },
    removeAuthor: function (id) {
      let data = {
        'id': id
      }
      console.log(data)
      axios({
            url: '/api/author/remove',
            method: 'delete',
            data: data
          }
      ).then(() => location.reload())
          .catch((error) => (console.log(error)))
    },

  }
}
</script>

<style>
.fl{
  display: flex;
  width: 100%;
}
.f-d-c {
  flex-direction: column;
}
.j-c{
  justify-content: center;
}
.user_item {
  padding: 12px;
  width: 23.5%;
  height: 120px;
  margin-right: 1%;
  display: inline-block;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px ridge;
}

.user_item div {
  margin: 5px 0;
}
.user_item .send_btn{
  background: #fc0739;
}
</style>