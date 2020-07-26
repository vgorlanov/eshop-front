<template>
    <v-select
            :items="categories"
            label="Категории"
            outlined
            @change="select"
            v-model="current"
    >
    </v-select>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "category-select",
        data: () => ({
            current: null
        }),
        props: {
            category: {
                default: null
            }
        },
        created() {
            this.current = parseInt(this.category);
            this.$store.dispatch('initCategories');
        },
        methods: {
            select(value) {
                if(!Number.isNaN(value)) {
                  this.$emit('select', value)
                }
            }
        },
        computed: mapGetters([
            'categories'
        ]),
    }
</script>

<style scoped>

</style>
