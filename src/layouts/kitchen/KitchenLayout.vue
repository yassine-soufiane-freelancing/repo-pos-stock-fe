<template>
  <div>
    <v-layout :full-height="true" class="tw-bg-gray-700 tw-flex tw-flex-col">

      <kitchen-navigation />
      
      <v-main
        class="tw-min-h-screen "
      >
        <div class="tw-flex tw-justify-between tw-p-5 tw-pb-0">
          <kitchen-stats />
          <user-menu />
        </div>
        <router-view />
      </v-main>
    </v-layout>
  </div>
</template>
<script>
import KitchenNavigation from './partials/KitchenNavigation.vue';
import KitchenStats from './partials/KitchenStats.vue';
import UserMenu from './partials/UserMenu.vue';

export default {
    components: { KitchenNavigation, KitchenStats, UserMenu },

    data() {
        return {}
    },

    computed: {
    },

    methods: {
    },

};
</script>
<style lang="">
</style>