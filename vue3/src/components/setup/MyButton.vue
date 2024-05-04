<template>
  <div class="p-3 bg-danger">
    <!-- 부모 컴포넌트 상속 비활성화 상태라 부모에서 정의한 속성, 이벤트, 함수 사용 불가능-->
    <!-- 부모 컴포넌트에서 정의한 속성, 이벤트, 함수는 $attrs로 자식 컴포넌트에 바인딩 후 사용한다 -->
    <button type="button" class="btn btn-primary" v-bind="$attrs">My Button, {{ message }}</button>
  </div>
</template>

<script>
export default {
  // 부모 컴포넌트, 자식 컴포넌트의 이벤트 처리가 중복된다면 해당 이벤트 처리는 중복으로 실행된다
  // 부모 컴포넌트에 이벤트 처리 = 자식 컴포넌트에서 상속 비활성화
  // 자식 컴포넌트에 이벤트 처리 = emits 옵션으로 부모 컴포넌트에 이벤트 전달
  // 위 두 가지중 하나를 택해서 사용해야 될것 같다

  // 부모 컴포넌트 상속 비활성화 
  inheritAttrs : false,
  setup (/*props, context*/) {
    //console.log('context.attrs : ', context.attrs)
    // console.log('context.class : ', context.attrs.class)
    // console.log('context.id : ', context.attrs.id)
    //console.log('context.onClick : ', context.attrs.onClick)
    // 부모 컴포넌트의 onClick 함수 실행
    // context.attrs.onClick();
    return {
     
    }
  }
}
</script>
<script setup>
import { ref } from 'vue'
  const message = ref('message');
</script>

<style lang="scss" scoped>

</style>