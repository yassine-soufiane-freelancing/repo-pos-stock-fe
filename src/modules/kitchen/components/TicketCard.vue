<template>
  <div>
    <div 
    :class="[ticket.status == 'new' && 'background-animate tw-bg-gradient-to-r tw-from-blue-500 tw-to-red-500']"
    class="tw-p-0.5 tw-rounded-lg hover:tw-bg-gray-900 tw-bg-transparent tw-duration-300   tw-h-full">
    <div class="tw-rounded-b-md tw-rounded-t-lg tw-bg-white tw-min-h-[400px] tw-shadow tw-relative tw-borders tw-border-gray-900">
        <div class="tw-z-100 tw-px-2 tw-py-2 tw-bg-gray-800 tw-rounded-t-md tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center tw-gap-2">
                <!-- <h1 class="tw-text-xl tw-font-bold tw-text-gray-100"><span class="tw-text-sm">#</span> {{ ticket.id }}</h1> -->
                <div class=" tw-bg-gray-300 tw-text-gray-600 tw-p-1 tw-rounded">
                    <icon :icon="ticket.id == 1 ?'grommet-icons:cafeteria' : 'ri:takeaway-fill'" class="tw-text-lg" />
                </div>
                <h1 class="tw-text-xl tw-font-bold tw-text-gray-100">10:25</h1>
            </div>

            
            <div 
            v-if="status.value == 'new'"
            :class="[status.bg, status.text]"
            class="tw-block tw-text-sm tw-px-2 tw-absolute tw-top-0 tw-right-0 tw-rounded-bl background-animate !tw-bg-gradient-to-r !tw-text-white tw-font-bold tw-delay-500 !tw-from-blue-500 !tw-to-red-500">{{ status.name }}</div>
            
            <div 
            v-else
            :class="[status.bg, status.text, status.border]"
            class="tw-text-sm tw-px-2 tw-py-1 tw-rounded tw-flex tw-items-center tw-gap-2">
            <icon :icon="status.icon" />
            <span>{{ status.name }}</span>
            </div>

        </div>

        <div class="tw-bg-white tw-h-full">
            <div v-if="!!ticket.note" class="tw-bg-yellow-100 tw-px-2 tw-py-1 tw-flex tw-items-center tw-gap-x-2">
                <div class="tw-w-fit">
                    <icon icon="ph:seal-warning" class="tw-text-amber-500 tw-text-2xl " />
                </div>
                <p class="tw-text-sm">
                    {{ ticket.note }}
                </p>
            </div>

            <div class="tw-p-2">
                <ul class="tw-max-h-full tw-divide-y">
                    <li class="tw-py-1">
                        <p class="tw-font-bold">2 x Pizza Peppironi</p>
                        <div class="tw-text-gray-500 tw-text-sm">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odio!
                        </div>
                    </li>

                    <li class="tw-py-1">
                        <p class="tw-font-bold">1 x Tacos poulet</p>
                    </li>
                    <li class="tw-py-1">
                        <p class="tw-font-bold">1 x Cheese Burger</p>
                    </li>
                    <li class="tw-py-1">
                        <p class="tw-font-bold">1 x Tacos poulet</p>
                        <div class="tw-text-gray-500 tw-text-sm">
                            Lorem ipsum dolor sit
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tw-absolute tw-p-2 tw-bottom-0 tw-left-0 tw-w-full">
                <button v-if="isLoading" class="tw-w-full tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded tw-py-2 tw-bg-gray-300 tw-text-gray-500 tw-cursor-not-allowed" disabled>
                    <icon icon="line-md:loading-twotone-loop" class="tw-text-xl" />
                </button>
                <div v-if="!isLoading">
                    <button @click="changeStatus('preparing')" v-if="ticket.status == 'new'" class="tw-w-full tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded tw-py-2 tw-bg-green-500 tw-text-white">
                        <icon icon="ph:play-fill" class="tw-text-lg" />
                        <span>Commencer</span>
                    </button>
                    <button @click="changeStatus('completed')" v-if="ticket.status == 'preparing'" class="tw-w-full tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded tw-py-2 tw-bg-purple-500 tw-text-white">
                        <icon icon="ph:check-bold" class="tw-text-lg" />
                        <span>Marquer comme prête</span>
                    </button>
                </div>
            </div>
        </div>

        </div>
    </div>
  </div>
</template>

<script>
import { kitchen_statuses } from '@/config/ticket';

export default {
    props: {
        ticket: {
            required: true
        }
    },

    data() {
        return {
            isLoading: false,
        }
    },

    computed: {
        status() {
            return kitchen_statuses.find(i => i.value == this.ticket.status)
        }
    },

    methods: {
        changeStatus(status) {
            this.isLoading = true;
            setTimeout(() => {
                this.$store.dispatch('kitchen/update-ticket', {...this.ticket, status})
                this.isLoading = false;
            }, 2000)

        }
    },

    mounted() {
    }

}
</script>

<style scoped>
.background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>