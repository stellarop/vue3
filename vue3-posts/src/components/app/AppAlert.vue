<template>
	<!-- 화면을 동적인 애니메이션 적용을 위해 사용하는 내장 컴포넌트 -->
	<!-- <Transition name="slide">
		<div v-if="show" class="app-alert" role="alert" :class="styleClass">
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="{ message, index } in items"
				:key="index"
				class="alert"
				role="alert"
				:class="styleClass(type)"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});

const styleClass = type =>
	type === 'error' ? 'alert alert-danger' : 'alert alert-primary';
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
.slide-enter-activ,
.slide-leave-active {
	transition: all 0.5s ease;
}
</style>
