<template>
  <div
    class="tw-w-full tw-flex tw-justify-between tw-border tw-border-solid tw-p-1 tw-border-r-0"
  >
    <v-slide-x-transition hide-on-leave>
      <button v-if="!rail" class="tw-flex tw-items-center tw-gap-2">
        <img
          class="tw-w-10 tw-h-10 tw-rounded"
          :src="$frontend('assets/images/avatar.jpg')"
          alt="Default avatar"
        />
        <div
          class="tw-flex tw-justify-center tw-h-full tw-flex-col tw-text-start"
        >
          <span>Bonjour,</span>
          <span class="tw-text-lg tw-leading-4 tw-font-bold">M. Yassine</span>
        </div>
      </button>
    </v-slide-x-transition>

    <div class="tw-flex tw-justify-end tw-gap-2 tw-p-1">
      <template v-if="!rail && false">
        <sidebar-account-options />
      </template>

      <button @click="showOptions" v-if="!rail" class="tw-p-1 hover:tw-bg-gray-100 tw-rounded tw-duration-200">
        <icon class="tw-text-3xl tw-text-gray-600" icon="streamline:interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square" />
      </button>

      <button @click="rail = !rail" class="tw-p-1 hover:tw-bg-gray-100 tw-rounded tw-duration-200">
        <icon v-if="rail" class="tw-text-3xl tw-text-gray-600" icon="fluent-emoji-high-contrast:right-arrow" />
        <icon v-else class="tw-text-3xl tw-text-gray-600" icon="fluent-emoji-high-contrast:left-arrow" />
      </button>
    </div>
  </div>
</template>

<script>
import SidebarAccountOptions from './SidebarAccountOptions.vue';

export default {
  components: { SidebarAccountOptions },

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

    methods: {
      showOptions() {
        this.$router.push({name: 'vendor.index'})
        this.$store.dispatch('vendor-layout/set-sidebar', 'index-options')
      }
    }

};
</script>

<style>
</style>