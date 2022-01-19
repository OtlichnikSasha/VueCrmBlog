<template>
  <div class="states__item" >
    <div class="states__item_img">
    <router-link :to="'/article/' + article.id">
      <img :src="article.main_img" class="states__img" :alt="article.title"/>
    </router-link>
    </div>
    <div class="states__content">
      <div class="rubrics_l_states">
        <ul>
          <li>
            <router-link :to="'category/' + article.category.id">
              {{ article.category.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <h3>
        <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
      </h3>
      <p>
         {{article.text}}
      </p>
      <div class="name_and_date">
        <div class="author__items">
          <div class="name_author">
            <div>
              {{article.author.surname}} {{article.author.name}}
              </div>
          </div>
        </div>
      </div>
      <div class="send_btn" v-on:click="removeArticle(article.id)">
        Удалить
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props:{
    article:{
      type: Object,
      required: true
    }
  },
  methods: {
    removeArticle: function (id) {
      let data = {
        'id': id
      }
      axios({
            url: '/api/article/remove',
            method: 'delete',
            data: data
          }
      ).then(() => location.reload())
          .catch((error) => (console.log(error)))
    }
  }
}

</script>

<style>
.states__item{
  display: inline-block;
  overflow: hidden;
  position: relative;
  max-width:550px;
  width:100%;
  height:650px;
  margin:0 30px 30px 0;
  border:1px solid #555;
  border-radius:20px;
}
.states__item_img{
  overflow: hidden;
  transition: transform 0.5s;
  width:100%;
  height:320px;
}

.states__item_img:hover .states__img{
  transform: scale(1.05);
  transition: transform 0.5s;
}
.states__img{
  margin-bottom:5px;
  border-radius:5px;
  width:100%;
  height:100%;
  transition: transform 0.5s;
  cursor: pointer;
}
.rubrics_l_states li a{
  color:#fff;
  font-family: Montserrat,Arial,"Helvetica Neue",Helvetica,sans-serif;
  font-weight: 600;
}
.rubrics_l_states li{
  display: inline-block;
  margin:10px 5px 13px 0;
  background:#222;
  padding:2px 6px;
}
.states__content{
  padding:0 15px;
  text-align: left;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
}
.states__content a{
  transition: color 0.5s;
  color:#000;
}
.states__content a:hover{
  transition: color 0.5s;
  color:#4daef8;
}

.states__content h3{
  font-weight: 600;
  font-size: 1.5rem;
  padding-bottom:5px;
}

.name_and_date{
  padding:25px 0;
}
.author__items{
  display: inline-block;
  margin-right:10px;
  overflow: hidden;
}
.name_author a{
  font-weight: bold;
}
.name_img img{
  width:50px;
  height:50px;
  border-radius: 50%;
}
.states__item .send_btn{
  background: #fc0739;
}
</style>
