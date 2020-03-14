<template>
    <v-app>
        <nuxt-link to="/admin" class="left-corner">
            ADMIN
        </nuxt-link>
        <v-container fluid class="back--color">
            <nuxt />
        </v-container>
        <v-bottom-navigation
            app
            grow
            color="white"
            background-color="orange"
            v-model="recent"
        >
            <v-btn value="recent">
                <span class="display-1">Напитки</span>
            </v-btn>

            <v-btn value="favorites">
                <span class="display-1">Мясо</span>
            </v-btn>

            <v-btn value="nearby">
                <span class="display-1">Салаты</span>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<style>
    .left-corner {
        position: absolute;
        color: grey;
        text-decoration: none;
    }
    .back--color {
        background-color: orange;
    }
</style>
