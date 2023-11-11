<template>
    <div class="catalog-popup__wrapper" ref="popup_wrapper">
        <div class="catalog-popup">
            <div class="catalog-popup__header">
                <span>{{ popupTitle }}</span>
                <span>
                    <i 
                        class="material-icons"
                        @click="closePopup"
                    >
                    Х</i>
                </span>
            </div>
            <div class="catalog-popup__content">
                <slot></slot>
            </div>
            <div class="catalog-popup__footer">
                <button class="btn" @click="addToCartBtnAction">{{ addToCartPopup }}</button>
                <button class="btn catalog-popup__close" @click="closePopup">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalopPopup',
        methods: {
            closePopup() {
                this.$emit('closePopup');
            },
            addToCartBtnAction() {
                this.$emit('addToCartBtnAction');
            }
        },
        props: {
            addToCartPopup: {
                type: String,
                default: 'Ok'
            },
            popupTitle: {
                type: String,
                default: 'Popup title'
            }
        },
        mounted() {
            let context = this;
            document.addEventListener('click', function(item) {
                if(item.target === context.$refs['popup_wrapper']){
                    context.closePopup();
                }
            })
        }
    }
</script>

<style lang="scss">
    .catalog-popup {
        position: fixed;
        padding: $padding*2;
        top: 250px;
        width: 400px;
        box-shadow: 0 0 $padding*2 0 $color-shadow;
        left: calc(50% - 200px);
        z-index: 33;
        background-color: $color-light;
        &__header {
            @apply catalog-popup__header;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__footer {
            @apply catalog-popup__footer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__wrapper {
            @apply catalog-popup__wrapper;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-popup;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 30;
            max-height: 100%;
        }
        &__content {
            @apply catalog-popup__content;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__close {
            @apply catalog-popup__close;
            background-color: brown;
            color: whitesmoke;
        }
    }
    .material-icons {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
</style>