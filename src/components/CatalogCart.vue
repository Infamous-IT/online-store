<template>
    <div class="catalog-cart">
        <router-link :to="{name: 'catalog'}" >
            <div class="catalog__link">
                Back to catalog
            </div>
        </router-link>
        <h2>Cart</h2>
        <p v-if="!CART.length">There are no products in the cart!</p>
        <div class="cart-item__wrap">
            <CartItemWrapper 
            v-if="CART.length"
            :cart_data="CART"
        />
        </div>
    </div>
</template>

<script>
import CartItemWrapper from './CartItemWrapper.vue';
import { mapGetters } from 'vuex';

    export default {
        name: 'CatalogCart',
        components: {
            CartItemWrapper
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style scoped lang="scss">
    .catalog-cart {
        width: 400px;
        margin: 0 auto;
    }
</style>