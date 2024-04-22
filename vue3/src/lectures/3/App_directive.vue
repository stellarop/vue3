<template>
  <div>
    <h1>디렉티브</h1>
    <hr>

    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <!-- v-text로 html 속성을 정의하면 문자열로 인지-->
    <p v-text="htmlStr"></p>
    <p>{{ msg }}!!!!!!!!!</p>
    <!-- v-once는 한번만 렌더링 그 이후에 변경된 값은 변하지 않음 -->
    <p v-once>{{ msg }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const msg = ref('안녕하세요.');
    const htmlStr = ref('<strong>안녕</strong>')
    return {
      msg,
      htmlStr,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>