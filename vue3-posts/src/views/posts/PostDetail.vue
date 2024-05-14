<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">2024-04-06</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
		<!-- $route.query으로 쿼리스트링 값 받을 수 있음 
		<p>params : {{ $route.params }}</p>
		<p>queryString : {{ $route.query }}</p>
		<p>hash : {{ $route.hash }}</p>-->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// props로 게시글 고유 번호 넘길 수있음
const props = defineProps({
	id: Number,
});

// const route = useRoute();
const router = useRouter();

const form = ref({});
console.log('getPostById : ', getPostById(props.id));

const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();
const goListPage = () => {
	router.push('/posts');
};

const goEditPage = () => {
	router.push('/posts/' + props.id + '/edit');
};
</script>

<style lang="scss" scoped></style>
