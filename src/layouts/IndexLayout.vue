<template>
    <component :is="layout" >
        <router-view/>
    </component>
</template>

<script>
import AppLayout from '@/layouts/app/AppLayout.vue';
import VendorLayout from '@/layouts/vendor/VendorLayout.vue';

export default {
    name: 'IndexLayout',
    
    components: {
        'app': AppLayout,
        'vendor': VendorLayout
    },

    data: () => ({
        defaultLayout: 'app',
        layouts: ['app', 'vendor']
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