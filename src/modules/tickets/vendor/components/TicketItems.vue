<template>
  <div>
    <ul class="tw-p-2 tw-flex tw-flex-col tw-gap-2">
      <li v-for="i in items" :key="i" class="tw-p-2 tw-bg-white tw-rounded tw-shadow-sm tw-border tw-flex tw-items-center tw-justify-between">
        <div class="tw-flex tw-items-center tw-gap-2">
          <span class="tw-text-lg tw-font-bold tw-text-primary-500">{{ i.quantity }} x</span>
          <span>{{ i.item.name }} {{ i.menu_item.name }}</span>
        </div>
        <span class="tw-font-bold tw-text-lg">
          {{ (i.menu_item.price * i.quantity).toFixed(2) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentTicket() {
      return this.$store.getters['ticket/current-ticket']
    },

    items() {
      return this.currentTicket.items
    }
  }
}
</script>

<style>

</style>