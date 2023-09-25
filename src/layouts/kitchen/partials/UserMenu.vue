<template>
  <div v-click-outside="close" class="tw-relative tw-z-50">
    <button @click="active = !active" class="tw-p-1 tw-rounded-full hover:tw-bg-white/10 tw-duration-300">
        <icon class="tw-text-4xl tw-text-white" icon="ic:round-account-circle" />
    </button>

    <v-slide-y-transition :duration="{ enter: 200, leave: 200 }">
        <div v-if="active" class="tw-absolute tw-top-12 tw-right-0">
            <div class="tw-bg-gray-800 tw-rounded-lg tw-border tw-border-gray-900 tw-shadow tw-w-[180px]">
                <ul class="tw-divide-y tw-divide-gray-600">
                    <li>
                        <button class="hover:tw-bg-gray-900 tw-w-full tw-text-sm tw-duration-200 tw-px-3 tw-py-2 tw-font-medium tw-text-gray-100 tw-flex tw-items-center tw-gap-2">
                            <icon class="tw-text-xl" icon="ph:user" />
                            <span>Profile</span>
                        </button>
                    </li>
                    <li>
                        <button class="hover:tw-bg-gray-900 tw-w-full tw-text-sm tw-duration-200 tw-px-3 tw-py-2 tw-font-medium tw-text-red-500 tw-flex tw-items-center tw-gap-2">
                            <icon class="tw-text-xl" icon="tabler:logout" />
                            <span>Déconnexion</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    },

    methods: {
        close() {
            this.active = false;
        }
    }
}
</script>

<style scoped>

</style>