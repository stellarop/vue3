<template>
  <div>
    <h1>반응형 기초</h1>
    <hr>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup () {
    // ref - > Object
    const count = ref(0);
    const state = reactive({
      count : count
    })
    count.value++
    count.value++
    // state 객체가 count 객체를 참조하고 있기 때문에 count.value를 변경해도 반영됨
    console.log('state.count : ' + state.count);
    // ref으로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면 undefined
    console.log('state.count : ' + state.count.value);

    // ref = Array
    // 반응형 객체를 객체안에서 접근할때 .value로 접근 하지않아도 되지만
    // 반응형 객체를 배열안에서 접근할때 .value로 접근해야 값이 출력된다
    const message = ref('Hello');
    const arr = reactive([message]);
    console.log('arr : ' + arr[0].value);
    
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>