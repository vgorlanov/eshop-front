import axios from 'axios';

const state = {
    cart: {}
};

const actions = {
    initCart({commit}) {
        axios.get('/cart').then(response => commit('SET_CART', response.data))
    },

    addToCart({commit}, payload) {
        return axios.post('/cart', {
            id: payload.id
        }).then(response => commit('SET_CART', response.data))
    },

    deleteFromCart({commit}, payload) {
        return axios.delete('/cart/' + payload.id).then(response => commit('SET_CART', response.data))
    }

};

const mutations = {
    SET_CART(state, cart) {
        state.cart = cart;
    },
    SET_COUNT(state, count) {
        for (let item in state.cart) {
            if(state.cart[item].data.id === count.id) {
                state.cart[item].count = count.count
            }
        }
    }
};

const getters = {
    cart: state => {
        const response = [];
        if(Object.keys(state.cart).length) {
            for (let item in state.cart) {
                if(Object.prototype.hasOwnProperty.call(state.cart, item)) {
                    state.cart[item].data.count = state.cart[item].count
                    response.push(state.cart[item].data)
                }
            }
        }
        return response;
    },

    products: state => {
        return Object.keys(state.cart)
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
}
