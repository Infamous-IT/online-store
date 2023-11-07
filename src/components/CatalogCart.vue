<template>
    <div class="catalog-cart">
        <h2>{{ title }}</h2>
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
        name: 'CatalogCart',
        components: {CatalogCartItem},
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                title: 'Catalog cart'
            }
        },
        computed: {},
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
            ]),
            deleteItemFromCart(index){
                this.DELETE_FROM_CART(index);
            }
        },
        watch: {},
        mounted() {
            console.log('Catalog cart component was loaded!');
        }
    }
</script>

<style scoped lang="scss">
    .catalog-cart {
        width: 400px;
        margin: 0 auto;
    }
</style>