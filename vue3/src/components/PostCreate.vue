<template>
  <div class="row g-3">
    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 넘길땐 $emit('이벤트 명')
        @click="$emit('createPost',1, 2, 3, '서아를찌른플레뢰의주인피오라')
    -->
    <div class="col col-2">
      <select v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control">
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>

  
    
    
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  // 이벤트 선언 exits 배열로도 가능
  // exits : ['createPost'],
  exits : {
    createPost : newPost =>{
      if (!newPost.type){
        return false;
      }else if(!newPost.title){
        return false;
      }
      return true;
    }
  },
  setup (props, {emit}) {
    
    const type = ref('news')
    const title = ref('');

    const createPost = () =>{

      const newPost = {
        type : type.value,
        title : title.value
      };

      emit('createPost', newPost);
      type.value = 'news';
      title.value = '';

      console.log('type : ' + type.value)
      console.log('title : ' + title.value)
    };


    return {
      createPost,
      title,
      type,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>