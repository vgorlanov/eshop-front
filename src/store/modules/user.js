import axios from 'axios';

const state = {
    user: {}
}

const actions = {
    getUser({commit}) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.auth.token
        axios.get('/user').then((response) => commit('SET_USER', response.data));
    },

    updateUser(context, payload) {
        return axios.post('/user', payload);
    }
}

const mutations = {
    SET_USER(state, user) {
        state.user = user
    },

    UPDATE_USER(state, data) {
        Object.assign(state.user, data);
    }
}

export default {
    state,
    actions,
    mutations
}
