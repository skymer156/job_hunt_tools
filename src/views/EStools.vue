<template>
  <div class="EStools">
    <h1>EStools</h1>
    <p>ES Contains Counter</p>
    <textarea name="textarea" id="contains" cols="80" rows="10" v-model="text"></textarea>
    <div>{{text.length}}文字</div>
  </div>
</template>

<script>
export default {
  name: 'EsTools',
  data() {
    return {
      text: ''
    }
  },
}
</script>