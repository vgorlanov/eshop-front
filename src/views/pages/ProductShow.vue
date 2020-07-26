<template>

    <v-row>
        <v-col cols="5">
            <v-card>
                <v-card-text>
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="item.images"
                    >
                        <v-card-title>{{ item.name }}</v-card-title>
                    </v-img>
                    <br />
                    <div class="text--primary">{{ item.description }}</div>
                    <br />
                    <p>Цена: {{ item.price }}</p>

                    <div v-if="token">
                        <btn-cart :id="item.id"></btn-cart>
                    </div>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>

</template>

<script>

    import {mapState} from "vuex";
    import BtnCart from "../../components/BtnCart";

    export default {
        name: "product-show",
        components: {
            BtnCart
        },
        props: {
            product: {
                type: Object,
                require: true
            }
        },
        created() {
            if(this.product === undefined) {
                this.$store.dispatch('getProduct', {id : this.$route.params.id});
            }
        },
        computed: {
            ...mapState({
                token: state => state.auth.token,

                pr: state => state.product.product
            }),

            item() {
                return this.product === undefined ? this.pr : this.product
            }
        }
    }
</script>

<style scoped>

</style>
