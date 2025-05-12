import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/I18n'
import vuetify from './plugins/vuetify'
import './assets/sass/main.scss' 

const app = createApp(App)


app.use(i18n)
app.use(vuetify)
app.use(router)
app.mount('#app')