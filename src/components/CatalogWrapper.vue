<template>
    <div class="catalog-wrapper">
        <CatalogMain/>
        <CatalogCart/>
    </div>
</template>

<script>
import CatalogMain from './CatalogMain.vue';
import CatalogCart from './CatalogCart.vue';

    export default {
        name: 'CatalogWrapper',
        components: {
            CatalogMain,
            CatalogCart
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('Catalog wrapper component was loaded!');
        }
    }
</script>

<style scoped lang="scss">
    .catalog-wrapper {
        width: 900px;
        margin: 0 auto;
    }
</style>