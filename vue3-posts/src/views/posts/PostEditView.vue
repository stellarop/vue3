<template>
	<h2>게시글 수정</h2>
	<hr class="my-4" />
	<PostForm
		v-model:title="form.title"
		v-model:content="form.content"
		@submit.prevent
	>
		<template #actions>
			<button
				type="button"
				class="btn btn-outline-danger"
				@click="goDetailPage"
			>
				취소
			</button>
			<button type="button" class="btn btn-primary" @click="edit">수정</button>
		</template>
	</PostForm>
	<!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> -->
	<AppAlert :items="alerts"></AppAlert>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();
const form = ref({
	title: null,
	content: null,
	date: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(route.params.id);
		setForm(data);
	} catch (error) {
		vAlert(error.message);
	}
};

const setForm = ({ title, content, date }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.date = date;
};

fetchPost();

const goDetailPage = () => {
	router.push('/posts/' + route.params.id);
};

const edit = () => {
	try {
		updatePost(route.params.id, { ...form.value });
		vSuccess('수정이 완료되었습니다.');
		// router.push('/posts/' + route.params.id);
	} catch (error) {
		vAlert(error.message);
		console.error(error);
	}
};

// alert
const alerts = ref([]);

const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });

	setTimeout(() => {
		alerts.value.shift();
	}, 3000);
};

const vSuccess = message => {
	vAlert(message, 'success');
};
</script>

<style lang="scss" scoped></style>
