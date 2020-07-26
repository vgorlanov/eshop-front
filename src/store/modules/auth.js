import axios from 'axios';

const state = {
    token: localStorage.getItem('access_token') || null,
};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    DESTROY_TOKEN(state) {
        state.token = null
    }
};

const actions = {
    retrieveToken(context, credentials) {
        return axios.post('login', {
            username: credentials.username,
            password: credentials.password
        }).then(response => {
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            context.commit('SET_TOKEN', token)
        })
    },

    destroyToken(context) {
        if(context.state.token !== null) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            return axios.post('logout').then(() => {
                localStorage.removeItem('access_token')
                context.commit('DESTROY_TOKEN')
            }).catch(() => {
                localStorage.removeItem('access_token')
                context.commit('DESTROY_TOKEN')
            })
        }
    },

    register(context, payload) {
        return axios.post('/register', {
            name: payload.name,
            email: payload.email,
            password: payload.password,
        })
    },
};

const getters = {
    getToken: state => {
        return state.token
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
}
