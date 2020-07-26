<template>
    <v-col xl="3" lg="4" md="5">
        <v-card class="product-item" @click="show">
            <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="product.images"
            >
                <v-card-title>{{ product.name }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
                <div>{{ product.description }}</div>
            </v-card-text>

            <v-card-actions>

                <v-card-subtitle>{{ product.price }} р.</v-card-subtitle>
                <div v-if="token">
                    <btn-cart :id="product.id"></btn-cart>
                </div>

            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    import {mapGetters} from 'vuex'
    import BtnCart from "../../components/BtnCart";

    export default {
        name: "product-item",
        components: {
            BtnCart
        },
        props: {
            product: {
                type: Object,
            }
        },
        methods: {
            show() {
                this.$router.push({name : 'product.show', params: { id: this.product.id, product: this.product }});
            },
        },
        computed:{
            ...mapGetters([
                'products'
            ]),
            token() {
                return !!localStorage.getItem('access_token')
            },
        }
    }
</script>

<style scoped>
    .product-item {
        cursor: pointer;
    }
</style>
