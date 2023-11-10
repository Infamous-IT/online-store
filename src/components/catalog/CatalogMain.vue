<template>
    <div class="catalog">
        <router-link :to="{name: 'cart'}" >
            <div class="catalog__link">
                Cart: {{ CART.length }}
            </div>
        </router-link>
        <h1>{{ title }}</h1>
        <CatalogSelect
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
        />
        <div class="catalog__list">
            <CatalogItem 
                v-for="product in filteredProducts"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import CatalogSelect from './CatalogSelect.vue';
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CatalogMain',
        components: {
            CatalogItem,
            CatalogSelect
        },
        props: {},
        data() {
            return {
                title: 'Catalog',
                categories: [
                    {name: 'All', value: 'All'},
                    {name: 'Male', value: 'M'},
                    {name: 'Female', value: 'F'},
                ],
                sortedProducts: [],
                selected: 'All'
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            filteredProducts() {
                if(this.sortedProducts.length) {
                    return this.sortedProducts;
                } else {
                    return this.PRODUCTS;
                }
            },
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            },
            sortByCategories(category) {
                this.sortedProducts = [];
                let select = this;
                this.PRODUCTS.map(function(item){
                    if(category.name === item.category) {
                        select.sortedProducts.push(item);
                    }
                });
                this.selected = category.name;
            }
        },
        watch: {},
        mounted() {
            this.GET_PRODUCTS_FROM_API();
        }
    }
</script>

<style lang="scss">
    .catalog {
        padding-top: 60px;
        &__list {
            @apply catalog__list;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &__link {
            @apply catalog_link;
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: 1px solid #ddd;
            cursor: pointer;
        }
    }

    
</style>