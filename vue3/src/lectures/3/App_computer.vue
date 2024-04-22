<template>
  <div>
    <h1>computered() 함수</h1>
    <hr>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음'}}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <button v-on:click="count++">count : {{ count }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup () {
    const teacher = reactive({
      name : '이연재',
      lectures : [
        'HTML/CSS',
        'javascript',
        'vue3'
      ] 
    });

    // computed는 계산식을 캐시에 저장했다가 여러번 요청 시 캐시에 저장된 값을 사용한다
    // 계산식이 변경되면 다시 호출을 한다
    const hasLecture = computed(() => {
      console.log('computed')
      return teacher.lectures.length > 0 ? '있음' : '없음'
    });

    // method는 호출할때마다 실행한다 
    const existLecture = () => {
      console.log('method')
      teacher.lectures.length > 0 ? '있음' : '없음'
    }

    const count = ref(0)

    const firstName = ref('홍');
    const lastName = ref('길동');

    // computed() 함수에 set 함수를 사용해서 변경 가능
    const fullName = computed({
      get(){
        return firstName.value + ' ' + lastName.value;
      },
      set(value){
         [firstName.value, lastName.value] = value.split(' ');
     
      }
    });

    console.log('console 출력 : ' + fullName.value)
    fullName.value = '짐 코딩'
    return {
      teacher,
      hasLecture,
      existLecture,
      count,
      fullName,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>