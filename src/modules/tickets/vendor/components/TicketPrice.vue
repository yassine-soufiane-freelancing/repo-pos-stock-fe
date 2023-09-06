<template>
    <div class="tw-w-full tw-px-4 tw-py-3 tw-bg-red-500 tw-text-white tw-self-end tw-flex tw-items-center tw-justify-between">
        <span class="tw-text-lg tw-font-medium">Encaissez ( {{ ticket.items.length }} )</span>
        <span class="tw-text-xl tw-font-bold">{{ total }} MAD</span>
    </div>
</template>

<script>
import totalPrice from '@/core/totalPrice'

export default {
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

        ticket: {
            get() {
                return this.$store.getters['ticket/current-ticket'];
            }
        },

        total() {
            return totalPrice(this.ticket)
        },

    },
}
</script>

<style>

</style>