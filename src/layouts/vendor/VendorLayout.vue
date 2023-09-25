<template>
  <div>
    <v-layout :full-height="true" class="rounded rounded-md">

      <v-navigation-drawer
            v-model="drawer"
            location="left"
            :absolute="false"
            class="!tw-top-0 !tw-fixed"
            :rail="rail"
            :permanent="true"
            :touchless="true"
            width="350"
      >
        <div class="tw-w-full tw-h-full tw-flex tw-flex-col">
            
            <sidebar-account />

            <sidebar-case-status v-show="!rail" />

            <div v-if="false"  class="tw-h-full">
                <index-ticket />
            </div>

            <div v-show="!rail" class="tw-h-full">
                <component :key="sidebar" :is="sidebar" @change-to="handleChangeTo" />
            </div>

        </div>
      </v-navigation-drawer>


      <v-main
        class="tw-min-h-screen"
      >
        <router-view />
      </v-main>
    </v-layout>
  </div>
</template>
<script>
import IndexTicket from '@/modules/tickets/vendor/IndexTicket.vue';
import IndexOptions from './partials/sidebar/options/IndexOptions.vue';
import SidebarAccount from './partials/sidebar/SidebarAccount.vue';
import SidebarCaseStatus from './partials/sidebar/SidebarCaseStatus.vue';

export default {
    components: { IndexTicket, IndexOptions, SidebarAccount, SidebarCaseStatus },

    data() {
        return {
            mode: 1,

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

        sidebar: {
            get() {
                return this.$store.getters['vendor-layout/sidebar']
            },
            set(v) {
                this.$store.dispatch('vendor-layout/set-sidebar', v)
            }
        }

    },

    methods: {
        handleChangeTo(name) {
            this.$store.dispatch('vendor-layout/set-sidebar', name)
        }
    },

    mounted() {
    }
};
</script>
<style lang="">
</style>