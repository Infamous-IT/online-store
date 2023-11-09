<template>
    <div class="cart-item-wrapper">
        <CatalogCartItem 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteItemFromCart="deleteItemFromCart(index)"
            @incrementItem="incrementItem(index)"
            @decrementItem="decrementItem(index)"
        />
    </div>
    <div class="cart-item-wrapper__total">
        <p class="cart-item-wrapper__total-title">Total:</p>
        <p>{{ cartTotalCost }} UAH</p>
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
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            decrementItem(index) {
                this.DECREMENT_CART_ITEM(index);
            },
            incrementItem(index) {
                this.INCREMENT_CART_ITEM(index);
            },
            deleteItemFromCart(index){
                this.DELETE_FROM_CART(index);
            }
        },
        computed: {
            cartTotalCost() {
                let result = [];
                for(let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce((sum, el) => {
                    return sum + el;
                });
                return result;
            },
        }
    }
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";
    .cart-item-wrapper {
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2;
            display: flex;
            justify-content: center;
            background-color: orange;
            color: $color-light;
            font-size: 24px;
        }
        &__totla-title {
            margin-right: $margin * 2;
        }
    }
</style>