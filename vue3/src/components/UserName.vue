<template>
  <div>
    <LabelInput :model-value="firstname" @update:model-value="value => $emit('update:firstname', value)" label="성"></LabelInput>
    <LabelInput :model-value="lastname" @update:model-value="value => $emit('update:lastname', value)" label="이름"></LabelInput>
  </div>
</template>

<script>
import LabelInput from './LabelInput.vue';

export default {
  // 부모에서 넘어온 값 자식 컴포넌트에서 받기
  props : ['firstname', 'lastname'],
  emits : ['update:firstname', 'update:lastname'],
  components : {
    LabelInput,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>