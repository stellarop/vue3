<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ date }}</p>
		</div>
	</div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
