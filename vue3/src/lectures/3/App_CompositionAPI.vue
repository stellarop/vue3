<template>
  <div>
    <h1>compositionAPI</h1>
    <hr>
    <h2>반응형 메시지</h2>
    <p>{{ reaciveMessage }}</p>
    <button v-on:click="reaciveClick">AddMessage</button>
    <h2>일반 메시지</h2>
    <p>{{ nomalMessage }}</p>
    <button v-on:click="nomalClick">AddMessage</button>
  </div>
</template>

<script>
import { isRef,
  onBeforeMount,
  onMounted,
ref } from 'vue';

export default {
  setup () {
    console.log('setup()')
    // 반응형 메시지
    // reaciveMessage 변수에 !를 붙히면 바로 반응한다. ref API를 사용했기 때문
    // 상수 타입인데 값이 변경이 되는것도 ref API 때문인가?
    const reaciveMessage = ref('Hello ReaciveMessage');
    const reaciveClick = () =>{
      reaciveMessage.value = reaciveMessage.value + '!';
    };
    console.log('reaciveMessage : ' + isRef(reaciveMessage));

    // 일반 메시지
    let nomalMessage = 'Hello NomalMessage';
    const nomalClick = () => {
      nomalMessage.value = nomalMessage.value + '!';
    }
    console.log('nomalMessage : ' + isRef(nomalMessage));

    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeMount(() =>{
      console.log('onBeforeMount')
    })
    return {
      reaciveMessage,
      nomalMessage,
      reaciveClick,
      nomalClick
    };
  },
};
</script>

<style lang="scss" scoped>

</style>