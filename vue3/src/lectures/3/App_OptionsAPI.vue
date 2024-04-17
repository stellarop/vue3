<template>
  <div>
    <!-- 클릭 시 increment() 함수 실행-->
    <button v-on:click="increment()">count : {{count}}</button>
  </div>
</template>

<script>
  // vue3 optionsAPI 개발 시 변수, 메서드 마운트 영역이 존재
  export default {
    // 변수 영역
    data(){
      return{
        // count 변수 0으로 초기화
        count : 0,
      };
    },
    // 함수 영역
    methods : {
      // 함수 생성
      increment(){
        // 클릭한 요소 +1
        this.count++;
      },
    },
    mounted(){
      console.log('컴포먼트가 마운트 되었습니다.');
    },
  }
</script>

<style lang="scss" scoped>

</style>