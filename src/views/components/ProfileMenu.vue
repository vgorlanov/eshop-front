<template>
    <v-card
            width="256"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Личный кабинет
                    </v-list-item-title>

                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        :to="item.to"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    export default {
        name: "profile-menu",
        data:() => ({
            items: [
                { title: 'Корзина', icon: 'mdi-cart', to: '/profile/cart' },
                { title: 'Заказы', icon: 'mdi-format-list-bulleted', to: '/profile/order' },
                { title: 'Настройки', icon: 'mdi-cog-outline', to: '/profile/setting' },
            ],
        })
    }
</script>
