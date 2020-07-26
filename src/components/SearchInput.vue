<template>
    <div class="search-autocomplete">
        <v-text-field
                label="Поиск"
                placeholder="Поиск"
                outlined
                v-model="search"
                @keyup="keyup"
                @focus="focus = true"
                ref="autocomplete"
                type="search"
        ></v-text-field>

        <v-card v-if="show" class="list-autocomplete">
            <v-card-text>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" @click="select">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "search-input",
        data: () => ({
            search: null,
            focus: false,
        }),
        props: {
            query: {
                type: String,
                default: ''
            }
        },
        created() {
            this.search = this.query

            let self = this;
            window.addEventListener('click', function(e){
                if (!self.$el.contains(e.target)){
                    self.focus = false;
                }
            })

        },
        methods: {

            keyup(e) {
                if(e.keyCode !== 13) {
                    this.focus = true
                    this.$store.dispatch('getAutocomplete', {q: this.search});
                } else {
                    this.send();
                }
            },

            select(e) {
                this.search = e.target.innerText
                this.send();
            },

            send() {
                this.$emit('search', this.search)
                this.focus = false
                this.$refs.autocomplete.blur();
            }
        },

        computed: {
            ...mapGetters(['items']),

            show() {
                return this.items.length && this.focus
            }
        }
    };
</script>

<style scoped>
    .list-autocomplete {
        position: absolute;
        width: 392px;
        z-index: 2;
        top: 87px;
    }
</style>
