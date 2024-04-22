<template>
  <div>
    <h1>style bind</h1>
    <hr>
    <!-- style 속성도 객체로 사용 가능하다 -->
    <div :style="styleObject">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione quae enim perferendis fugit eos quibusdam atque eaque nisi quod reiciendis inventore officia soluta quos iusto cumque, voluptatem vero minima?</div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup () {
    /*
    const styleObject = reactive({
      color : 'red',
      fontSize : '20px',
    })
    */

   const fontSize = ref(20);
   const styleObject = computed(() =>{
    return { 
      color : 'red',
      fontSize : fontSize.value + 'px',}
   })

    return {
      styleObject,
      fontSize,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>