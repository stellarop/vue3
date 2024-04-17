<template>
  <div>
    <!-- 클릭 시 increment() 함수 실행-->
    <button v-on:click="increment()">count : {{count}}</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const increment = () => count.value++;

    onMounted(() => {
      console.log('컴포먼트가 마운트 되었습니다.');
    });
    return {
      count,
      increment
    }
  }
}
</script>

<style lang="scss" scoped>

</style>