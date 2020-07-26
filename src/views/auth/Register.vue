]<template>
    <v-row justify="center">
        <v-col cols="6">
            <v-card>
                <v-card-text>

                    <v-card-title>Регистрация</v-card-title>

                    <v-card-text>
                        <v-form @submit.prevent="register">
                            <v-text-field
                                    label="Логин"
                                    v-model="name"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    label="E-mail"
                                    v-model="email"
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    label="Пароль"
                                    v-model="password"
                                    type="password"
                                    outlined
                            ></v-text-field>

                            <v-btn
                                    color="primary"
                                    class="mr-4"
                                    type="submit"
                            >
                                Регистрация
                            </v-btn>
                        </v-form>
                    </v-card-text>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "register",
        data: () => ({
            name: null,
            password: null,
            email: null
        }),
        methods: {
            register() {
                this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                .then(() => this.$router.push({name : 'front'}))
            }
        }
    }
</script>

<style scoped>

</style>
