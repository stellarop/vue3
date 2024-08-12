export default {
	install(app, options) {
		const person = {
			name: '이름',
			say() {
				alert(this.name);
			},
			...options,
		};
		// script
		app.config.globalProperties.$person = person;
		// script setup
		// 값 호출 = provide, 값 출력 = inject
		app.provide('person', person);
	},
};
