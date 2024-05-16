<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<form @submit.prevent>
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:date="post.date"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<nav class="mt-5" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{ disabled: !(params._page > 1) }">
					<a
						class="page-link"
						href="#"
						aria-label="Previous"
						@click.prevent="--params._page"
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li
					v-for="page in pageCount"
					:key="page"
					class="page-item"
					:class="{ active: params._page === page }"
				>
					<a class="page-link" href="#" @click.prevent="params._page = page">{{
						page
					}}</a>
				</li>
				<li
					class="page-item"
					:class="{ disabled: !(params._page < pageCount) }"
				>
					<a
						class="page-link"
						href="#"
						aria-label="Next"
						@click.prevent="++params._page"
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr class="my-5" />
		<AppCard><PostDetail :id="1"></PostDetail></AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import { getPosts } from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
// 페이지 이동을 위한 라우터 객체 선언
const router = useRouter();

// 반응형 배열 선언
const posts = ref([]);
const params = ref({
	_sort: 'date',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});

//page
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

// 기존 프라미스 객체를 더 쉽게 사용
const fetchPosts = async () => {
	const { data, headers } = await getPosts(params.value);
	console.log('response : ', data);
	posts.value = data;
	totalCount.value = headers['x-total-count'];
};
// axios 통신 후 받은 데이터 선언한 배열에 넣기
// const fetchPosts = () => {
// 	getPosts()
// 		.then(response => {
// 			console.log('response : ', response);
// 		})
// 		.catch(error => {
// 			console.log('error : ', error);
// 		});
// };
// 호출
// 반응형 상태가 변경시 다시 콜백
watchEffect(fetchPosts);
const goPage = id => {
	// router.push('/posts/' + id);
	// 라우터 설정 시 지정한 이름으로도 페이지 이동 가능
	// 페이지 이동하면서 넘길 값은 params, queryString
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		query: {
			searchText: 'Hello',
		},
		hash: '#World',
	});
};
</script>

<style lang="scss" scoped></style>
