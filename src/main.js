import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/scss/style.scss'
import 'swiper/css';
import 'swiper/css/navigation';

createApp(App).use(store).mount('#app')
