<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ date }}</p>
			<div class="d-flex flex-row-reverse">
				<button class="btn p-0" @click.stop="$emit('modal')">
					<i class="bi bi-file-earmark"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';

// setup 함수에서 props을 정의할때는 매크로 함수로 정의
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	date: {
		type: [String, Date, Number],
	},
});

defineEmits(['modal']);
</script>

<style lang="scss" scoped></style>
