<template>
  <div>

    <div class="tw-flex tw-flex-col">
        <div class="tw-overflow-x-auto">
            <div class="tw-inline-block tw-min-w-full tw-align-middle">
                <div class="tw-border tw-overflow-auto tw-border-gray-200 darkx:tw-border-gray-700 md:tw-rounded-lg">
                    <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700">
                        <thead class="tw-bg-gray-50 darkx:tw-bg-gray-800">
                            <tr>
                                <th scope="col" class="tw-w-10 rtl:tw-text-right tw-px-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-text-gray-500 darkx:tw-text-gray-400">
                                  <div class="tw-max-w-[25px]">
                                    <div class="tw-inline-flex tw-items-center">
                                      <label
                                        class="tw-relative tw-flex tw-cursor-pointer tw-items-center tw-rounded-full tw-p-3"
                                        for="checkbox"
                                        data-ripple-dark="true"
                                      >
                                        <input
                                          type="checkbox"
                                          :checked="isAllSelected"
                                          @change="handleSelectedAllChange"
                                          class="before:tw-content[''] tw-border-solid tw-bg-white tw-peer tw-relative tw-h-5 tw-w-5 tw-cursor-pointer tw-appearance-none tw-rounded-md tw-border tw-border-blue-gray-200 tw-transition-all before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:tw-block before:tw-h-12 before:tw-w-12 before:-tw-translate-y-2/4 before:-tw-translate-x-2/4 before:tw-rounded-full before:bg-blue-gray-500 before:tw-opacity-0 before:tw-transition-opacity checked:tw-border-orange-500 checked:tw-bg-orange-500 checked:before:tw-bg-orange-500 hover:before:tw-opacity-10"
                                          id="checkbox-all"
                                        />
                                        <div
                                          class="tw-pointer-events-none tw-absolute tw-top-2/4 tw-left-2/4 -tw-translate-y-2/4 -tw-translate-x-2/4 tw-text-white tw-opacity-0 tw-transition-opacity peer-checked:tw-opacity-100"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="tw-h-3.5 tw-w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            stroke-width="1"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clip-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </th>
                                <th scope="col" class="tw-py-3.5 tw-px-4 tw-w-7 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    <span>ID</span>
                                </th>
                                
                                <th scope="col" class="tw-px-3 tw-w-12 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Image
                                </th>
                                <th scope="col" class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Nom
                                </th>
                                <th scope="col" class="tw-px-3 tw-w-10 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Slug
                                </th>

                                <th scope="col" class="tw-py-3.5 tw-px-4 tw-w-10 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    <button  class="tw-flex tw-items-center tw-gap-x-3 focus:tw-outline-none">
                                        <span>Created</span>
                                    </button>
                                </th>

                                <th scope="col" class="tw-relative tw-py-3.5 tw-px-4">
                                    <span class="tw-sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody v-if="!loading && items.length > 0" class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                          <TableRow v-model:selected="selectedOrders" @update="newItem => $emit('update', newItem)" :all="all" :index="index" v-for="(item, index, all) in items" :key="item.id" :item="item" />
                        </tbody>

                        <tbody v-if="!loading && items.length == 0" class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                          <tr>
                            <td colspan="8">
                              <div class="tw-p-5 tw-text-center tw-text-gray-600 tw-font-medium">
                                Tableau est vide !
                              </div>
                            </td>
                          </tr>
                        </tbody>

                        <tbody v-if="loading" class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                          <tr>
                            <td
                              v-if="false"
                              colspan="11"
                              class="tw-px-4 tw-py-4 tw-text-sm tw-font-medium tw-whitespace-nowrap"
                            >
                              <loading />
                            </td>
                            <td
                              colspan="11"
                            >
                            
                              <div role="status" class="tw-w-full tw-p-4 tw-space-y-4  tw-border-gray-200 tw-divide-y tw-divide-gray-200 tw-rounded tw-shadow tw-animate-pulse dark:tw-divide-gray-300 md:tw-p-6 dark:tw-border-gray-300">
                                  <div class="tw-flex tw-items-center tw-justify-between">
                                      <div>
                                          <!-- <div class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5"></div> -->
                                          <div class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200"></div>
                                      </div>
                                      <div class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-200 tw-w-12"></div>
                                  </div>
                                  <div v-for="i in (perPage - 1)" :key="i" class="tw-flex tw-items-center tw-justify-between tw-pt-4">
                                      <div>
                                          <!-- <div class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5"></div> -->
                                          <div class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200"></div>
                                      </div>
                                      <div class="tw-h-2.5 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200 tw-w-12"></div>
                                  </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="tw-mt-6">
      <TablePaginationNoNums :from="from" :to="to" :last-page="lastPage" :per-page="perPage" :total="total" :current-page="currentPage" @page-change="(n) => $emit('pageChange', n)" />
    </div>
  </div>
</template>

<script>
import TablePaginationNoNums from './TablePaginationNoNums';
import TableRow from './TableRow';

export default {
  components: { TablePaginationNoNums, TableRow },

  props: {
    items: {
      default: [],
    },
    loading: {
      type: Boolean,
      default: true
    },
    from: {
        type: Number,
        default: 1
    },
    to: {
        type: Number,
        default: 1
    },
    perPage: {
        type: Number,
        default: 10
    },
    total: {
        type: Number,
        default: 0
    },
    currentPage: {
        type: Number,
        default: 1
    },
    lastPage: {
      type: Number,
      default: 1
    },
    selected: {
      required: true
    },
  },

  data() {
    return {
      isAllSelected: false
    }
  },

  computed: {
    selectedOrders:{
      get() {
        return this.selected
      },
      set(v) {
        this.$emit('update:selected', v)
      }
    },
  },

  watch: {
    selected(v) {
      if(v.length == 0) {
        this.isAllSelected = false;
      }
    }
  },

  methods: {
    handleSelectedAllChange(e) {
      if(e.target.checked) {
        this.$emit('update:selected', [...this.items.map(i => i.id)]);
        this.isAllSelected = true;
        
      } else {
        this.$emit('update:selected', [])
        this.isAllSelected = false;
      }
    }
  },


}
</script>

<style>

</style>