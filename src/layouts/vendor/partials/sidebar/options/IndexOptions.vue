<template>
  <div class="tw-h-full">
    <ul class="tw-p-4 tw-h-full tw-flex tw-flex-col tw-gap-2">
        <li>
            <button @click="addTicket" class="tw-flex tw-items-center tw-gap-5 tw-w-full tw-p-3 tw-bg-white  tw-text-start tw-border tw-border-solid tw-rounded">
                <icon class="tw-text-2xl tw-text-gray-500" icon="fluent:reciept-24-filled" />
                <span class="tw-font-bold tw-text-gray-700">Ajouter un ticket</span>
            </button>
        </li>
        <li>
            <button @click="addMouvement" class="tw-flex tw-items-center tw-gap-5 tw-w-full tw-p-3 tw-bg-white  tw-text-start tw-border tw-border-solid tw-rounded">
                <icon class="tw-text-2xl tw-text-emerald-400" icon="mdi:account-cash" />
                <span class="tw-font-bold tw-text-gray-700">
                    Mouvement d'argent
                </span>
            </button>
        </li>
        <li>
            <button @click="showCaisse" class="tw-flex tw-items-center tw-gap-5 tw-w-full tw-p-3 tw-bg-white  tw-text-start tw-border tw-border-solid tw-rounded">
                <icon class="tw-text-2xl tw-text-blue-400" icon="mdi:cash-register" />
                <span class="tw-font-bold tw-text-gray-700">
                    La caisse
                </span>
            </button>
        </li>

        <li class="tw-mt-auto">
            <button @click="logout" class="tw-flex tw-items-center tw-gap-5 tw-w-full tw-p-3 tw-bg-white  tw-text-start tw-border tw-border-rose-400 tw-border-solid tw-rounded">
                <icon class="tw-text-2xl tw-text-rose-400" icon="solar:logout-linear" />
                <span class="tw-font-bold tw-text-rose-400">
                    Se déconnecter
                </span>
            </button>
        </li>
        <!-- <li>
            <button class="tw-w-full tw-p-3 tw-bg-white tw-shadow tw-text-start tw-border tw-border-solid tw-rounded">
                Button
            </button>
        </li> -->
    </ul>
  </div>
</template>

<script>
export default {

    methods: {
        addTicket() {
            this.$emit('change-to', 'index-ticket');
            this.$router.push({name: 'vendor.menu'})
        },

        addMouvement() {
            // this.$emit('change-to', 'index-ticket')
            this.$router.push({ name: 'vendor.cash-movements.index' })
        },
        showCaisse() {
            // this.$emit('change-to', 'index-ticket')
            this.$router.push({ name: 'vendor.cash-register.index' })
        }
    },

    mounted() {
        // const route = this.$route.name;

        // switch(route) {
        //     case 'vendor.menu':
        //         this.$emit('change-to', 'index-ticket');
        //     break;
        //     default:

        //     break;
        // }
    }

}
</script>

<style>

</style>