import axios from 'axios';

const state = {
    products: [],
    product: {},
};

const actions = {

    initProducts({commit}, payload) {
        return axios.get('/products', {
            params: {
                page: payload.page,
                per: payload.per,
                category: payload.category,
                search: payload.search,
                order: payload.order
            }
        }).then(response => commit('SET_PRODUCTS', response.data));
    },

    getProduct({commit}, payload) {
        return axios.get('/products/' + payload.id).then(response => commit('SET_PRODUCT', response.data))
    }
};

const mutations = {

    SET_PRODUCTS(state, products) {
        state.products = products
    },

    SET_PRODUCT(state, product) {
        state.product = product
    }

};

const getters = {
    product: state => id => {
        return state.products.data.find(products => products.id === id);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}
