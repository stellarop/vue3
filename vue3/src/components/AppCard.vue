<template>
  <div class="card">
    <!--header라는 슬롯이 정의되어 있으면 렌더링-->
  <div v-if="$slots.header" class="card-header">
    <slot name="header" header-message="헤더 메시지"></slot>
  </div>
  <div v-if="$slots.default" class="card-body">
    <!-- 부모 컴포넌트에 자식 컴포넌트 반응형 값 넘기기-->
    <slot :child-mesage="childMessage"></slot>
  </div>
  <div v-if="hasFooter" class="card-footer text-body-secondary">
    <slot name="footer" footer-message="푸터 메시지"></slot>
  </div>
</div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup (props, {slots}) {
    const childMessage = ref('자식 컴포넌트 메시지');
    const hasFooter = computed(() => !!slots.footer);
    // hasFooter 리턴 값 value에 false 값 받음
    console.log(hasFooter);
    return {
      childMessage,
      hasFooter,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>