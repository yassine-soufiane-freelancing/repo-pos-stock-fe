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

      </v-navigation-drawer>


      <v-main
        class="tw-min-h-screen "
      >
        <router-view />
      </v-main>
    </v-layout>
  </div>
</template>
<script>

export default {
    components: {  },

    data() {
        return {
            mode: 1,
            component: 'index-options',

            components: ['index-options', 'index-ticket'], 

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

    },

    methods: {

    },

};
</script>
<style lang="">
</style>