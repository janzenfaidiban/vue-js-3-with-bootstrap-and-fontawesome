import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.use(
    router, 
    library, 
    faUserSecret, 
    FontAwesomeIcon
    )
.mount('#app')

