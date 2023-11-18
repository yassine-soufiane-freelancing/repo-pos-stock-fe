<template>
  <div>
    <button @click="popup = true" class="tw-w-7 tw-h-7 tw-rounded-lg tw-bg-primary-500 tw-text-white tw-flex tw-items-center tw-justify-center">
        <icon icon="carbon:view-filled" />
    </button>
    <popup :visible="popup" @cancel="popup = false">
        <div
            class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
            <!-- <img class="tw-w-full" src="" alt=""> -->
        </div>
    </popup>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
        }
    },

    data() {
        return {
            popup: false,
        }
    }
}
</script>

<style>

</style>