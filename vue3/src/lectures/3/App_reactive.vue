<template>
  <div>
    <h1>반응형 기초</h1>
    <hr>
    <!-- state 객체 안 count 변수 접근-->
    <button v-on:click="addClick">click {{ state.count }}</button>
    <button v-on:click="addClick">deepClick {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      count : 0,
      deep : {
        count : 0
      },
    })
    const addClick = () => {
      state.count++
      state.deep.count++
    }

    return {
      state,
      addClick,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>