import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
// Plugins
import { registerPlugins } from '@/plugins';
import vuetify from './plugins/vuetify';
import './assets/style.scss';

const app = createApp(App);
registerPlugins(app);
app.use(router);
app.use(vuetify);
app.mount('#app');
