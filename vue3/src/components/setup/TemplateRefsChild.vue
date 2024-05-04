<template>
  <div>{{ $parent }}
  <ul>
    <li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
  </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const message = ref('Hello vue');
  const sayHello = () => {
    alert(message.value);
  }
// setup 함수 사용으로 컴포넌트 간 통신이 막혀있는걸 defineExpose 함수로 해결
defineExpose({
  // key value 값이 같으면 하나만 선언 
  message,
  sayHello
})
</script>

<style lang="scss" scoped>

</style>