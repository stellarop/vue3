import { fileURLToPath, URL } from 'node:url';

// 컴포넌트 임포트 자동으로 해주는 플러그인
import Component from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		Component({
			// 해당 경로에 있는 컴포넌트만 임포트
			dirs: ['src/components/app'],
			// 모든 컴포넌트 임포트
			dts: true,
		}),
	],
	mode: '',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
