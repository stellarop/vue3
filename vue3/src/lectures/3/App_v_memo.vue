<template>
  <div>
    <h1>디렉티브</h1>
    <hr>
    <!--  v-memo 디렉티브는 디렉티브 안에 있는 값이 변경이 될때만 업데이트 진행 -->
    <div v-memo="[views]">
      <p>subscribers : {{ subscribers }}</p>
      <p>views : {{ views }}</p>
      <p>likes : {{ likes }}</p>
    </div>
    <!-- v-on은 이벤트를 연결하는 디렉티브 @로 축약 가능 -->
    <button @click="subscribers++">subscribers++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
  </div>
  <div>
      <p>subscribers : {{ subscribers }}</p>
      <p>views : {{ views }}</p>
      <p>likes : {{ likes }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);


    return {
      subscribers,
      views,
      likes,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>