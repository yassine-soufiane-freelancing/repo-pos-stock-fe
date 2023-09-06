<template>
  <div>
    <div class="tw-w-full tw-p-5 tw-bg-white tw-shadow-sm tw-rounded-lg">
      <section>
        <div class="tw-mx-auto ">
          <h2
            class="tw-mb-4 tw-text-xl tw-font-bold tw-text-gray-900 dark:tw-text-white"
          >
            Ajouter une nouveau menu.
          </h2>
          <form action="#">
            <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-6">
              <div class="sm:tw-col-span-2">
                <label
                  for="name"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Nom du menu</label
                >
                <input
                  type="text"
                  v-model="name"
                  id="name"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tapez le nom du menu"
                  required=""
                />
              </div>

            <div>
                <label
                  for="name"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Image du menu</label
                >
                <div class="tw-flex tw-items-center tw-justify-center tw-w-full tw-relative">
                    <label for="dropzone-file" class=" tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-64 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 dark:hover:bg-bray-800 dark:tw-bg-gray-700 hover:tw-bg-gray-100 dark:tw-border-gray-600 dark:hover:tw-border-gray-500 dark:hover:tw-bg-gray-600">
                        <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-5 tw-pb-6">
                            <svg class="tw-w-8 tw-h-8 tw-mb-4 tw-text-gray-500 dark:tw-text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="tw-mb-2 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400"><span class="tw-font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">SVG, PNG oû JPG (MAX. 800x400px)</p>
                        </div>
                        <input @change="handleImageChange" id="dropzone-file" type="file" class="tw-hidden" />
                    </label>
                    <div v-show="!!image" class="tw-w-full tw-h-full tw-bg-white/20 tw-backdrop-blur-md tw-flex tw-items-center tw-justify-center tw-p-2 tw-absolute tw-top-0 tw-left-0 tw-rounded-lg tw-overflow-hidden tw-pointer-events-none">
                        <img ref="image" class="tw-w-full tw-h-full tw-object-contain tw-rounded-lg" >
                    </div>
                </div> 

            </div>


            </div>

            <div class="tw-flex tw-items-center tw-justify-end tw-w-full">
                <!-- <button
                type="button"
                class=""
                >
                    Ajouter
                </button> -->
                <a-button @click="create" :loading="isLoading">
                    <span>Ajouter</span>
                </a-button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import create from './../services/create';

export default {

    data() {
        return {
            isLoading: false,

            name: '',
            image: null,
            errors: {}
        }
    },

    methods: {
        handleImageChange(event) {
            const file = event.target.files[0];
            if(!file) return false;
            
            this.image = file;

            const img = this.$refs.image

            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', function() {
                    img.src = this.result
                });
                reader.readAsDataURL(file);
                }
        },

        create() {
            create(this)
        }
    }
};
</script>

<style>
</style>