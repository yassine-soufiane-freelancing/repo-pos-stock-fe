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
        <div class="tw-w-full tw-h-full tw-flex tw-flex-col">
            
            <div
                class="tw-w-full tw-flex tw-justify-between tw-border tw-border-solid tw-p-1 tw-border-r-0"
            >
                <v-slide-x-transition hide-on-leave>
                    <button v-if="!rail" class="tw-flex tw-items-center tw-gap-2">
                        <img class="tw-w-10 tw-h-10 tw-rounded" :src="$frontend('assets/images/avatar.jpg')" alt="Default avatar">
                        <div class="tw-flex tw-justify-center tw-h-full tw-flex-col tw-text-start">
                            <span>Bonjour,</span>
                            <span class="tw-text-lg tw-leading-4 tw-font-bold">M. Yassine</span>
                        </div>
                    </button>
                </v-slide-x-transition>

                <button @click="rail = !rail" class="tw-p-2">
                    <icon class="tw-text-3xl tw-text-gray-700" icon="charm:menu-hamburger" />
                </button>
            </div>
            <div v-if="!rail" class="tw-p-1 tw-w-full tw-bg-emerald-600 tw-text-xs tw-text-white tw-text-center">
                Caisse ouverte le: Mercredi 16 Août 2023 à 10:59
            </div>

            <v-slide-x-transition  hide-on-leave>
                <div v-if="!rail" class="tw-grid tw-grid-cols-4 tw-border-b tw-border-solid !tw-divide-x">
                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-gray-500 tw-text-2xl" icon="fluent:reciept-24-filled" />
                        <span class="tw-text-xs">Ticket</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-blue-500 tw-text-2xl" icon="gis:timer" />
                        <span class="tw-text-xs">En attente</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-violet-500 tw-text-2xl" icon="teenyicons:discount-solid" />
                        <span class="tw-text-xs">Remise</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-red-500 tw-text-2xl" icon="mdi:cancel-circle" />
                        <span class="tw-text-xs">Annuler</span>
                    </button>
                </div>
            </v-slide-x-transition>


                <div v-if="!rail" class="tw-p-2 tw-w-full tw-border-b">
                    <div class="tw-grid tw-grid-cols-3 tw-p-1 tw-bg-gray-100 tw-rounded tw-gap-1">
                        <button 
                        @click="mode = 1"
                        :class="[mode == 1 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                            <icon class="tw-text-xl tw-text-gray-600" icon="grommet-icons:cafeteria" />
                        </button>

                        <button 
                        @click="mode = 2"
                        :class="[mode == 2 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                            <icon class="tw-text-2xl tw-text-gray-600" icon="ri:takeaway-fill" />
                        </button>

                        <button 
                        @click="mode = 3"
                        :class="[mode == 3 && 'tw-bg-white tw-shadow-sm tw-border-gray-200']"
                        class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                            <icon class="tw-text-2xl tw-text-gray-600" icon="iconoir:bag" />
                        </button>
                    </div>
                </div>
                

                <div v-if="!rail" class="tw-grid tw-grid-cols-2 tw-border-b tw-divide-x tw-text-sm">
                        
                        <div class="tw-col-span-1 tw-flex tw-flex-col tw-gap-1 tw-p-2">
                            <span>Serveur</span>
                            <span>...</span>
                        </div>
                        <div class="tw-col-span-1 tw-flex tw-flex-col tw-gap-1 tw-p-2">
                            <span>Client</span>
                            <span>...</span>
                        </div>
                </div>

                <div v-if="!rail" class="tw-w-full tw-mt-auto tw-self-end tw-grid tw-grid-cols-4 tw-border-t tw-border-solid !tw-divide-x">
                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-gray-500 tw-text-2xl" icon="mingcute:transfer-fill" />
                        <span class="tw-text-xs">Transfére de table</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-orange-500 tw-text-2xl" icon="entypo:bell" />
                        <span class="tw-text-xs">Demandez la suite</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-green-500 tw-text-2xl" icon="icon-park-solid:next" />
                        <span class="tw-text-xs">A suivre</span>
                    </button>

                    <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
                        <icon class="tw-text-amber-900 tw-text-2xl" icon="solar:chef-hat-minimalistic-bold" />
                        <span class="tw-text-xs">Preparer</span>
                    </button>
                </div>

                <div v-if="!rail" class="tw-w-full tw-px-4 tw-py-3 tw-bg-red-500 tw-text-white tw-self-end tw-flex tw-items-center tw-justify-between">
                    <span class="tw-text-lg tw-font-medium">Encaissez ( 2 )</span>
                    <span class="tw-text-xl tw-font-bold">125.00 MAD</span>
                </div>

            

        </div>
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
    data() {
        return {
            mode: 1

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

    mounted() {
        console.log(this.$store.state.auth.isLoggedIn);
    }
};
</script>
<style lang="">
</style>