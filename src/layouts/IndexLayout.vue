<template>
    <component :is="layout" >
        <router-view/>
    </component>
</template>

<script>
import AppLayout from '@/layouts/app/AppLayout.vue';
import VendorLayout from '@/layouts/vendor/VendorLayout.vue';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue';
import KitchenLayout from './kitchen/KitchenLayout.vue';

export default {
    name: 'IndexLayout',
    
    components: {
        'app': AppLayout,
        'vendor': VendorLayout,
        'dashboard': DashboardLayout,
        'kitchen': KitchenLayout,
    },

    data: () => ({
        defaultLayout: 'app',
        layouts: ['app', 'vendor', 'dashboard', 'kitchen']
    }),

    computed: {
        layout() {
        const layout = this.$route.meta.layout;
        if (!layout || !this.layouts.includes(layout)) return this.defaultLayout;

        return layout;
        }
    }
}
</script>

<style>

</style>