<template>
  <div>
    <h1>readonly() 함수</h1>
    <hr>
  </div>
</template>

<script>
import { reactive, readonly } from 'vue'
export default {
  setup () {
    const original = reactive({
      count : 0,
    })

    // 복사된 객체의 속성 변경을 원하지 않을땐 readonly() 함수를 이용하여 객체 복사
    // 원본 객체는 값이 변경되지만 readonly()를 사용해서 복사한 객체는 변경 x
    const copy = readonly(original);
    original.count++;
    copy.count++;
    console.log('original.count : ' + original.count)
    console.log('copy.count : ' + copy.count)
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>