import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import '/@/style/reset.less';
import ElementUI from '/@/plugins/element-plus';

const app = createApp(App);
app.use(ElementUI, { size: 'small', zIndex: 3000 });
app.mount('#app');

