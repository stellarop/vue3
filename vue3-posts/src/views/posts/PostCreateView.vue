<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button type="button" class="btn btn-primary" @click="save">
					저장
				</button>
			</template>
		</PostForm>
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
const router = useRouter();

const form = ref({
	title: null,
	content: null,
});

const goListPage = () => {
	router.push('/posts/');
};

const save = () => {
	try {
		createPost({
			...form.value,
			date: Date.now(),
		});
		router.push('/posts');
		vSuccess('등록이 완료되었습니다.');
	} catch (error) {
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
