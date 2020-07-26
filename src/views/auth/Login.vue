<template>
    <v-row justify="center">
        <v-col cols="6">
            <v-card>
                <v-card-text>
                    <v-card-title>Авторизация</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="login">
                            <v-text-field
                                    label="Логин"
                                    outlined
                                    v-model="username"
                            ></v-text-field>

                            <v-text-field
                                    label="Пароль"
                                    outlined
                                    type="password"
                                    v-model="password"
                            ></v-text-field>

                            <v-row>
                                <v-col cols="10">
                                    <p>Login: admin@admin.ru</p>
                                    <p>Password: admin</p>
                                </v-col>
                                <v-col>
                                    <v-btn
                                            color="primary"
                                            class="mr-4"
                                            type="submit"
                                    >
                                        Войти
                                    </v-btn>
                                </v-col>
                            </v-row>

                        </v-form>
                    </v-card-text>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

    export default {
        name: "login",
        data: () => ({
            username: null,
            password: null
        }),
        mounted() {
            if(localStorage.getItem('access_token') !== null) {
                this.$router.push({name : 'front'})
            }
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    this.$store.dispatch('initCart');
                    this.$router.push({name : 'front'})
                })
                .catch(error => {
                    this.$flash({
                        message: error.response.data,
                        type: 'error',
                    });
                })
            }
        },
    }
</script>
