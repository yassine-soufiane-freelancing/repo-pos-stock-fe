<template>
  <div v-if="isLoggedIn || true">
    <v-layout class="tw-bg-gray-50 dark:tw-text-white dark:tw-bg-neutral-900/90 tw-min-h-screen">

        <Sidebar />

        <Header />

      <v-main class="tw-min-h-screen">
        <v-container class="xl:tw-max-w-[1500px]">

            <router-view></router-view>

        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/layouts/dashboard/partials/DashboardHeader'
import Sidebar from '@/layouts/dashboard/partials/DashboardSidebar'

export default {
    components: { Header, Sidebar },

    data() {
        return {
            drawer: true,
            orderChannel: null,
            isSubscribed: false
        }
    },

    watch: {
      isLoggedIn(newValue) {
        if(!newValue) {
          this.$router.push({'name': 'login'})
        }
      },
    },

    computed: {
        isLoggedIn() {
          return this.$store.getters['auth/isLoggedIn']
        },
    },

    methods: {

      subscribeToEvents() {
        let Pusher = window.Pusher
        var pusher = new Pusher('493c0271d5ff1b957dac', {
          cluster: 'eu'
        });

        this.orderChannel = pusher.subscribe('order');
        
        this.orderChannel.bind('new-order', (data) => {
          this.$store.dispatch('order/addOrder', data.order)
          this.$alert({
            type: 'success',
            body: 'New Order !'
          })
        });

        this.isSubscribed = true
      },
    },

    mounted() {

    //   if(!this.isLoggedIn && !this.isAdmin) {
    //     this.$router.push({'name': 'home'})
    //     return false;
    //   }

    //   this.getState()
    //   if(!this.isSubscribed) {
    //     // this.subscribeToEvents()
    //   }
    }

}
</script>

<style>

</style>