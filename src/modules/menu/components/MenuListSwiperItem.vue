<template>
  <div>
        <button @click="visible = true" class="lg:tw-p-5 md:tw-p-3 tw-p-1 tw-w-full tw-rounded-lg tw-aspect-square tw-shadow-sm tw-bg-blue-300 tw-overflow-hidden tw-font-bold lg:tw-text-xl md:tw-text-lg tw-text-sm">
            <span>{{ menuItem.name }}</span>
        </button>
        <div class="tw-px-3 tw-w-full tw-flex tw-justify-between tw-flex-wrap tw-mt-1">
            <span>{{ menuItem.name }}</span>
            <span class="tw-font-bold tw-ml-auto">{{ menuItem.price }} MAD</span>
        </div>
        <MenuListItemQuantity v-model:visible="visible" :item="item" :menu-item="menuItem" />
    </div>
</template>

<script>
import MenuListItemQuantity from './MenuListItemQuantity.vue';

export default {
    components: {
        MenuListItemQuantity,
    },

    props: {
        item: {
            required: true
        },
        menuItem: {
            required: true
        }
    },

    data() {
        return {
            visible: false
        }
    },

    methods: {
    }

}
</script>

<style>

</style>