import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createRouter, createWebHistory, Router } from "vue-router"
import App from './App.vue'
import Home from "./pages/Home.vue"
import Create from "./pages/Create.vue"
import Product from "./pages/Product.vue"

const router: Router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path : "/", name: "Home", component: Home },
		{ path : "/create", name : "Create", component : Create},
		{ path : "/product/:id", name : "Product", component : Product}
	]
		
})

createApp(App)
.use(router)
.mount('#app')
