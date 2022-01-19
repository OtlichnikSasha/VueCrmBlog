<template>
  <div class="container">
    <div class="half-page">
      <router-link to="createCategory" class="send_btn">Добавить категорию</router-link>
    </div>
    <div class="categories_place">
      <Category
        v-for="category in categories"
        v-bind:key="category.id"
        v-bind:category="category"
      />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Category from "@/components/category"
export default {
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    axios({
          url: `/api/categories/get`,
          method: 'get'
        }
    ).then((response) => this.categories = response.data) //this.categories = response.data.message
        .catch((error) => (console.log(error)))
  },
  components:{
    Category
  }

}
</script>

<style>
.categories_place{
  margin-top: 40px;
}
</style>