<template>
  <div >
    <div v-click-outside="handleClickOutside" class="tw-relative tw-inline-block tw-text-left">
        <div>
            <button @click="visible = !visible" class="tw-p-2 hover:tw-bg-gray-100 tw-rounded tw-duration-200">
                <icon class="tw-text-3xl tw-text-gray-700" icon="mdi:user" />
            </button>
        </div>

        <v-slide-y-transition>

            <div 
            v-if="visible"
            class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-56 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="tw-py-1" role="none">
                <!-- Active: "tw-bg-gray-100 tw-text-gray-900", Not Active: "tw-text-gray-700" -->
                    <button  class="hover:tw-bg-gray-50 tw-items-center tw-w-full tw-text-start hover:tw-text-gray-700 tw-text-gray-700 tw-flex tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-duration-200" role="menuitem">
                        <span>
                            BUTTON_TEXT
                        </span>
                    </button>
                    <button  class="hover:tw-bg-gray-50 tw-items-center tw-w-full tw-text-start hover:tw-text-red-600 tw-text-red-500 tw-flex tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-duration-200" role="menuitem">
                        <span>
                            Se déconnecter
                        </span>
                    </button>
                </div>
            </div>
        </v-slide-y-transition>
    </div>


  </div>
</template>

<script>

export default {

    data() {
        return {
            visible: false,
            isLoading: false,
            errors: {}
        }
    },

    computed: {

    },

    methods: {
        handleClickOutside() {
            if(this.visible) {
                this.visible = false;
            }
        },

        handleChange() {
            // this.visible = false;
            // this.errors = {}
            
            
            // const order = { ...this.item, affectation: id };
            // update(this, order, false);
        }
    }
}
</script>

<style>

</style>