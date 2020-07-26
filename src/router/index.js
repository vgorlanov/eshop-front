import Vue from 'vue'
import Router from 'vue-router'
import ProductList from "../views/pages/ProductList";
import ProductShow from "../views/pages/ProductShow";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import PasswordReset from "../views/auth/PasswordReset";
import PageNotFound from "../views/pages/PageNotFound";
import Logout from "../components/Logout";
import Profile from "../views/pages/Profile";
import Cart from "../views/components/Cart";
import Order from "../views/components/Order";
import Setting from "../views/components/Setting";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'front',
            component: ProductList,
        },
        {
            path: '/products/:id',
            name: 'product.show',
            component: ProductShow,
            props: true,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/password/reset',
            name: 'password.reset',
            component: PasswordReset
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/profile',
            name: 'profile',
            redirect: '/profile/cart',
            component: Profile,
            children: [
                {
                    path: '/profile/cart',
                    name: 'profile.cart',
                    component: Cart
                },
                {
                    path: '/profile/order',
                    name: 'profile.order',
                    component: Order
                },
                {
                    path: '/profile/setting',
                    name: 'profile.setting',
                    component: Setting
                },

            ]
        },
        { path: "*", component: PageNotFound }
    ]
})
