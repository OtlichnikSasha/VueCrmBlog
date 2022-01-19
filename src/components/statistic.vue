<template>
  <div class="main_card">
    <div class="main_card_text">
      <div class="mini_zag">
        {{text}}
      </div>
      <div class="main_card_data">
        {{statistic_count}}
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    text: {
      type: String,
      required: true
    },
    statistic_count: {
      type: Number,
      required: true
    }
  }
}
</script>