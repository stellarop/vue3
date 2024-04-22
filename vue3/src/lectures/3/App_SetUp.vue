<template>
  <div>
    <h1>setUp() 함수</h1>
    <hr>
    {{ count }}
    {{ message }}
  </div>
  <button v-on:click="increment">addCount</button>
</template>

<script>
import {ref} from 'vue'
export default {
  // setup() 함수는 compositionAPI 사용을 위한 진입점 역활을 한다.
  // setup() 함수는 컴포넌트 인스턴스가 생성되기 전에 실행
  setup () {
    const count = ref(0);
    const message = 'Hello vue3';
    const increment = () => {
      count.value = count.value + 1;
    }
    // setup() 함수에서 반환된 속성은 template에서 사용 가능
    return {
      count,
      message,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>