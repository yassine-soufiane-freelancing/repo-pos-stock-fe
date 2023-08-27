<template>
  <div>
    <popup :z-index="1" :visible="visible" :closeable="false" @cancel="$emit('update:visible', false)">
        <div
            class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[400px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
            <button @click="$emit('update:visible', false)" class="tw-absolute tw-top-0 tw-right-0 tw-rounded-t-lg tw-text-sm tw-px-2  tw-bg-red-500 tw-text-white -tw-translate-y-full">
                <icon icon="mdi:close" class="tw-text-xl" />
            </button>

            <div class="tw-h-full tw-w-full">

                <div>
                    <label
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Quantité:</label
                    >
                    <div class="tw-flex ">
                        <button @click="quantity == 1 ? null : quantity--" class="tw-h-[50px] tw-w-[60px] tw-rounded-l tw-flex tw-items-center tw-justify-center tw-bg-primary-500 tw-text-white">
                            <icon class="tw-text-xl" icon="mdi:minus" />
                        </button>
                        <input
                        v-model="quantity"
                        @input="errors.quantity = null"
                        type="number"
                        min="1"
                        :class="[errors.quantity && '!tw-border-red-400']"
                        class="tw-bg-gray-50 tw-text-xl tw-text-center tw-font-bold tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                        
                        />
                        <button @click="quantity++" class="tw-h-[50px] tw-w-[60px] tw-rounded-r tw-flex tw-items-center tw-justify-center tw-bg-primary-500 tw-text-white">
                            <icon class="tw-text-xl" icon="mdi:plus" />
                        </button>
                    </div>
                    <label
                    v-if="errors.quantity"
                    class="tw-block tw-mb-2 tw-mt-1 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                    >{{ errors.quantity }}</label
                    >
              </div>
            </div>
            <button class="tw-h-fit tw-w-fit tw-px-4 tw-py-2 tw-mt-7 tw-ml-auto tw-gap-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-bg-green-500 tw-text-white">
                <icon class="tw-text-xl" icon="mdi:check" />
                <span class="tw-text-sm">Confirmer</span>
            </button>
        </div>
    </popup>
  </div>
</template>

<script>

export default {
  components: { },
    props: {
        visible: {
            required: true,
        },

        item: {
            required: true
        },
        menuItem: {
            required: true
        }
    },

    data() {
        return {
            quantity: 1,
            errors: {}
        }
    }
}
</script>

<style>

</style>