<template>
    <div class="tw-p-2 tw-w-full tw-border-b">
        <div class="tw-grid tw-grid-cols-3 tw-p-1 tw-bg-gray-100 tw-rounded tw-gap-1">
            <button 
            @click="mode = 1"
            :class="[mode == 1 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-xl tw-text-gray-600" icon="grommet-icons:cafeteria" />
            </button>

            <button 
            @click="mode = 2"
            :class="[mode == 2 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-2xl tw-text-gray-600" icon="ri:takeaway-fill" />
            </button>

            <button 
            @click="mode = 3"
            :class="[mode == 3 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-2xl tw-text-gray-600" icon="iconoir:bag" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mode: 1
        }
    },

    computed: {
        drawer: {
            get() {
                return this.$store.getters['vendor-layout/drawer']
            },
            set(v) {
                this.$store.dispatch('vendor-layout/setDrawer', v)
            }
        },

        rail: {
            get() {
                return this.$store.getters['vendor-layout/rail']
            },
            set(v) {
                this.$store.dispatch('vendor-layout/setRail', v)
            }
        },

    },

}
</script>

<style>

</style>