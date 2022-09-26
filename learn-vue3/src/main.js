import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
//import AppCard from '@/components/AppCard.vue';

createApp(App).mount('#app');

// 전역 컴포넌트 등록방법.
//const app = createApp(App);
//app.component('AppCard', AppCard);
//app.mount('#app');

// mount 먼저시키고 import 시켜야함
import 'bootstrap/dist/js/bootstrap.js';
