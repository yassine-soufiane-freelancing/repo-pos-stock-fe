<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-flex-col tw-max-h-full tw-relative">
        <ticket-top-options />
        <ticket-modes />
        <ticket-client />

        <div class="tw-h-full tw-pb-16">
            <div class="tw-h-fit tw-overflow-hidden">
                <div class="tw-min-h-full tw-w-full">
                  <ticket-items />
                </div>
            </div>
        </div>

        <div class="tw-fixed tw-bottom-0 tw-left-0 tw-w-full tw-bg-white">
            <ticket-bottom-options />
            <ticket-price />
        </div>
    </div>
  </div>
</template>

<script>
import TicketBottomOptions from './components/TicketBottomOptions.vue'
import TicketClient from './components/TicketClient.vue'
import TicketItems from './components/TicketItems.vue'
import TicketModes from './components/TicketModes.vue'
import TicketPrice from './components/TicketPrice.vue'
import TicketTopOptions from './components/TicketTopOptions.vue'

export default {
  components: { TicketTopOptions, TicketModes, TicketClient, TicketPrice, TicketBottomOptions, TicketItems },

  computed: {
    ticket() {
      return this.$store.getters['ticket/current-ticket']
    }
  }

}
</script>

<style>

</style>