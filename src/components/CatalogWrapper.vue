<template>
    <div class="catalog-wrapper">
        <router-view/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: 'CatalogWrapper',
        components: {},
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['CART']),
        },
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