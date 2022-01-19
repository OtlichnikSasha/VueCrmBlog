<template>
  <div class="container">
    <Statistic
        text="Общее количество статей"
        v-bind:statistic_count="articles_count"
    />
    <div class="main_card">
      <div class="main_card_text">
        <div class="mini_zag">
          Самая популярная статья
        </div>
        <div class="main_card_data">
          <router-link :to="'/article/' + popularity_article.id" class="white">
              {{popularity_article.title}}
          </router-link>
          {{popularity_article.views}}
        </div>
      </div>
    </div>
    <Statistic
        text="Общее количество категорий"
        v-bind:statistic_count="categories_count"
    />
    <Statistic
        text="Общее количество авторов"
        v-bind:statistic_count="authors_count"
    />
  </div>
</template>


<script>
import axios from "axios";
import Statistic from "@/components/statistic"
export default {
  data(){
    return {
      categories_count: 0,
      articles_count: 0,
      authors_count: 0,
      popularity_article: {}
    }},
  mounted() {
    axios
        .get('/api/categories/count')
        .then((response) => (this.categories_count = response.data['count']))
        .catch((error) => (console.log(error)))
    axios
        .get('/api/articles/count')
        .then((response) => (this.articles_count = response.data['count']))
        .catch((error) => (console.log(error)))

    axios
        .get('/api/article/popularity')
        .then((response) => (this.popularity_article = response.data.popularity))
        .catch((error) => (console.log(error)))

    axios
        .get('/api/authors/count')
        .then((response) => (this.authors_count = response.data['count']))
        .catch((error) => (console.log(error)))
  },
  components: {
    Statistic
  }

}
</script>

<style>
.main_card {
  display: inline-block;
  width: 23.5%;
  overflow: hidden;
  color: #FFF;
  margin-right: 1%;
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 16px #101149;
  box-shadow: 0 4px 16px #101149;
  background: -webkit-gradient(linear, right bottom, left top, from(#101149), color-stop(#0e0f3e), color-stop(#1b1134), color-stop(#351a38), to(#6f283d));
  background: -o-linear-gradient(right bottom, #101149, #0e0f3e, #1b1134, #351a38, #6f283d);
  background: linear-gradient(to left top, #101149, #0e0f3e, #1b1134, #351a38, #6f283d);
  height: 210px;
  padding: 10px;
}

.main_card_text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.main_card_text .mini_zag{
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
.main_card_data {
  font-weight: bold;
  font-size: 16px;
  margin-top: 25px;
}
.main_card_data .white{
  color: white;
}
.main_card:nth-child(4) {
  margin-right: 0;
}

.main_card:last-child {
  margin-right: 0;
}
</style>