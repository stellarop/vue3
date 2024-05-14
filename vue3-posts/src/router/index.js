import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostDetail from '@/views/posts/PostDetail.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
// 뷰 라우터는 특정 url로 접속 했을때 실제 뷰 페이지를 매핑

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		component: PostListView,
	},
	{
		path: '/posts/create',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetail,
		// 부모 컴포넌트에 값을 자식 컴포넌트로 받으려면 props 설정
		// props: true,
		props: route => ({
			id: parseInt(route.params.id),
		}),
	},
	{
		path: '/posts/:id/edit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		// 중첩된 라우터 적용 시 children 사용
		children: [
			{
				path: '',
				name: 'NestedHomeView',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	// history 모드는 배포할 때 서버에 맞는 설정을 해줘야 함
	// hash 모드는 배포할 때 서버 설정 불필요

	// createWebHistory() = history 모드로 동작
	history: createWebHistory('/'),
	// createWebHashHistory() = hash 모드로 동작
	// history: createWebHashHistory(),
	routes: routes,
});

export default router;
