<template>
  <label>
    {{ label }}
    <input v-model="value" type="text">
  </label>
</template>

<script>
import { computed } from 'vue';

export default {
  // vue3에서는 modelValue라는 props로 값을 입력받아 update:modelValue로 이벤트를 발생시킬수 있음
  // 단방향으로 값 받은 후 받은 값을 다시 단방향으로 바인딩

  // 부모 컴포넌트에서 값을 받을땐 props
  props : ['title', 'label'],
  // 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 전달할땐 emits
  emits : ['update:title'],
  setup (props, {emit}) {
    const value = computed({
      get(){
        return props.title;
      },
      set(value){
        emit('update:title', value)
      }
    })
    return {
      value,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>