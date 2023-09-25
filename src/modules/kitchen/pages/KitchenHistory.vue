<template>
  <div class="tw-min-h-full">
    <div class="tw-bg-gray-700 tw-p-5">

        <div class="tw-w-full tw-min-h-[400px] tw-flex tw-items-center tw-justify-center">
            <loading background="tw-bg-gray-700" class="tw-scale-110" />
        </div>

    </div>
  </div>
</template>

<script>
export default {
  components: { },

  data() {
    return {
      tickets: [
        { id: 3, status: 'completed' },
      ]
    }
  }

}
</script>

<style>

</style>