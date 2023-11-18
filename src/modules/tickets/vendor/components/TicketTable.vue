<template>
  <div class="tw-border-b">

    <button v-if="!table_id" @click="popup = true" class="tw-flex tw-items-center tw-w-full tw-p-2 tw-justify-center tw-gap-2 hover:tw-bg-gray-100 tw-duration-200">
        <icon class="tw-text-2xl tw-text-amber-800" icon="ic:twotone-table-restaurant" />
        <span>Ouvrir une table</span>
    </button>
    <button v-else @click="popup = true" class="tw-bg-amber-800 tw-flex tw-items-center tw-w-full tw-p-2 tw-justify-center tw-gap-2 tw-duration-200">
        <icon class="tw-text-2xl tw-text-white" icon="ic:twotone-table-restaurant" />
        <span class="tw-text-white tw-font-bold">Table {{ table_id }}</span>
    </button>

    <popup :visible="popup" @cancel="popup = false" >
        <div
            class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
            <div class="tw-mb-5 tw-flex tw-justify-between tw-items-center">
                <h1 class="tw-font-medium tw-text-gray-700 tw-text-lg">Selectionez une table</h1>
                <a-button @click="setTable(null)" class="tw-scale-90">
                    Supprimer la table
                </a-button>
            </div>

            <div class="tw-grid tw-grid-cols-5 tw-gap-5">
                <button :disabled="[3, 5].includes(t)"  @click="setTable(t)" v-for="t in tables" :key="t" :class="[t == table_id && '!tw-bg-amber-800 !tw-text-white', [3, 5].includes(t) && 'tw-bg-rose-200 tw-text-gray-700 after:tw-px-2 after:tw-py-1 after:!tw-block after:tw-bg-rose-500 after:tw-text-white after:tw-absolute after:tw-top-0 after:tw-right-0 after:tw-text-xs after:tw-rounded-bl']" class="after:tw-content-['Réservé'] after:tw-hidden tw-relative tw-text-gray-500 tw-overflow-hidden tw-bg-gray-100 hover:tw-shadow tw-duration-200 tw-cursor-pointer tw-aspect-square tw-flex tw-items-center tw-justify-center tw-rounded">
                    <span class="tw-font-bold">Table {{t}}</span>

                    <div class="tw-absolute tw-bottom-0 tw-right-0 tw-p-3">

                    </div>
                </button>
            </div>
        </div>
    </popup>
  </div>
</template>

<script>
export default {
    data() {
        return {
            popup: false,
            tables: 10

        }
    },

    computed: {
        ticket: {
            get() {
                return this.$store.getters['ticket/current-ticket'];
            }
        },

        table_id: {
            get() {
                return this.ticket.table_id
            }
        }
    },

    methods: {
        setTable(id) {
            this.$store.dispatch('ticket/set-table', id);
            this.popup = false;
        }
    },

}
</script>

<style>

</style>