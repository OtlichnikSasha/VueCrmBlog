<template>
  <div class="container">
    <div class="half-page">
      <router-link to="createArticle" class="send_btn">Создать статью</router-link>
    </div>
    <div class="articles_place">
      <h1>Статьи</h1>
      <Article
          v-for="article of articles['articles']"
          v-bind:key="article.id"
          v-bind:article="article"
      />
      <div class="pagination_place">
        <div
            class="pagination_item"
            v-for="page in articles.pages"
            v-bind:key="page"
        >
          <router-link
               class="pagination_num _active"
               v-if="page === articles.pages"
               :to="'/articles/' + page"
          >
                {{page}}
          </router-link>
          <router-link v-else
               class="pagination_num"
               :to="'/articles/' + page"
          >
            {{page}}
          </router-link>
      </div>
      </div>
    </div>
    {{this.$route.params.page}}
  </div>
</template>
<script>
import axios from "axios";
import Article from "@/components/article";
export default {
  data() {
    return {
      articles: [],
      page: this.$route.params.page === undefined ? 1 : Number(this.$route.params.page),
      statusArticle: false
    }
  },
  mounted() {
    let page = this.page
    axios({
          url: `/api/articles/get?page=${page}`,
          method: 'get'
        }
    ).then((response) => this.articles = response.data.message) //
        .catch((error) => (console.log(error)))
  },
  components:{
    Article
  }
}


</script>

<style>
  .pagination_place {
    width: 100%;
    text-align: center;
  }

  .pagination_item {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 25px 5px 0 0;
    background: linear-gradient(to left top, #111111, #006d32, #333333, #26a641, #777777, #39d353);
    display: inline-block;
    overflow: hidden;
    font-size: 18px;

    font-weight: bold;

  }

  .pagination_num._active {
    background: #161038;
    color: #FFFFFF;
  }

  .pagination_num {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #FFFFFF;
  }

  .pagination_num:hover {
    cursor: pointer;
  }
</style>

