<template>
    <div class="tw-p-5 tw-bg-white">
        <h1>Tableau de board</h1>

        <top-statistics />

        <div class="tw-py-2"></div>

        <div class="tw-grid tw-grid-cols-12 tw-gap-5">
            <bar-chart class="tw-col-span-12 md:tw-col-span-6" />
            <line-chart class="tw-col-span-12 md:tw-col-span-6" />
        </div>


    </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import LineChart from '../components/LineChart.vue'
import TopStatistics from '../components/TopStatistics.vue'
export default {
  components: { TopStatistics, BarChart, LineChart },

}
</script>

<style>

</style>