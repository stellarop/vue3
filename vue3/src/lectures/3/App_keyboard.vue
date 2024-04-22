<template>
  <div>
    <h1>이벤트 처리</h1>
    <hr>
    <!-- keyup 이벤트 enter 눌렀을때 addTodo 함수 실행 -->
    <input type="text" @keyup.enter="addTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const todos = reactive([]);

    const addTodo = event => {
      /*
      if(event.key === 'Enter'){
        todos.push(event.target.value);
      }
      */
      todos.push(event.target.value);
      event.target.value = '';
      event.target.focus();
      
    }

    return {
      todos,
      addTodo,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>