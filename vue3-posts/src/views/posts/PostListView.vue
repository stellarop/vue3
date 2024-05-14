<template>
	<div>
		<h2>게시글 목록</h2>
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
		<hr class="my-4" />
		<AppCard><PostDetail :id="1"></PostDetail></AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
// 페이지 이동을 위한 라우터 객체 선언
const router = useRouter();

// 반응형 배열 선언
const posts = ref([]);

// axios 통신 후 받은 데이터 선언한 배열에 넣기
const fetchPosts = () => {
	posts.value = getPosts();
};
// 호출
fetchPosts();

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
