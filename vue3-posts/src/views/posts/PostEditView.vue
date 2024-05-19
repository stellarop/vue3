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
	<AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
		vAlert('네트워크 오류');
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
		vAlert('수정이 완료되었습니다.', 'success');
		// router.push('/posts/' + route.params.id);
	} catch (error) {
		console.error(error);
	}
};

// alert
const showAlert = ref(false);

const alertMessage = ref('');

const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertType.value = type;
	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};

const alertType = ref('');
</script>

<style lang="scss" scoped></style>
