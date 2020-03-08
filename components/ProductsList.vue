<template>
    <v-card
        width="340px"
    >
        <v-card-title>{{ product.productName }}</v-card-title>
    </v-card>
</template>

<script>
export default {
    name: 'ProductsList',
    props: {
        product: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data: () => ({})
}
</script>

<style scoped>

</style>
