import axios from 'axios';

const state = {
    items: []
};

const mutations = {
    SET_ITEMS(state, categories) {
        state.items = categories.data
    },

    CLEAR_ITEMS(state) {
        state.items = [];
    }
};

const actions = {
    getAutocomplete(context, payload) {
        axios.get('/search', {params: payload}).then(response => {
            context.commit('SET_ITEMS', response.data);
        });
    },
};

const getters = {
    items: state => {
        return state.items.map(function (item) {
            return {value: item.id, text: item.name}
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
