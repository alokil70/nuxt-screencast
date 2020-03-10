<template>
    <v-app>
        <nuxt-link to="/admin" class="left-corner">
            ADMIN
        </nuxt-link>
        <v-container fluid>
            <nuxt />
        </v-container>
    </v-app>
</template>

<style>
    .left-corner {
        position: absolute;
        color: grey;
        text-decoration: none;
    }
</style>
