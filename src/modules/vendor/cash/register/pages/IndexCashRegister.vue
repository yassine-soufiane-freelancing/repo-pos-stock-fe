<template>
  <div class="tw-h-full">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
        <div class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full">
            <div class="tw-flex tw-justify-between tw-items-center">
                <h1 class="tw-font-bold tw-text-gray-600">La caisse</h1>

            </div>

            
            <div class="tw-mt-5">
                <TableIndex
                v-model:selected="selected"
                @page-change="handlePageChange"
                :loading="isLoading"
                :from="from"
                :to="to"
                :last-page="last_page"
                :per-page="per_page"
                :total="total"
                :current-page="current_page"
                :items="items"
                />
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import CashRegister from '@/api/vendor/CashRegister'
import { getPath } from '@/common/helpers/methods'
import TableIndex from '../components/table/TableIndex.vue'
export default {
    components: { TableIndex },

    data() {
        return {
            isLoading: true,
            items: [],
            selected: [],
            
            first_page_url: null,
            lase_page_url: null,
            next_page_url: null,
            prev_page_url: null,
            last_page: 1,
            from: 1,
            to: 1,
            total: 0,
            totalOrders: 0,
            links: null,
            search: "",
            per_page: 10,
            current_page: 1
        }
    },

    methods: {
        getCashMovements() {
            CashRegister.paginate()
            .then(res => {
                if(res.data.status == 200) {
                    res.data.result;
                }
            })
        },

        paginate() {
        const url = "?page=" + this.current_page;

        this.isLoading = true;
        return CashRegister.paginate(url)
            .then(({ data }) => {
            const options = data.result;
            this.setOptions(options);
            })
            .then(() => {
            this.isLoading = false;
            });
        },

        handlePageChange(page) {
            this.current_page = page;
            this.paginate();
        },

        setOptions(options) {
            this.items = options.data;
            this.first_page_url = getPath(options.first_page_url);
            this.lase_page_url = getPath(options.last_page_url);
            this.next_page_url = getPath(options.next_page_url);
            this.prev_page_url = getPath(options.prev_page_url);
            this.last_page = parseInt(options.last_page);
            this.from = parseInt(options.from);
            this.to = parseInt(options.to);
            this.per_page = parseInt(options.per_page);
            this.total = parseInt(options.total);
            this.links = options.links;
        },
    },

    mounted() {
        this.paginate();
    }

}
</script>

<style>

</style>