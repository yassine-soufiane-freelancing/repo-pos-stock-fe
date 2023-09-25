<template>
    <div class="tw-w-full tw-px-4 tw-py-3 tw-bg-red-500 tw-text-white tw-self-end tw-flex tw-items-center tw-justify-between">
        <span class="tw-text-lg tw-font-medium">Encaissez ( {{ totalItems }} )</span>
        <span class="tw-text-xl tw-font-bold">{{ total }} {{ currency }}</span>
    </div>
</template>

<script>
import totalPrice from '@/core/totalPrice'
import { currency } from '@/config/app'


export default {
    data() {
        return {
            currency
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

        ticket: {
            get() {
                return this.$store.getters['ticket/current-ticket'];
            }
        },

        totalItems() {
            return this.ticket.items.reduce((previous, current) => previous + (current.quantity), 0)
        },

        total() {
            return totalPrice(this.ticket)
        },

    },
}
</script>

<style>

</style>