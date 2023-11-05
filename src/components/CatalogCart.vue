<template>
    <div class="catalog-cart">
        <p>{{ title }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CatalogCart',
        components: {},
        props: {},
        data() {
            return {
                title: 'Catalog cart'
            }
        },
        computed: {},
        methods: {},
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