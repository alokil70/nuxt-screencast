<template>
    <div>
        <h1>Theatre</h1>
        <div class="d-flex flex-row mb-6">
            <products-list
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductsList from '../components/ProductsList'

export default {
    components: {
        ProductsList
    },
    async asyncData ({ $axios }) {
        const response = await $axios.get('/products')
        const products = response.data
        return { products }
    }
}
</script>

<style>

</style>
