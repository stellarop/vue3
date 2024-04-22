<template>
  <div>
    <h1>이벤트 처리</h1>
    <hr>
    <div id="modifiers" >
      <div  @click="clickDiv">
        div 영역
        <!-- self은 자기 자신만 호출 가능 이벤트 전파 x-->
        <p  @click.self="clickP">
          p 영역
          <!-- click 디렉터리에 stop은 이벤트 버블링, 캡쳐링을 방지
          <span @click.stop="clickSpan">span 영역</span> -->
          <span @click="clickSpan">span 영역</span>
          <!-- click 디렉터리에 prevent은 기본 기능 막음 -->
          <a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
        </p>
      </div>
    </div>
    <!-- once은 단 한번만 실행 가능 -->
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup () {
    const clickDiv = () => {
      console.log('clickDiv')
      // location.href='https://naver.com'
    }
    const clickP = () => {
      console.log('clickP')
    }
    const clickSpan = () => {
      console.log('clickSpan')
      // 이벤트 버블링 방지
      // e.stopPropagation();
      // alert('조아조아')
    }
    const clickA = () => {
      alert('clickA 클릭')
    }

    return {
      clickDiv,
      clickP,
      clickSpan,
      clickA,

    }
  }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span{
  padding: 40px;
}
#modifiers{
  background-color: #ccc;
}
#modifiers p{
  background-color: #999;
}
#modifiers span{
  background-color: #666;
  display: block;
}

</style>