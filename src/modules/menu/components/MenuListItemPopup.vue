<template>
  <div>
    <popup :visible="visible" :closeable="false" @cancel="$emit('update:visible', false)">
        <div
            class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
            <button @click="$emit('update:visible', false)" class="tw-absolute tw-top-0 tw-right-0 tw-rounded-t-lg tw-text-sm tw-px-2  tw-bg-red-500 tw-text-white -tw-translate-y-full">
                <icon icon="mdi:close" class="tw-text-xl" />
            </button>

            <div class="tw-w-full tw-overflow-hidden tw-h-full">
                <div class="tw-grid tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-5">
                    <div v-for="mi in item.menu_items" :key="mi.id" >
                        <button class="tw-p-5 tw-w-full tw-rounded-lg tw-aspect-square tw-shadow-sm tw-bg-green-300 tw-font-bold tw-text-xl">
                            <span>{{ mi.name }}</span>
                        </button>
                        <div class="tw-px-3 tw-w-full tw-flex tw-justify-between tw-flex-wrap tw-mt-1">
                            <span>{{ mi.name }}</span>
                            <span class="tw-font-bold tw-ml-auto">{{ mi.price }} MAD</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </popup>
  </div>
</template>

<script>
export default {
    props: {
        visible: {
            required: true,
        },

        item: {
            required: true
        }
    }
}
</script>

<style>

</style>