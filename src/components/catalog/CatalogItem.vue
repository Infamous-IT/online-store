<template>
    <div class="catalog-item">
        <CatalogPopup
            v-if="isPopupVisible"
            addToCartPopup="Add to cart"
            :popupTitle="product_data.name"
            @addToCartBtnAction="addToCart"
            @closePopup="closePopup"
        >
            <div class="catalog-item__popup">
                <div class="catalog-item__image-wrap">
                    <img class="catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="t-shirt">
                </div>
                <div class="catalog-item__content">
                    <p class="catalot-item__name">Item: {{ product_data.name }}</p>
                    <p class="catalog-item__price">Price: {{ product_data.price }} UAH</p>
                    <p class="catalot-item__price">Category: {{ product_data.category }}</p>
                </div>
            </div>
        </CatalogPopup>
        <div class="catalog-item__image-wrap">
            <img class="catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="t-shirt">
        </div>
        <p class="catalot-item__name">Item: {{ product_data.name }}</p>
        <p class="catalog-item__price">Price: {{ product_data.price }} UAH</p>
        <div class="catalog-item__btns">
            <button 
                class="catalog-item__show-info"
                @click="showPopup"
            >
            Show info
            </button>
            <button type="submit" @click="addToCart">Buy</button>
        </div>
    </div>
</template>

<script>
import CatalogPopup from '../popup/CatalogPopup.vue';

    export default {
        name: 'CatalogItem',
        components: {
            CatalogPopup,
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isPopupVisible: false,
            }
        },
        computed: {},
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product_data);
            },
            showPopup() {
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            }
        },
        watch: {},
        mounted() {
            console.log('Catalog item component was loaded!');
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/variables.scss";

    .catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 $color-shadow;
        padding: $padding;
        margin: 0 auto $margin*2;
        min-width: 150px;

        @media (max-width: 470px) {
            padding: $padding;
        }
        &__image-wrap {
            @apply catalog-item__image-wrap;
            width: 100px;
            overflow: hidden;
            margin: 0 auto;
        }
        &__image{
            @apply catalog-item__image;
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
        &__popup {
            @apply catalog-item__popup;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        &__content {
            @apply catalog-item__content;
            padding-left: $padding;
        }
        button {
            background-color: rgb(26, 89, 114);
            border: none;
            margin-bottom: 10px;
            color: white;
            width: 150px;
            height: 25px;
            border-radius: 3%;
            font-weight: 700;
            cursor: pointer;
            &:hover {
                background-color: white;
                border: 1px solid rgb(26, 89, 114);
                color: rgb(26, 89, 114);
                width: 150px;
                height: 25px;
                font-weight: 700;
                border-radius: 3%;
                cursor: pointer;
            }
        }
    }
</style>