import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Animals from "../views/Animals.vue";
const routes = [
	{
		name: "index",
		path: "/",
		component: Home,
	},
	{
		name: "animals",
		path: "/animals",
		component: Animals,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
