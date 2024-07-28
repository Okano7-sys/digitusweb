import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faEnvelope, faBell, faUser } from '@fortawesome/free-solid-svg-icons';


library.add(faSearch, faEnvelope, faBell, faUser);


createApp(App).mount('#app')





.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app');
