<template>
  <div>
    <input ref="inputRef" type="text" value="Hello vue">
    <!-- <LifecycleChild></LifecycleChild> -->
  </div>
</template>

<script>
// import LifecycleChild from './LifecycleChild.vue'
import { /*onBeforeMount, onMounted,*/ ref } from 'vue'
export default {
  components : {
    // LifecycleChild,
  },
  setup () {
    const inputRef = ref(null)

    // console.log('setup')
    // onBeforeMount(() =>{
    //   console.log('onBeforeMount')
    // }),
    // onMounted(() =>{
    //   console.log('onMounted', inputRef.value.value)
    // })
    return {
      inputRef,
    }
  },
  /*
  beforeCreate() {
    console.log('beforeCreate')
  },
    created() {
      console.log('created')
    },
    */
}
</script>

<style lang="scss" scoped>

</style>