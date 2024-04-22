<template>
  <div>
    <h1>목록 렌더링</h1>
    <hr>
    <ul>
    <template v-for="(item, index) in evenItems" :key="item.id">
      <!-- v-for로 리스트 렌더링 시 key 값 정의 해줘야 함-->
          <li>id : {{ item.id }} index : {{ index }}, {{ item.itemNm }}</li>
    </template>
    </ul>
    <hr>
    <ul>
      <!-- v-for 렌더링 시 단수히 value 값이 아닌 key, index도 같이 출력 가능 -->
      <li v-for="(value, key, index) in myObject" :key="key">
        index : {{ index }} value : {{ value }} key : {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup () {
    const items = reactive([
      { id : 1,
        itemNm : 'java'
      },
      { id : 2,
        itemNm : 'javascript'
      },
      { id : 3,
        itemNm : 'mybatis'
      },
      { id : 4,
        itemNm : 'jpa'
      },
    ])

    const evenItems = computed(
      () => items.filter
        ((item) => item.id % 2 === 0));

    const myObject = reactive({
      title : '제목',
      author : '홍길동',
      publis : '2016-01-24'
    })

    return {
      items,
      evenItems,
      myObject,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>