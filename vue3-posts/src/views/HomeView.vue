<template>
	<div>
		<h2>HomeView</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">
			about 으로 이동
		</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6"
			><AppCard>{{ item }}</AppCard></AppGrid
		>
	</div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '바나나', '딸기']);
</script>

<style lang="scss" scoped></style>
