<template>
  <v-app>
    <v-main>
      <index-layout>
        <router-view />
      </index-layout>
    </v-main>
  </v-app>
</template>

<script>
import IndexLayout from './layouts/IndexLayout.vue'

export default {
  components: { IndexLayout },
  name: 'App',
}
</script>
