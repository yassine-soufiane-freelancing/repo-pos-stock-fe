<template>
  <div>
    <div class="tw-w-full tw-p-5 tw-bg-white tw-shadow-sm">
      <section>
        <div class="tw-mx-auto ">
          <h2
            class="tw-border-b tw-pb-2 tw-mb-4 tw-text-xl tw-font-bold tw-text-gray-700 dark:tw-text-white"
          >
            Paramétres Propriétaire.
          </h2>

          <form action="#">
            <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-6">

                <div class="md:tw-col-span-1">
                    <label
                        for="name"
                        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Nom de l'entreprise</label
                    >
                    <input
                        type="text"
                        v-model="name"
                        id="name"
                        class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Tapez le nom de l'entreprise"
                        required=""
                    />
                </div>

                
                <div class="md:tw-col-span-1">
                    <label
                    for="name"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Siège Social</label
                    >
                    <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tapez le Siège Social"
                    required=""
                    />
                </div>

                <div class="md:tw-col-span-1">
                    <label
                    for="name"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >ICE</label
                    >
                    <input
                    type="text"
                    v-model="name"
                    id="name"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tapez le ICE"
                    required=""
                    />
                </div>

              <div class="md:tw-col-span-1">
                <label
                  for="role"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Type de Restauration</label
                >
                <select
                  v-model="role"
                  id="role"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tapez le nom d'utilisateur"
                >
                  <option value="" disabled>Choisi un type</option>
                </select>
              </div>

            </div>

            <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5">
                <a-button @click="create" :loading="isLoading">
                    <span>Enregistrer</span>
                </a-button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import create from '../services/create';

export default {

    data() {
        return {
            isLoading: false,

            name: '',
            email: '',
            password: '',
            role: '',
            
            errors: {}
        }
    },

    methods: {

        create() {
            // create(this)
        }
    }
};
</script>

<style>
</style>