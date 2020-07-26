<template>
    <v-row >
        <v-col cols="6" class="pt-0">
            <v-card v-if="orders.length">
                <v-card-title>
                    Заказы
                </v-card-title>
                <v-card-text>
                    <v-data-table
                            class="order-table"
                            :headers="headers"
                            :items="orders"
                            hide-default-footer
                            @click:row="show"
                    >
                        <template v-slot:item.created_at="{ item }">
                            {{ dataFormat(item.created_at) }}
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
            <div v-else class="display-2 text-center">Заказов ещё нет</div>
        </v-col>

        <v-col cols="6" class="pt-0">
            <v-card v-if="products">
                <v-card-title>Товары заказа № {{ number }}</v-card-title>

                <v-card-text>
                    <v-data-table
                            :items="products"
                            :headers="headersDetail"
                            hide-default-header
                            hide-default-footer
                    >
                        <template v-slot:item.data.images="{ item }">
                            <v-img
                                    max-height="128"
                                    max-width="128"
                                    :src="item.data.images"
                            ></v-img>
                        </template>
                    </v-data-table>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>

</template>

<script>
    import {mapState} from 'vuex'
    import mixins from "../../mixins";

    const headers = [
        {
            text: 'Номер заказа',
            value: 'id',
        },
        {
            text: 'Цена',
            value: 'price'
        },
        {
            text: 'Дата создания',
            value: 'created_at'
        }
    ]

    const headersDetail = [
        {
            text: 'ID',
            value: 'data.id'
        },
        {
            text: 'Изображение',
            value: 'data.images'
        },
        {
            text: 'Цена',
            value: 'data.price'
        },
        {
            text: 'Количество',
            value: 'count'
        }
    ]

    export default {
        name: "order",
        mixins: [mixins],
        data: () => ({
            headers,
            headersDetail,
            products: null,
            number: 0,
        }),
        created() {
            if(this.orders.length === 0) {
                this.$store.dispatch('initOrders')
            }
        },
        computed: mapState({
            orders: state => state.order.orders
        }),
        methods: {
            show(row) {
                let result = [];
                for (let i in row.products) {
                    result.push(row.products[i])
                }

                this.products = result
                this.number = row.id
            },
        }
    }
</script>

<style scoped>
    .order-table {
        cursor: pointer;
    }
</style>
