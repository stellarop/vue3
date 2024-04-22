<template>
  <div>
    <h1>템플릿 문법</h1>
    <hr>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <!-- v-once는 일회성이라 동적 활용 불가능 -->
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">click</button>
    <hr />
    <h2>v-html</h2>
    <!-- 리턴 받은 문자열 그대로 출력 -->
    <p>{{ rawHtml }}</p>
    <!-- v-html 디렉티브 활용하면 html로 출력 가능-->
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려주세요</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled">
    <!-- v-bind에 객체를 넣어서 다중 속성 바인딩 가능-->
    <input v-bind="attrs">
    <h2>JavaScript</h2>
    <!-- 자바스크립트 표현식 사용 가능-->
    {{ message.split('').reverse().join('') }}<br>
    {{ isInputDisabled ? "예" : "아니요" }}

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요');
    const rawHtml = ref('<strong>안녕하세요</strong>');
    const dynamicTitle = ref('Hello!!!');
    const isInputDisabled = ref(false);
    const attrs = ref({
      type : 'password',
      value : '1234',
      disabled : false,
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>