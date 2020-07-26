<template>

    <v-row>
        <v-col xl="2" md="3" sm="4">
            <profile-menu></profile-menu>
        </v-col>
        <v-col>
                <router-view></router-view>
        </v-col>
    </v-row>

</template>

<script>

    import ProfileMenu from "../components/ProfileMenu";

    export default {
        name: "profile",
        components: {
            ProfileMenu
        }
    }
</script>
