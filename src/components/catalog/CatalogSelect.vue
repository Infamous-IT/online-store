<template>
    <div class="catalog-select">
        <p 
            class="catalog-select__title"
            @click="areOptionsVisible = !areOptionsVisible"
            >
            {{ selected }}
        </p>
        <div 
            v-if="areOptionsVisible"
            class="catalog-select__options">
            <p
                class="catalog-select__options-item"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalogSelect',
        data() {
            return {
                areOptionsVisible: false,
            }
        },
        props: {
            options: {
                type: Array,
                default() {
                    return [];
                } 
            },
            selected: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option);
                this.areOptionsVisible = false;
            },
            hideSelect() {
                this.areOptionsVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true);
        },
        unmounted() {
            document.removeEventListener('click', this.hideSelect);
        }
    }

</script>

<style lang="scss">
    .catalog-select {
        position: relative;
        width: 100px;
        cursor: pointer;
        margin-left: $margin*3;
        &__title {
            @apply catalog-select__title;
            border: solid 1px $color-border;
        }
        &__options {
            @apply catalog-select__options;
            border: solid 1px $color-border;
            position: absolute;
            top: 20px;
            right: 0px;
            width: calc(100% - 2px);
            background-color: $color-light;
        }
        &__options-item {
            @apply catalog-select__options-item;
            margin: 0;
            cursor: pointer;
            &:hover {
                @apply catalog-select__options-item:hover;
                background-color: $color-shadow;
            }
        }
    }
</style>