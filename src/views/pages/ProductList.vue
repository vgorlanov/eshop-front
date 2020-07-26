<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <search-input :query="query.search" @search="onSearch"></search-input>
                            </v-col>
                            <v-col>
                                <category-select :category="query.category" @select="onSelect"></category-select>
                            </v-col>
                            <v-col>
                                <v-select
                                        :items="rows.data"
                                        v-model="query.per"
                                        label="Количество на странице"
                                        outlined
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-pagination
                                        :length="products.last_page"
                                        :total-visible="9"
                                        v-model="query.page"
                                ></v-pagination>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <product-item
                    v-for="product of products.data"
                    :product="product"
                    :key="product.id"
            ></product-item>
        </v-row>
    </v-container>

</template>

<script>
    import ProductItem from "../components/ProductItem";
    import CategorySelect from "../../components/CategorySelect";
    import SearchInput from "../../components/SearchInput";
    import {mapState} from 'vuex';
    import {mapGetters} from 'vuex';

    const rows = {
        data: [
            { value: 16, text: 16 },
            { value: 50, text: 50 },
            { value: 100, text: 100 },
        ],
    };

    export default {
        name: "product-list",
        components: {
            ProductItem,
            CategorySelect,
            SearchInput
        },
        data: () => ({
            rows,
            query: {},
            push: false
        }),
        created() {
            if(this.getToken) {
                this.$store.dispatch('initCart');
            }

            this.query = {
                page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
                per: this.$route.query.per ? parseInt(this.$route.query.per) : 16,
                category: this.$route.query.category,
                search: this.$route.query.search
            }
        },

        methods: {
            onSelect(value) {
                this.query.category = value;
                this.query.page = 1;
            },
            onSearch(value) {
                this.query.search = value;
            },
            initProducts() {
                this.$store.dispatch('initProducts', this.query);
            },
        },

        computed: {
            ...mapState({
                products: state => state.product.products,
            }),
            ...mapGetters(['getToken'])
        },

        watch: {
            query: {
                handler() {
                    if(this.push) {
                        this.$router.push({name : 'front', query: this.query})
                    }
                    this.push = true;
                    this.initProducts()

                },
                deep: true
            }
        }
    }
</script>
