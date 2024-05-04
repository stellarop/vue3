<template>
  <div class="container py-4">
    <input ref="input" type="text">
    <p>{{ input }}</p>
    <p v-if="input">{{ input.value }} {{$.refs.input}} {{ $.refs.input === input }}</p>
    <hr>
    <ul>
      <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
      <li v-for="fruit in fruits" :key="fruit" :ref="itemRefs">{{ fruit }}</li>
    </ul>
    <hr>
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TemplateRefsChild from './TemplateRefsChild.vue'
export default {
  components :  {
    TemplateRefsChild,
  },
  setup () {
    const input = ref(null)
    console.log('input :', input)
    // 마운트(렌더링이 되기전이라 null)
    console.log('setup : ', input.value)
    // onMounted 함수는 마운트가 되고 난 후 실행
    onMounted(() =>{
      input.value.value = 'Hello vue'
      console.log('onMounted : ', input.value)

      itemRefs.value.forEach(item => console.log('item : ', item.textContent))

      console.log('child.message : ' + child.value.message)
    })

    const fruits = ref(['사과', '딸기', '포도'])
    const itemRefs = ref([])
    const child = ref(null)
    //child.value.sayHello();
    return {
      input,
      fruits,
      itemRefs,
      child,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>