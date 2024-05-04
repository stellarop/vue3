import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
//import TheNav from '@/components/TheNav.vue';
//import TheView from '@/components/TheView.vue';

// 전역적으로 등록한 컴포넌트는 어디에서든지 사용 가능
const app = createApp(App);

// app.component('AppCard', AppCard);
/*
app
  .component('TheNav', TheNav)
  .component('TheView', TheView)
  .component('AppCard', AppCard)
  */
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
