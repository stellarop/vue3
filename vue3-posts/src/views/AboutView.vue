<template>
	<div>
		<h2>AboutView</h2>
		<!-- 현재 path 경로 출력
        route 객체에는 현재 페이제 컴포넌트에 대한 정보가 담겨있음
    -->
		<p>{{ $route.path }}</p>
		<!-- 이벤트를 활용해서 라우터에 있는 다른 경로로 매핑 가능-->
		<button class="btn btn-primary" @click="$router.push('/')">
			Home 으로 이동
		</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// 물론 setup 내에서도 조회 가능
const route = useRoute();
console.log('route.path : ' + route.path);
</script>

<style lang="scss" scoped></style>
