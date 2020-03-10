<template>
    <div>
        <div>
            <div class="d-flex flex-wrap">
                <products-list
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
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
