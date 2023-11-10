<template>
    <div class="catalog-cart-item">
        <div class="catalog-cart-item__wrap">
            <img class="catalog-cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" alt="t-shirt">
        </div>
        <div class="catalog-cart-item__info">
            <p class="catalot-cart-item__name">Item: {{ cart_item_data.name }}</p>
            <p class="catalog-cart-item__price">Price: {{ cart_item_data.price }} UAH</p>
            <p class="catalog-cart-item__article">Article: {{ cart_item_data.article }}</p>
        </div>
        <div class="catalog-cart-item__quantity">
            <p>Quantity</p>
            <p>
                <span class="catalog-cart-item__btn" @click="decrementItem">-</span>
                {{ cart_item_data.quantity }}
                <span class="catalog-cart-item__btn" @click="incrementItem">+</span>
            </p>
        </div>
        <button v-on:click="deleteItemFromCart">Х</button>
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
        methods: {
            decrementItem() {
                this.$emit('decrementItem');
            },
            incrementItem() {
                this.$emit('incrementItem');
            },
            deleteItemFromCart() {
                this.$emit('deleteItemFromCart');
            }
        },
        watch: {},
    }
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";
    .catalog-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        flex-wrap: nowrap;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        box-shadow: 0 0 8px 0 $color-shadow;
        &__wrap {
            @apply catalog-cart-item__wrap;
            width: 100px;
            overflow: hidden;
        }
        &__image {
            @apply catalog-cart-item__image;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__btn {
            @apply catalog-cart-item__btn;
            cursor: pointer;
            &__hover {
                opacity: 0.9;
            }
        }
        button {
            position: absolute;
            top: 15px;
            right: 15px;
            background-color: red;
            border: none;
            color: white;
            width: 25px;
            height: 20px;
            border-radius: 3%;
            font-weight: 700;
            cursor: pointer;

            &:hover {
                background-color: white;
                border: 1px solid red;
                color: red;
                width: 25px;
                height: 20px;
                font-weight: 700;
                border-radius: 3%;
                cursor: pointer;
            }
        }
    }
</style>