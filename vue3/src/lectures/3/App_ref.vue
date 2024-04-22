<template>
  <div>
    <h1>ref() 함수</h1>
    <hr>
    <!-- template에서는 value 안에 있는 값을 message로 대입을 함-->
    <p>{{ message }}</p>
    <button v-on:click="addClick">addClick</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    // 반응형으로 동작하지 않는 이유
    // 리액티브 함수는 객체나 배열과 같이 레퍼런스 타입의 반응형 상태, 반응형 개체를 선언하는 함수이기 때문

    // reactive() 함수는 객체 타입에만 동작
    // message 변수는 기본 타입(numbar, string, boolean)을 반응형으로 만들때 ref() 함수 이용

    // ref() 함수는 객체로 리턴 정확히는 반응형 객체
    let message = ref('Hello vue3');
    const addClick = () => {
      // message의 값은 message 객체 안 value
      message.value = message.value + '!'
    }
    console.log(message)
    console.log('message : ' + message.value);
    console.log('message : ', typeof message.value);
    return {
      message,
      addClick,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>