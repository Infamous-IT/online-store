<template>
    <div class="catalog">
        <router-link :to="{name: 'cart'}" >
            <div class="catalog__link">
                <i class="store-icon material-icons">store</i>
                <span class="catalog__link-counter">{{ CART.length }}</span>
            </div>
        </router-link>
        <h1>{{ title }}</h1>
        <CatalogNotification
            :messages="messages"
        ></CatalogNotification>
        <div class="catalog__filters">
            <CatalogSelect
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
            />
            <CatalogSearch/>
        </div>
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
import CatalogNotification from '../notification/CatalogNotification.vue';
import CatalogSearch from './CatalogSearch.vue';
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CatalogMain',
        components: {
            CatalogItem,
            CatalogSelect,
            CatalogNotification,
            CatalogSearch
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
                selected: 'All',
                messages: [],
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'SEARCH_QUERY'
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
                this.ADD_TO_CART(data)
                .then(() => {
                    this.messages.unshift({
                        name: 'The product was added to cart!',
                        id: Date.now().toLocaleString()
                    })
                });
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
            },
            filteredByName(value) {
                this.sortedProducts = [...this.PRODUCTS];
                this.selected = 'All';
                if(value) {
                    this.sortedProducts = this.sortedProducts.filter(function(item){
                        return item.name.toLowerCase().includes(value.toLowerCase());
                    })
                } else {
                    this.sortedProducts = this.PRODUCTS;
                }
            }
        },
        watch: {
            SEARCH_QUERY() {
                this.filteredByName(this.SEARCH_QUERY);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();
            this.filteredByName(this.SEARCH_QUERY);
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
        &__filters {
            @apply catalog__filters;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
    }
    .catalog__link-counter {
        position: relative;
        top: -17px;
        left: -32%;
        transform: translate(-50%, -50%);
        padding: 5px;
        opacity: 0.9;
        font-size: 11px;
        color: green;
        background-color: #fff;
        border-radius: 90%;
    }
    .store-icon {
        color: #1a5972;
    }
</style>