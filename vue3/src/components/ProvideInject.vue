<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">provide inject component</div>
      <div class="card-body">
        <button class="btn btn-primary" @click="count++">count++</button>
        <Child></Child></div>
    </div>
   
  </div>
</template>

<script>
import { provide, readonly, ref } from 'vue'
import Child from './Child.vue'
export default {
  components : {
    Child,
  },
  setup () {
    const staticMessage = 'static message';
    const message = ref('message');
    // 수정 함수
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage
    }

    const count = ref(10)

    // 최상위 컴포넌트에서 최하위 컴포넌트까지 데이터를 주고 받으려면 props나 emits로 prop drilling을 해야 한다
    // 이런 과정 없이 바로 데이터를 주고 받을 수 있는게 provide, Inject
    // 값을 줄때 provide 받을땐 inject
    // key, value 구조
    provide('static-message', staticMessage);
    // 수정 필요 시 provide 영역에서 처리하면 유지보수 하기 유리
    // value 영역에 객체로 전달
    provide('message', {message : readonly(message), updateMessage});
    provide('count', count);
    return {
      message,
      count,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>