<template>
    <div class="tw-w-full tw-mt-auto tw-self-end tw-grid tw-grid-cols-3 tw-border-t tw-border-solid !tw-divide-x">
        <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-gray-500 tw-text-2xl" icon="mingcute:transfer-fill" />
            <span class="tw-text-xs">Transfére de table</span>
        </button>

        <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-orange-500 tw-text-2xl" icon="entypo:bell" />
            <span class="tw-text-xs">Demandez la suite</span>
        </button>

        <!-- <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-green-500 tw-text-2xl" icon="icon-park-solid:next" />
            <span class="tw-text-xs">A suivre</span>
        </button> -->

        <button @click="send" class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-amber-900 tw-text-2xl" icon="solar:chef-hat-minimalistic-bold" />
            <span class="tw-text-xs">Preparer</span>
        </button>
    </div>
</template>

<script>
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
                return this.$store.getters['ticket/current-ticket']
            }
        }
    },

    methods: {
        send() {
            this.$alert({
                type: 'success',
                body: 'le ticket est envoyé pour préparation'
            });
            this.$store.dispatch('ticket/add-ticket', this.ticket)
            this.$store.dispatch('ticket/empty-ticket')
        }
    }
}
</script>

<style>

</style>