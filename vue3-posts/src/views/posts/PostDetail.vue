<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ $dayjs(post.date).format('YYYY-HH-MM') }}</p>
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
				<button class="btn btn-outline-danger" @click="deleteDetail">
					삭제
				</button>
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
import { deletePost } from '@/api/posts';
// props로 게시글 고유 번호 넘길 수있음
const props = defineProps({
	id: Number,
});

// const route = useRoute();
const router = useRouter();

const post = ref({});
console.log('getPostById : ', getPostById(props.id));

const fetchPost = async () => {
	const { data } = await getPostById(props.id);
	setPost(data);
};

const setPost = ({ title, content, date }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.date = date;
};

fetchPost();
const goListPage = () => {
	router.push('/posts');
};

const goEditPage = () => {
	router.push('/posts/' + props.id + '/edit');
};

const deleteDetail = async () => {
	try {
		await deletePost(props.id);
		router.push('/posts/');
	} catch (error) {
		console.error(error);
	}
};
</script>

<style lang="scss" scoped></style>
