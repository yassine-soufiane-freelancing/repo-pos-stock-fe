<template>
  <tr
    class="hover:tw-bg-gray-50"
    :class="[]"
  >
    <td class="tw-p-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div class="tw-max-w-[25px]">
        <div class="tw-inline-flex tw-items-center">
          <label
            class="tw-relative tw-flex tw-cursor-pointer tw-items-center tw-rounded-full tw-p-3"
            for="checkbox"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              :checked="isSelected"
              @change="handleSelected"
              class="before:tw-content[''] tw-border-solid tw-bg-white tw-peer tw-relative tw-h-5 tw-w-5 tw-cursor-pointer tw-appearance-none tw-rounded-md tw-border tw-border-blue-gray-200 tw-transition-all before:tw-absolute before:tw-top-2/4 before:tw-left-2/4 before:tw-block before:tw-h-12 before:tw-w-12 before:-tw-translate-y-2/4 before:-tw-translate-x-2/4 before:tw-rounded-full before:bg-blue-gray-500 before:tw-opacity-0 before:tw-transition-opacity checked:tw-border-orange-500 checked:tw-bg-orange-500 checked:before:tw-bg-orange-500 hover:before:tw-opacity-10"
              :id="'checkbox-' + item.id"
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
    </td>
    <td class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white">
          {{ item.id }}
        </h2>
      </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-w-10 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        {{ item.amount }} {{ currency }}
      </div>
    </td>

    <td class="tw-px-4 tw-w-10 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div class="tw-w-fit">
        <span v-if="item.mouvement_type == 'plus'" class="tw-p-2 tw-block tw-w-fit tw-bg-green-100 tw-text-green-600 tw-rounded-lg">
          <icon class="tw-text-xl" icon="ic:round-plus" />
        </span>
        <span v-if="item.mouvement_type == 'minus'" class="tw-p-2 tw-block tw-w-fit tw-bg-rose-100 tw-text-rose-600 tw-rounded-lg">
          <icon class="tw-text-xl" icon="ic:round-minus" />
        </span>
      </div>
    </td>

    <td class="tw-px-2 tw-py-2 tw-w-48   tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div class="tw-max-w-48 tw-truncate">
        {{ item.mouvement_description }}
      </div>
    </td>
    <td class="tw-px-2 tw-py-2 tw-text-sm tw-whitespace-nowrap">
      <div v-if="true">
        <CashMovementImage :item="item" />
      </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-flex-col"
        >
          <!-- {{ getDate(item.created_at) }} -->
          <p>{{ moment(item.created_at).format('MMMM Do YYYY') }}</p>
          <p>{{ moment(item.created_at).format('h:mm:ss a') }}</p>
        </h2>
      </div>
    </td>

    <td v-if="false" class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-whitespace-nowrap">
      <div>
        <TableActions
          @update="(newItem) => $emit('update', newItem)"
          :item="item"
        />
      </div>
    </td>
  </tr>

</template>

<script>
import moment from "moment";
import TableActions from './TableActions.vue';
import CashMovementImage from '../CashMovementImage.vue';
import { currency } from '@/config/app';

export default {
  components: { TableActions, CashMovementImage },

  props: {
    item: {
      required: true,
    },
    selected: {
      required: true
    },
    index: {
      required: true
    }
  },

  data() {
    return {
      moment: moment,
      currency: currency,
    };
  },

  computed: {

    isSelected() {
      return this.selected.includes(this.item.id)
    }
  },

  methods: {
    handleSelected(e) {
      if(e.target.checked) {
        const newSelected = [...this.selected];
        newSelected.push(this.item.id);
        this.$emit('update:selected', newSelected)
        return false;
      }

      const newSelected = this.selected.filter(i => i!= this.item.id)
      this.$emit('update:selected', newSelected)
    }
  },

  mounted() {
  }
};
</script>

<style>
</style>