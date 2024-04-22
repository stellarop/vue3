<template>
  <div>
    <h1>toRefs() 함수</h1>
    <hr>
    <p>author : {{ author }}</p>
    <p>title : {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
  setup () {
    const book = reactive({
        author: 'Vue Team',
        year: '2020',
        title: 'Vue 3 Guide',
        description: '당신은 지금 바로 이 책을 읽습니다  ;)',
        price: '무료'
    });

    // 원하는 속성을 얻기위해 book 반응형 객체 구조분해 할당
    // const {author, title} = book;
    // 구조분해 할당 시 type이 string -> 반응성을 잃어버림
    // console.log(typeof author)

    // toRefs를 이용해서 구조분해 할당 시 동기화가 된다
    // book의 참조값을 그대로 사용
    // const {author, title} = toRefs(book);
    const author = toRef(book.author);
    const title = toRef(book.title);
    return {
      author,
      title,
      book,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>