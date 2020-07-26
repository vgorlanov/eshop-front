<template>
    <v-alert :type="type">
        <span data-notify="message" v-html="message"></span>
        <span
                class="close"
                @click="close"
        >
            ×
        </span>

    </v-alert>
</template>

<script>
    export default {
        name: "FlashItem",
        props: {
            message: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                default: 'info'
            },
            timeout: {
                type: Number,
                default: 2500,
            },
            timestamp: {
                type: Date,
                default: () => new Date()
            }
        },
        mounted() {
            if (this.timeout) {
                setTimeout(this.close, this.timeout);
            }
        },
        methods: {
            close() {
                this.$emit('on-close', this.timestamp);
            }
        }
    }
</script>

<style scoped>
    .close {
        cursor: pointer;
        float: right;
    }
</style>
