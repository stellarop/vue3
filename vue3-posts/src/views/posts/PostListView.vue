<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>
		<hr class="my-4" />
		<AppGrid :items="posts">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:date="$dayjs(item.date).format('YYYY-HH-MM')"
					@click="goPage(item.id)"
					@modal="openModal(item)"
				></PostItem
			></template>
		</AppGrid>

		<AppPage
			:currentPage="params._page"
			:pageCount="pageCount"
			@page="page => (params._page = page)"
		></AppPage>

		<!-- Teleport는 안에 있는 컴포넌트를 이동할 수 있음-->
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:date="$dayjs(modalDate).format('YYYY-HH-MM')"
			/>
		</Teleport>

		<!--<hr class="my-5" />
		<AppCard><PostDetail :id="1"></PostDetail></AppCard>-->
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import { getPosts } from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
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

// modal
const show = ref(false);
const openModal = item => {
	modalTitle.value = item.title;
	modalContent.value = item.content;
	modalDate.value = item.date;
	show.value = true;
};
// const closeModal = () => (show.value = false);

const modalTitle = ref('');
const modalContent = ref('');
const modalDate = ref('');
</script>

<style lang="scss" scoped></style>
