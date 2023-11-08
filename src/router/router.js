import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import CatalogMain from "../components/CatalogMain";
import CatalogCart from "../components/CatalogCart";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: CatalogMain
        },
        {
            path: '/cart',
            name: 'cart',
            component: CatalogCart,
            props: true
        }
    ]
});

export default router;

const app = createApp();
app.use(router);