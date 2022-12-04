import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/style.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/elegant-icons.css'
import '@/assets/css/themify-icons.css'
import '@/assets/css/slicknav.min.css'

// <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
//     <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
//     <link rel="stylesheet" href="css/themify-icons.css" type="text/css" />
//     <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
//     <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
//     <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
//     <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
//     <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
//     <link rel="stylesheet" href="css/style.css" type="text/css" />

createApp(App).use(router).mount('#app')
