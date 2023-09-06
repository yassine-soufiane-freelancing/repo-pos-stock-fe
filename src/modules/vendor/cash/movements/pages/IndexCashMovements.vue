<template>
  <div class="tw-h-full">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
        <div class="tw-bg-white tw-px-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full">
            <div class="tw-flex tw-justify-between tw-items-center">
                <h1 class="tw-font-bold tw-text-gray-600">Mouvement d'argents</h1>

                <a-button @click="$router.push({name: 'vendor.cash-movements.create'})">
                    <span>Ajouter</span>
                </a-button>
            </div>
            

        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }

}
</script>

<style>

</style>