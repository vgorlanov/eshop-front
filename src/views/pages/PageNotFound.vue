<template>
    <v-container>
        <p class="error-code">404</p>
        <p class="error-text">Страница не обнаружена</p>
    </v-container>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped>
    .error-code {
        font-size: 250px;
        text-align: center;
    }

    .error-text {
        font-size: 50px;
        text-align: center;
    }
</style>
