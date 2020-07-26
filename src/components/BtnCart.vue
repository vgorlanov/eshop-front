<template>
    <div>
        <v-btn
                v-if="inCart"
                color="black"
                text
                @click.stop="removeFromCart"
        >
            В корзине
        </v-btn>
        <v-btn
                v-else
                color="orange"
                text
                @click.stop="addToCart"
        >
            В корзину
        </v-btn>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "btn-cart",
        props: {
            id: Number
        },
        computed: {
            ...mapState({
                cart: state => state.cart.cart
            }),
            inCart() {
                return Object.prototype.hasOwnProperty.call(this.cart, this.id);
            }
        },
        methods: {
            addToCart() {
                this.$store.dispatch('addToCart', {id: this.id});
            },
            removeFromCart() {
                this.$store.dispatch('deleteFromCart', {id: this.id});
            },
        }
    }
</script>
