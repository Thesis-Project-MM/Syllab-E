import { createApp } from 'vue'
import router from './router.js'
import store from './store/index.js'
import App from './App.vue'
import BaseCard from './components/BaseCard.vue';
import BaseSpinner from './components/BaseSpinner.vue';
import BaseDialog from './components/BaseDialog.vue';


const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app')
