<template>
  <div class="container py-4">
    <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
    <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
    <hr/>
    <component :is="currentComp"/>
    <p>{{ obj1 }}</p>
    <p>{{ obj2 }}</p>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import DynamicApple from './DynamicApple.vue'
import DynamicBanana from './DynamicBanana.vue'

// 동적으로 컴포넌트를 변경할땐 ref말고 shallowRef 정의하는게 효과적
const currentComp = shallowRef(DynamicApple)
const changeCurrentComp = (comp) => (currentComp.value = comp)

// ref, shallowRef 둘다 반응형 객체이나 shallowRef는 값 자체가 바뀔때만 반응
const obj1 = ref({name : '객체1'})
const obj2 = shallowRef({name : '객체2'})
</script>

<style lang="scss" scoped>

</style>