<template>
    <v-app-bar
            app
            color="primary"
            dark
    >
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
            />

            <h2><a href="/" class="link-home">Vlad Eshop</a></h2>
        </div>

        <v-spacer></v-spacer>

        <div class="pr-4">
            <v-btn to="/admin/products" color="error" target="_blank">
                <span class="mr-2">Админка</span>
            </v-btn>
        </div>

        <div v-if="getToken">
            <v-badge v-if="cart.length"
                    color="error"
                    :content="cart.length"
                    overlap
            >
                <v-btn to="/profile/cart" text>Корзина</v-btn>
            </v-badge>
            <v-btn v-else to="/profile/cart" text>Корзина</v-btn>

            <v-btn to="/logout" text>
                <span class="mr-2">Выйти</span>
            </v-btn>
        </div>

        <div v-else>
            <v-btn to="/login" text>
                <span class="mr-2">Войти</span>
            </v-btn>

            <v-btn to="register" text>
                <span class="mr-2">Регистрация</span>
            </v-btn>
        </div>


    </v-app-bar>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "toolbar",
        computed: {
            ...mapGetters(['getToken', 'cart'])
        }
    }
</script>

<style scoped>
    .link-home, .profile-link {
        color: white;
        text-decoration: none;
    }

    .profile-link {
        font-size: 16px;
        text-transform: uppercase;
    }
</style>
