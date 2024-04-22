<template>
  <div>
    <h1>양방향 바인딩</h1>
    <hr>
    <h2>input Value</h2>

    <!-- v-model 디렉티브는 양방향을 바인딩 할 수 있음 -->
    <!-- 반응형 변수 바인딩 후 값 변경 시 반응형 변수도 변경 -->
    <input type="text" v-model="inputValue"/>
    <div>{{ inputValue }}</div>

    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <!-- checked = 체크 유무 불리언 타입-->
    <input type="checkbox" id="checkbox" v-model="checkboxValue" true-value="yes" false-value="no">

    <h2>radie value</h2>
    <label>
      <input type="radio" name="type" value="O" v-model="radioValue"/>
      O형
    </label>
    <label>
      <input type="radio" name="type" value="A" v-model="radioValue"/>
      A형
    </label>
    <div>{{ radioValue }}</div>

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="html">HTML 수업</option>
      <option value="css">CSS 수업</option>
      <option value="javascript">JavaScript 수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const inputValue = ref(null)
    const textareaValue = ref(null);
    const checkboxValue = ref(true);
    const radioValue = ref('O');
    const selectValue = ref('html');
    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
      selectValue,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>