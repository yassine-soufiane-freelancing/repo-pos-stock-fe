<template>
  <button type="button" :class="classes" v-bind="$attrs" class="tw-relative tw-h-[40px] tw-inline-flex tw-items-center tw-ml-auto tw-px-5 tw-py-2.5 tw-mt-4 sm:tw-mt-6 tw-text-sm tw-font-medium tw-text-center tw-rounded-lg">
    <div :class="[loading && '!tw-opacity-0']">
        <slot />
    </div>

    <div class="tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
        <svg v-if="loading" class="tw-stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
    </div>
  </button>
</template>

<script>
export default {
    props: {
        loading: {
            required: false,
            default: false
        },
        variant: {
            required: false,
            default: 'primary'
        }
    },

    data() {
        return {
            valid_variants: ['primary'],
            variants: {
                primary: 'tw-text-white tw-bg-primary-500 focus:tw-ring-4 focus:tw-ring-primary-200 dark:focus:tw-ring-primary-900 hover:tw-bg-primary-800'
            }
        }
    },

    computed: {
        classes() {
            if(!this.valid_variants.includes(this.variant)) return this.variants.primary;

            return this.variants[this.variant]
        }
    }
}
</script>

<style>

</style>