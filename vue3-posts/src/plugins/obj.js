const objPlugins = {
	install(app, options) {
		console.log('objPlugins app : ', app);
		console.log('objPlugins app : ', options);
		// app.component() 전역 컴포넌트
		// app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가 가능
		// app.directive 커스텀 디렉티브
		// app.provide 리소스
	},
};

export default objPlugins;
