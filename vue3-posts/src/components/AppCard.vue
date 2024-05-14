<template>
	<div class="card">
		<div v-if="$.slots.header" class="caed-header">
			<slot name="header"></slot>
		</div>
		<div v-if="$.slots.default" class="caed-body">
			<slot></slot>
		</div>
		<div v-if="$.slots.footer" class="caed-footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
