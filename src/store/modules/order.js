import axios from 'axios';

const state = {
    orders: []
}

const actions = {
    initOrders({commit}) {
        axios.get('/order').then(response => commit('SET_ORDERS', response.data))
    },

    createOrder({commit}) {
        return axios.post('/order').then(() => commit('SET_CART', []));
    }
}

const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders;
    },
}

export default {
    state,
    actions,
    mutations,
}
