<template>
  <div>
    <h1>class-bind</h1>
    <hr>
    <!-- 일반 HTML class v-bind 속성 둘 다 적용 가능  -->
    <!-- v-bind 속성은 객체와 배열로 선언 가능하다-->
    <!-- v-bind 배열 속성에 삼항 연산자 사용 가능-->
    <div class="text" :class="[isActive ? 'active-class' : 'class', errorClass, classObject]">텍스트 입니다</div>
    <button v-on:click="toggleBtn">toggle</button>
    <button v-on:click="hasError = !hasError">hasError</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  setup () {
    const isActive = ref(true);
    const hasError = ref(false);

    // v-bind 속성 객체로도 설정 가능
    /*
    const classObject = ref({
       active : isActive,
      'text-dannger' : hasError
    })
    */
    const toggleBtn = () => {
      isActive.value = !isActive.value;
    }
  
    const classObject = computed(() => {
      return {
        active : true && true,
        'text-dannger' : true && true,
        'text-blue' : true
      }
    });

    const activeClass = ref('active');
    const errorClass = ref('error');


    return {
      isActive,
      toggleBtn,
      hasError,
      classObject,
      activeClass,
      errorClass,
    }
  }
}
</script>

<style scoped>
.active{
  font-weight: 900;
  font-size: larger;
}
.text-dannger{
  color: red;
}
</style>