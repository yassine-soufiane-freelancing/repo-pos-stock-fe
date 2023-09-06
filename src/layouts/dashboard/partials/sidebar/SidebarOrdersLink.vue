<template>
  <div>
    <router-link  :to="{name: link.to}" 
    :class="[isActive && '!tw-text-neutral-200 !dark:tw-text-neutral-700 !tw-bg-[rgb(var(--primary))]']"
    class="tw-flex tw-items-center tw-justify-between dark:tw-text-neutral-200 tw-text-neutral-700 dark:hover:tw-bg-neutral-800 hover:tw-bg-neutral-300/30 tw-duration-300 tw-py-2 tw-px-6 tw-gap-4">
        <div class="tw-flex tw-items-center tw-gap-4">
            <icon class="tw-text-xl" :icon="link.icon" />
            <span class="dark:tw-font-thin">{{ link.name }}</span>
        </div>
        <div :class="[isActive ? '!tw-bg-white !tw-text-[rgb(var(--primary))] ' : '!tw-bg-[rgb(var(--secondary))] !tw-text-white dark:tw-bg-transparent']"

        class="tw-py-1 tw-font-bold tw-px-2 tw-text-xs tw-rounded-md  dark:tw-text-neutral-800 !tw-duration-300">
            <span v-if="fetched">
              {{ ordersCount }}
            </span>
            <span v-else class="">
                <v-icon size="x-small" class="tw-animate-spin">mdi-loading</v-icon>
            </span>
        </div>

    </router-link>

  </div>
</template>

<script>

export default {
    props: [ 'link' ],

    data() {
      return {
      }
    },

    computed: {
      isActive() {
        return this.$route.name == this.link.to
      },
      ordersCount() {
        return 1
      },
      fetched() {
          return true
        }
    },

    methods: {
  },

  mounted() {
  }
}
</script>

<style>

</style>