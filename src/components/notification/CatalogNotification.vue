<template>
    <div class="catalog-notification">
        <TransitionGroup 
            name="animate"
            class="catalog-notification__list"
            tag="div"
        >
            <div class="catalog-notification__content"
                v-for="message in messages"
                :key="message.id"
            >
                <span>{{ message.name }}</span>
                <i class="material-icons">check_circle</i>
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
    export default {
        name: 'CatalogNotification',
        props: {
            messages: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            hideNotification() {
                let vm = this;
                if(!this.messages.length) {
                    setInterval(function() {
                        vm.messages.splice(vm.messages.length - 1, 1);
                    }, 1500)
                }
            }
        },
        mounted() {
            this.hideNotification();
        }
    }
</script>

<style lang="scss">
    .catalog-notification {
        position: fixed;
        top: 80px;
        right: 16px;
        z-index: 10;
        &__content {
            @apply catalog-notification__content;
            padding: 24px;
            border-radius: 4px;
            color: $color-light;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 16px;
            margin-bottom: 16px;
            background-color: $color-special;
            max-width: 350px;
            text-align: left;
            gap: 10px;
        }
    }
    .animate {
        &-enter-from {
            transform: translateX(120px);
            opacity: 0;
        }
        &-enter-from {
            transition: all .6s ease;
        }
        &-leave-active {
            transition: transform .6s ease, opacity .6s, height .6s .2s;
        }
        &-leave-to {
            height: 0;
            transform: translateX(120px);
            opacity: 0;
        }
        &-move {
            transition: transform .6s ease;
        }
    }
</style>