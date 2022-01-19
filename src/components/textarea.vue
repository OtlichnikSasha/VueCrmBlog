<template>
  <div>
    <div class="heading">
      {{ text }}
    </div>
    <textarea
        class="default_input"
        :placeholder="text"
        :value="value"
        v-on="$listeners"
    >

    </textarea>
    <!--        -->
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
    }
  }
}
</script>