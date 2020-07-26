<template>
    <v-row justify="center">
        <v-col cols="6">
            <v-card>
                <v-card-text>
                    <v-card-title>Сброс пароля</v-card-title>

                    <v-card-text>
                        <v-form>

                            <v-text-field
                                    label="E-mail"
                                    outlined
                            ></v-text-field>

                            <v-btn
                                    color="primary"
                                    class="mr-4"
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
        name: "password-reset"
    }
</script>

<style scoped>

</style>
