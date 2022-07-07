import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import { quasar_options } from './plugins/quasar';
import i18n from './plugins/i18n';
import router from './vue/router';
import store from './vue/store';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

app.use(i18n).use(Quasar, quasar_options).use(router).use(store).use(VueAxios, axios);

app.mount('#app');
