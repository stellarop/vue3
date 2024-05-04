<template>
  <main>
  <div class="container py-4">
    <!-- 자식 컴포넌트에서 생성한 이벤트를 실행할때 부모 컴포넌트에서 createPost 함수 실행-->
  <PostCreate @create-post="createPost"></PostCreate>
  <hr class="my-4" />

  <div class="row g-3">
    <!-- 당연한 얘기겠지만 반응형 배열로 값을 받아서 for문으로 바인딩도 가능-->
    <div v-for="dataArrs in dataArr" :key="dataArrs.id" class="col col-4">
      <PostItem :key="dataArrs.id" :title="dataArrs.title" :contents="dataArrs.contents" :type="dataArrs.type" :isLike="dataArrs.isLike" @toggle-like="dataArrs.isLike = !dataArrs.isLike"></PostItem>          
    </div>
  </div>
  <hr class="my-4" />
    <LabelInput v-model="userName" label="이름" class="parent-class" style="color : red" id="parent-id"></LabelInput>

    <!--
    <LabelTitle v-model:title="userName" label="제목"></LabelTitle>    -->
    <!-- 자식 컴포넌트의 input이 여러개라면 v-model에 이름을 달고 여러개 선언 가능
    <UserName v-model:firstName="firstname" v-model:lastName="lastname"></UserName>
    -->
</div>

</main>
</template>

<script>
import PostItem from '@/components/setup/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
// import LabelTitle from '@/components/LabelTitle.vue';
// import UserName from '@/components/UserName.vue';

import { reactive, ref } from 'vue';

export default {
  components : {
    PostItem,
    PostCreate,
    LabelInput,
    // LabelTitle,
    // UserName,
  },
  setup () {
    const data = reactive({
      title : '반응형 제목1',
      contents : '반응형 내용1'
    });

    const createPost = newPost => {
      console.log('newPost : ', newPost)
      dataArr.push(newPost)
    };

    const dataArr = reactive([
      {id : 1, title : '제목1', contents : '내용1', isLike : true, type : 'news'},
      {id : 2, title : '제목2', contents : '내용2', isLike : true, type : 'news'},
      {id : 3, title : '제목3', contents : '내용3', isLike : true, type : 'news'},
      {id : 4, title : '제목4', contents : '내용4', isLike : false, type : 'notice'},
      {id : 5, title : '제목5', contents : '내용5', isLike : false, type : 'notice'},
    ])

    const userName = ref('');
    const firstname = ref('');
    const lastname = ref('')
    return {
      data,
      dataArr,
      createPost,
      userName,
      firstname,
      lastname,
    }
  }
}

</script>

<style lang="scss" scoped>

</style>