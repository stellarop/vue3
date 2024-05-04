<template>
  <div class="card">
    <div class="card-header">Deep Child component</div>
    <div class="card-body">
      <p>staticMessage : {{ staticMessage }}</p>
      <p>message : {{ message }}</p>
      <p>count : {{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    // provide로 넘긴 값을 받을땐 provide key에 선언된 값으로 가져온다.
    // 두번째 값으로 디폴트 선언 가능 
    const staticMessage = inject('static-message');
    const { message, updateMessage } = inject('message');
    updateMessage('!')
    // message.value = message.value + '@@@'
    const count = inject('count');

    return {
      staticMessage,
      message,
      count,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>