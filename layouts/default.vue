<template>
    <v-app>
        <v-toolbar
            dark
            color="orange"
        >
            <v-toolbar-title>
                <v-btn to="/admin">
                    Кафе Марафон
                </v-btn>
            </v-toolbar-title>
            <v-spacer />
            <v-tabs color="deep-purple" right>
                <v-tab v-for="ctg in category" :key="ctg.id">
                    {{ ctg.categoryName }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <!--<nuxt-link " class="left-corner">
            ADMIN
        </nuxt-link>-->
        <v-container fluid class="back--color">
            <nuxt />
        </v-container>
    </v-app>
</template>
<script>
export default {
    async asyncData ({ $axios }) {
        const response = await $axios.get('/category')
        const category = response.data
        return { category }
    }
}
</script>
<style>
    .left-corner {
        position: absolute;
        color: grey;
        text-decoration: none;
        font-size: 14px;
    }
    .back--color {
        background-color: orange;
    }
</style>
