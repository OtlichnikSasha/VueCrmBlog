<template>
  <div>
    <div class="heading">
      {{ text }}
    </div>
    <input class="default_input" :placeholder="text" v-on="$listeners" :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }},
}
</script>