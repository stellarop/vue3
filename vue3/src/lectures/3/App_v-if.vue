<template>
  <div>
    <h1>조건부 렌더링</h1>
    <hr>

    <!-- v-if, v-show 비교 -->
    <!--
      v-if는 참일시 렌더링 거짓일 시 렌더링x
      v-show는 항상 렌더링 됨 거짓일 시 돔에 렌더링이 되있으나 css 처리로 숨김
      무언가 자주 변경해야 한다면 v-show
      아니면 v-if
    -->
    <h2 v-if="visible">Hello vue3</h2>
    <h2 v-else>false 입니다.</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr>
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>
    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A, B, C가 아닙니다.</h2>
    <hr>
  <template v-if="visible">
    <h1>Title</h1>
    <p>test1</p>
    <p>test2</p>
  </template>
  <hr>
  <h1 v-show="showOk">Title 입니다.</h1>
  <button v-on:click="showOk = !showOk">showOk</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const visible = ref(false);
    const type = ref('A');
    const showOk = ref(true);
    return {
      visible,
      type,
      showOk,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>