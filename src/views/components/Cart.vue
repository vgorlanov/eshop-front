<template>
    <v-row>
        <v-col xl="8" lg="10" md="8" sm="10" xs="12" class="pt-0">
            <v-card v-if="cart.length">
                <v-card-title>Продукты</v-card-title>
                <v-card-text>
                    <v-data-table
                            :headers="headers"
                            :items="cart"
                            hide-default-footer
                    >
                        <template v-slot:item.count="{ item }">
                            <v-btn icon color="grey" @click="minus(item)">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            {{ item.count }}
                            <v-btn icon color="grey" @click="plus(item)">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card-text>
                <v-card-actions>

                    <v-row>
                        <v-col cols="9">
                            <div class="text-right">Сумма: {{ price }}</div>
                        </v-col>

                        <v-col class="py-0">
                            <v-btn
                                    color="success"
                                    text
                                    class="buy"
                                    @click="buy"
                            >
                                Оформить
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
            <div v-else class="display-2 text-center">
                Корзина пуста
            </div>

        </v-col>
    </v-row>


</template>

<script>
    import {mapGetters} from 'vuex';

    const headers = [
        {
            text: 'ID',
            value: 'id',
        },
        {
            text: 'Название',
            value: 'name',
        },
        {
            text: 'Цена',
            value: 'price'
        },
        {
            text: 'Количество',
            value: 'count'
        }
    ]

    export default {
        name: "cart",
        data: () => ({
            headers
        }),
        created() {
            if(this.cart.length === 0) {
                this.$store.dispatch('initCart');
            }
        },
        computed: {
            ...mapGetters([
                'cart'
            ]),
            price() {
                let sum = 0;
                for (let item of this.cart) {
                    sum += item.price * item.count
                }
                return sum;
            }
        },
        methods: {
            buy() {
                this.$store.dispatch('createOrder').then(() => {
                    this.$flash({
                        message: 'Покупка оформлена',
                        type: 'success',
                    });
                })
            },
            plus(row) {
                this.$store.dispatch('addToCart', {id: row.id}).then(() => {
                    this.$store.commit('SET_COUNT', {count: ++row.count, id: row.id})
                })
            },
            minus(row) {
                if(row.count > 1) {
                    this.$store.dispatch('deleteFromCart', {id: row.id}).then(() => {
                        this.$store.commit('SET_COUNT', {count: --row.count, id: row.id})
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .buy {
        float: right;
    }
</style>
