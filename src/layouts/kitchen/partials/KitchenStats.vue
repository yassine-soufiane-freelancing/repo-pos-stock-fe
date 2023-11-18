<template>
  <div class="tw-flex tw-items-center tw-gap-2 tw-flex-wrap">
        <div class="tw-flex tw-items-center tw-gap-2 tw-border tw-rounded tw-border-primary-500 tw-w-fit tw-overflow-hidden tw-pr-2">
        <div class="tw-text-lg tw-font-bold tw-text-white tw-w-fit tw-px-2 tw-flex tw-items-center tw-bg-primary-500 ">
            <span>{{ tickets.length }}</span>
        </div>
        <span class=" tw-text-white tw-text-sm">Tickets</span>
        </div>
        <div class="tw-flex tw-items-center tw-gap-2 tw-border tw-rounded tw-border-green-500 tw-w-fit tw-overflow-hidden tw-pr-2">
        <div class="tw-text-lg tw-font-bold tw-text-white tw-w-fit tw-px-2 tw-flex tw-items-center tw-bg-green-500 ">
            <span>{{ tickets.filter(i => i.status == 'new').length }}</span>
        </div>
        <span class=" tw-text-white tw-text-sm">New</span>
        </div>
        <div class="tw-flex tw-items-center tw-gap-2 tw-border tw-rounded tw-border-purple-500 tw-w-fit tw-overflow-hidden tw-pr-2">
        <div class="tw-text-lg tw-font-bold tw-text-white tw-w-fit tw-px-2 tw-flex tw-items-center tw-bg-purple-500 ">
            <span>{{ tickets.filter(i => i.status == 'preparing').length }}</span>
        </div>
        <span class=" tw-text-white tw-text-sm">Preparing</span>
        </div>
        <div class="tw-flex tw-items-center tw-gap-2 tw-border tw-rounded tw-border-blue-500 tw-w-fit tw-overflow-hidden tw-pr-2">
        <div class="tw-text-lg tw-font-bold tw-text-white tw-w-fit tw-px-2 tw-flex tw-items-center tw-bg-blue-500 ">
            <span>{{ tickets.filter(i => i.status == 'completed').length }}</span>
        </div>
        <span class=" tw-text-white tw-text-sm">Completed</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tickets() {
            return this.$store.getters['kitchen/tickets']
        }
    }

}
</script>

<style>

</style>