<template>
  <v-app>
    <v-main>
      <index-layout>
        <router-view />
      </index-layout>
    </v-main>

    <app-alert />
  </v-app>
</template>

<script>
import AppAlert from './common/components/global/AppAlert.vue'
import IndexLayout from './layouts/IndexLayout.vue'

export default {
  components: { IndexLayout, AppAlert },
  name: 'App',
}
</script>
