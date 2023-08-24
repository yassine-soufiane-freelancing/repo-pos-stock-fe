<template>
    <div>
        <v-layout row wrap>
            <!-- Application container -->
            <v-main class="tw-bg-gray-50 tw-min-h-screen tw-overflow-y-auto">
                
                <v-container fluid class="py-6 px-6">
                        <router-view></router-view>
                </v-container>
            </v-main>
    </v-layout>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>