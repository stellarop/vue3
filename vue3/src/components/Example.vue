<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="btnClick">My Button</MyButton>
      <LabelInput label="이름"></LabelInput>
      <hr/>
      <FancyButton>Click!!<span style="color: red;">@@@</span></FancyButton>
      <FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
      <hr>
      <AddCard>
        <!--자식 컴포넌트 slot에 전달인자 적용 v-slot
            # 단축 표현으로 사용가능 
        -->
        <!-- 전달인자는 동적으로도 전달 가능-->
        <!-- <template #[slotAras]>제목입니다.</template>-->
        <!--<template #default>내용입니다.</template>
        일시적으로 default 슬롯입니다.
        <template #footer>푸터입니다.</template>-->
        <!-- 자식 컴포넌트에서 받은 값은 객체로 담겨서 온다 -->
        <template #header="{ headerMessage }">
          {{ headerMessage }}
        </template>
        <template #default="slotProps">
          default 입니다.
          <br>
          {{ message }}
          <br>
          {{ slotProps.childMessage }}
        </template>
        <template #footer="{ footerMessage }">
          {{ footerMessage }}
        </template>
      </AddCard>

      <hr>
      <AddCard>게시글입니다.</AddCard>
   </div>
   </main>
</template>

<script>
import MyButton from './MyButton.vue'
import LabelInput from './LabelInput.vue'
import FancyButton from './FancyButton.vue'
import AddCard from './AppCard.vue'
import { ref } from 'vue'
export default {
  components : {
    MyButton,
    LabelInput,
    FancyButton,
    AddCard,
  },
  setup () {
    const btnClick = () =>{
      alert('버튼 클릭')
    }

    const slotAras = ref('header')
    const message = ref('안녕하세요.')
    return {
      btnClick,
      slotAras,
      message,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>