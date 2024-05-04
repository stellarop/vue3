<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
</div>
</template>

<script>
// 지역 컴포넌트는 components로 등록 후 사용

import TheNav from './components/TheNav.vue'
import TheView from './components/TheView.vue'

export default {
  components : {
    TheNav,
    TheView,
  },

  setup () {
  
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>