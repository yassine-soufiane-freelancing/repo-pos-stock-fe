<template>
  <div>
    <div class="tw-fixed tw-border-t tw-border-gray-950 tw-flex tw-w-full tw-bottom-0 tw-z-10 tw-left-0 tw-bg-gray-900">
        <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route" 
        :class="[
        $route.name == route.name ? 
        'tw-border-primary-500 tw-bg-gray-800 tw-text-primary-200'
        : 'tw-border-transparent tw-text-white'
        ]"
        class="tw-flex tw-items-center tw-gap-3 tw-border-b-2 tw-border-solid  tw-w-fit tw-h-full hover:tw-bg-gray-800 tw-duration-200 tw-px-8 tw-py-4">
            <icon 
            :class="[
                $route.name == route.name && 'tw-text-primary-500'
            ]"
            class="tw-text-lg" :icon="route.icon"/>
            <span>{{ route.label }}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                { name: 'kitchen.index', label: 'Active', icon: 'fontisto:radio-btn-active' },
                { name: 'kitchen.completed', label: 'Completés', icon: 'gg:check-o' },
                { name: 'kitchen.history', label: 'Historique', icon: 'ic:twotone-history' },
            ]
        }
    }
}
</script>

<style>

</style>