<template>
    <div class="catalog-cart-item">
        <div class="catalog-cart-item__wrap">
            <img class="catalog-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="t-shirt">
        </div>
        <div class="catalog-cart-item__info">
            <p class="catalot-cart-item__name">Item: {{ cart_item_data.name }}</p>
            <p class="catalog-cart-item__price">Price: {{ cart_item_data.price }} UAH</p>
            <p class="catalog-cart-item__article">Article: {{ cart_item_data.article }}</p>
        </div>
        <div class="catalog-cart-item__quantity">
            <p>Quantity</p>
            <p>{{ cart_item_data.quantity }}</p>
        </div>
        <button v-on:click="deleteItemFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: 'CatalogCartItem',
        components: {},
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                title: 'Catalog cart item'
            }
        },
        computed: {},
        methods: {
            deleteItemFromCart() {
                this.$emit('deleteItemFromCart');
            }
        },
        watch: {},
        mounted() {
            console.log('Catalog cart item component was loaded!');
        }
    }
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";
    .catalog-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        box-shadow: 0 0 8px 0 $color-shadow;
        &__wrap {
            width: 100px;
            overflow: hidden;
        }
        &__image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>