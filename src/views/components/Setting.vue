<template>
    <v-row>
        <v-col cols="9" class="pt-0">
            <v-card>
                <v-card-title>Настройки</v-card-title>
                <v-card-text>
                    <v-text-field
                            label="Имя"
                            outlined
                            v-model="name"
                    ></v-text-field>
                    <v-text-field
                            label="E-mail"
                            outlined
                            v-model="email"
                    ></v-text-field>
                    <v-text-field
                            label="Пароль"
                            outlined
                            :type="'password'"
                            v-model="password"
                    ></v-text-field>
                    <v-btn @click="submit" color="primary">Применить</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "setting",
        data:() => ({
            password: null
        }),
        created() {
            this.$store.dispatch('getUser')
        },
        computed: {

            ...mapState({
                user: state => state.user.user
            }),

            name: {
                get () {
                    return this.user.name
                },
                set (value) {
                    this.$store.commit('UPDATE_USER', {name: value})
                }
            },
            email: {
                get() {
                    return this.user.email
                },
                set(value) {
                    this.$store.commit('UPDATE_USER', {email: value})
                }
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('updateUser', {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.password
                }).then(() => {
                    this.$flash({
                        message: 'Изменения применены',
                        type: 'success',
                    });
                })

            }
        }
    }
</script>

<style scoped>

</style>
