<template>
    <div class="catalog-item">
        <div class="catalog-item__image-wrap">
            <img class="catalog-item__image" :src="require('../assets/images/' + product_data.image)" alt="t-shirt">
        </div>
        <p class="catalot-item__name">Item: {{ product_data.name }}</p>
        <p class="catalog-item__price">Price: {{ product_data.price }} UAH</p>
        <div class="btn-submit">
            <button type="submit" @click="addToCart()">Buy</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalogItem',
        components: {},
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
                
            }
        },
        computed: {},
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product_data.name);
            }
        },
        watch: {},
        mounted() {
            console.log('Catalog item component was loaded!');
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/variables.scss";

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
            width: 100px;
            overflow: hidden;
            margin: 0 auto;
        }
        &__image{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }

        button {
            background-color: orange;
            border: none;
            color: white;
            width: 150px;
            height: 25px;
            border-radius: 3%;
            font-weight: 700;
            cursor: pointer;

            &:hover {
                background-color: white;
                border: 1px solid orange;
                color: orange;
                width: 150px;
                height: 25px;
                font-weight: 700;
                border-radius: 3%;
                cursor: pointer;
            }
        }
    }
</style>