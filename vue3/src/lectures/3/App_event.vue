<template>
  <div>
    <h1>이벤트 처리</h1>
    <hr>
    <!-- 함수에서 이벤트 처리를 하려면 이벤트 객체를 넘겨줘야 함-->
    <button @click="printEventInfo('Hello vue3', $event)"> inline event hanler</button>
  </div>
  <hr>
  <input type="text" @keyup="onKeyUpHardler">
</template>

<script>
export default {
  setup () {

    const printEventInfo = (message,event) => {
      console.log('message : ', message)
      console.log('event.target : ', event.target)
      console.log('event.target.tagName : ', event.target.tagName)
    };

    const onKeyUpHardler = event => {
      console.log('event.key : ', event.key)
    };

    return {
      printEventInfo,
      onKeyUpHardler,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>