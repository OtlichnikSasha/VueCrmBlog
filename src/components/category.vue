<template>
  <div class="main_card">
    <div class="main_card_text">
      <router-link :to="'/category/' + category.id" class="mini_zag">
        {{ category.title }}
      </router-link>
      <div class="main_card_data">
        {{ category.text }}
      </div>
      <div class="send_btn" v-on:click="removeCategory(category.id)">
        Удалить
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCategory: function (id) {
      let data = {
        'id': id
      }
      axios({
            url: '/api/category/remove',
            method: 'delete',
            data: data
          }
      ).then(() => location.reload())
          .catch((error) => (console.log(error)))
    }
  }
}

</script>
<style scoped>
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
.main_card_text .send_btn{
  background: #fc0739;
}
.main_card_text .mini_zag {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
}

.main_card_data {
  font-weight: bold;
  font-size: 14px;
  margin-top: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.main_card_data .white {
  color: white;
}

.main_card:nth-child(4) {
  margin-right: 0;
}

.main_card:last-child {
  margin-right: 0;
}
</style>