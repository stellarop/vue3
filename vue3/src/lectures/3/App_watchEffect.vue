<template>
  <div>
    <form action="" @submit="save(title, content)">
      <input v-model.lazy="title" type="text" placeholder="title">
      <textarea v-model.lazy="content" placeholder="textarea"></textarea>
      <hr>
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup () {
    const title = ref('');
    const content = ref('');
    const save = (title, content) => {
      console.log(`저장되었습니다.\ntitle : ${title} content : ${content}`)
    }

    // 반응형 변수에 변경이 일어나면 watchEffect() 함수가 캐치
    watchEffect(() => {
      save(title.value, content.value);
      console.log(title.value);
      console.log(content.value)
    })

    return {
      title,
      content,
      save,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>