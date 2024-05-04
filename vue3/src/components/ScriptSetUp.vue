<template>
  <div class="container py-4">
    {{ msg }}
  <button @click="clickBtn">click</button>

  <input v-model="message" type="text">
  <button @click="clickBtn2">click</button>

  <PostItem type="news" title="제목" contenst="내용" :is-like="true"></PostItem>
  <PostItem type="news" title="제목" contenst="내용" :is-like="true"></PostItem>
  <PostItem type="news" title="제목" contenst="내용" :is-like="true"></PostItem>
  <PostItem type="news" title="제목" contenst="내용" :is-like="true"></PostItem>

  <hr>
  <TemplateRefsChild ref="child"></TemplateRefsChild>
  <template v-if="child">{{ child.message }}</template>
  <hr>
  <MyButton class="parent-class"></MyButton>
  </div>
</template>
<!-- setup 속성은 컴포넌트 간 통신이 닫혀있다 -->
<script setup>
import { ref } from "vue";
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from "./setup/TemplateRefsChild.vue";
import MyButton from "./setup/MyButton.vue";
import axios from 'axios';

const msg = 'Hello vue';
const message = ref('message');
const clickBtn = () =>{
  alert(msg)
}
const clickBtn2 = () =>{
  message.value = message.value + '!'
}

const child = ref(null)
defineExpose({
  msg
})
const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
console.log('response : ', response)
</script>

<style lang="scss" scoped>

</style>