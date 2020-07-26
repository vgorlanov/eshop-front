<template>
    <div>
        <flash-item
                v-for="alert of alerts"
                :key="alert.timestamp.getTime()"
                :message="alert.message"
                :type="alert.type"
                :timestamp="alert.timestamp"
                @on-close="removeFlash"
        ></flash-item>
    </div>
</template>

<script>
    import FlashItem from "./FlashItem";

    export default {
        name: "flash-list",
        components: {
            FlashItem
        },
        data() {
            return {
                alerts: this.$flashStore.state,
            }
        },
        methods: {
            removeFlash(timestamp) {
                this.$flashStore.removeFlash(timestamp)
            }
        }
    }
</script>

