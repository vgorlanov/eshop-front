import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

import product from "./modules/product";
import category from "./modules/category";
import search from "./modules/search";
import auth from "./modules/auth";
import cart from "./modules/cart";
import order from "./modules/order";
import user from "./modules/user";

if(localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
}


axios.defaults.baseURL = process.env.VUE_APP_BASE_URL !== '' ? process.env.VUE_APP_BASE_URL : 'http://localhost/api';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        product,
        category,
        search,
        auth,
        cart,
        order,
        user
    }
});

export default store
