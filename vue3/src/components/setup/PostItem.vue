<template>
  <div>
    <div class="card">
  <div class="card-body">
    <!-- type 뉴스, 공지사항-->
    <span class="badge text-bg-secondary">{{ typeName }}</span>
    <h5 class="card-title  mt-2">{{ title }}</h5>
    <p class="card-text">{{ contents }}</p>
    <a href="#" :class="isLikeClass" @click="toggleLike">좋아요</a>
  </div>
</div>
  </div>
</template>

<script>
// script setup은 컴포넌트를 호출할때마다 실행된다
// 한번만 호출하고 싶은 로직이 있으면 일반 script단에서 사용
console.log('Normal Srcipt Setup')
</script>

<script setup>
import { computed } from 'vue';
console.log('Srcipt Setup')
const props = defineProps({
   // 데이터 타입 정의
   type : {
      title : String,
      // 기본값 선언 가능
      default : 'news',
      // validator 통한 유효성 검사 가능
      validator : value => {
        return ['news', 'notice'].includes(value);
      }
    },
    title : {
      type : String,
      // 속성이 필수값이라면 required로 설정
      required : true
    },
    contents : {
      type : String,
      // required : true
    },
    isLike : {
      type : Boolean,
      default : false
    },
    // 객체나 배열같은 레퍼런스 타입의 디폴트를 설정할땐 기본 값 반환하는 팩토리 함수 설정
    obj : {
      type : Object,
      default :() => ({}),
      },
})
const emit = defineEmits(['toggleLike'])

  const isLikeClass = computed(
    () => props.isLike ? 'btn btn-danger' : 'btn btn-outline-danger',
  )
  const typeName = computed(
    () => props.type === 'news' ? '뉴스' : '공지사항', 
  )
  const toggleLike = () => {
    emit('toggleLike')
  } 
// import { ref } from 'vue'

// console.log('AppCard module')
// export default {
//    // Props는 컴포넌트에 등록할 수 있는 사용자 정의 속성
//   // 컴포넌트에 사용자 정의 속성을 선언하면 컴포넌트를 사용하는 부모 컴포넌트에 데이터를 전달 할 수 있음

  
//   // 자식 컴포넌트에서 이벤트 올릴때 emits 선언 후 올려야 함
//   // emits : ['toggleLike'],
//   // props 객체를 setup 함수에서 사용 가능

//   // 상위 컴포넌트에서 값을 넘겨받을때는 props
//   // 하위 컴포넌트에서 상위 컴포넌트로 전달은 emits
//   setup (props, context) {
//     //console.log('props.title : ' + props.title)

//     const isLikeClass = computed(
//       () => props.isLike ? 'btn btn-danger' : 'btn btn-outline-danger',
//     )
//     const typeName = computed(
//       () => props.type === 'news' ? '뉴스' : '공지사항', 
//     )
//     const toggleLike = () => {
//       context.emit('toggleLike')
//     }
//     // const style = useCssModule();
//     // console.log('style : ', style)
//     // console.log('AddCard setUp()')

//     // css도 반응형 객체로 생성 후 bind 가능하다
//     // const color = ref('red')
//     // 당연한 얘기겠지만 반응형 객체에 접근해서 변경도 가능
//     // color.value = 'blue'
//     return {
//       // color,
//       isLikeClass,
//       typeName,
//       toggleLike,
//     }
//   }
// }
</script>
<style>
/*
.red{
  color: v-bind(color) !important;
}*/

</style>
<!-- scoped 속성을 적용하면 현재 컴포넌트의 요소만 적용, 해당 뷰 컴포넌트로 등록해도 적용 가능하다
-->
<!--
<style scoped>
.red{
  color: red !important;
}
</style>-->

<!--module은 css 모듈로 컴파일되고 css 클래스를 $.style 객체의 속성으로 노출
    변수 지정을 해주었다면 변수로 호출

<style module>
.red{
  color: red !important;
}
</style>
-->