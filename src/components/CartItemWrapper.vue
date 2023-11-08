<template>
    <div class="cart-item-wrapper">
        <CatalogCartItem 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteItemFromCart="deleteItemFromCart(index)"
        />
    </div>
</template>

<script>
import CatalogCartItem from './CatalogCartItem.vue';
import { mapActions } from 'vuex';

    export default {
        name: 'CartItemWrapper',
        components: {
            CatalogCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
            ]),
            deleteItemFromCart(index){
                this.DELETE_FROM_CART(index);
            }
        },
    }
</script>

<style lang="scss">

</style>