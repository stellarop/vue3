<template>
  <div>
    <h1>watch, watchEffect</h1>
    <hr>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup () {
    const x = ref(0);
    const y = ref(0);

    watch(
      () => x.value + y.value, 
        (sum, newValue, oldValue) =>{
          console.log('sum : ' + sum)
          console.log('newValue : ' + newValue)
          console.log('oldValue : ' + oldValue)
    })
    return {
      x,
      y
    }
  }
}
</script>

<style lang="scss" scoped>

</style>