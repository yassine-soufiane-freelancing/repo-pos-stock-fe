<template>
  <div class="tw-h-full tw-pb-8">
    <div class="tw-h-full tw-bg-gray-700 tw-p-5">

        <ticket-container :tickets="completed" />
      
    </div>
  </div>
</template>

<script>
import TicketContainer from '../components/TicketContainer.vue'
export default {
  components: { TicketContainer },

  data() {
    return {
      
    }
  },

  computed: {
    tickets() {
      return this.$store.getters['kitchen/tickets']
    },
    completed() {
      return this.$store.getters['kitchen/completed']
    },
  }

}
</script>

<style>

</style>