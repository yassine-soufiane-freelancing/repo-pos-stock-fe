<template>
  <div>
    <swiper
        :scrollbar="{
        hide: true,
        }"
        :modules="modules"
        
        :breakpoints="breakpoints"
        class="tw-py-5"
    >
        <swiper-slide v-for="ticket in tickets" :key="ticket.id">
            <ticket-card :ticket="ticket" />
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';
import TicketCard from './TicketCard.vue';


export default {
    components: {
        Swiper,
        SwiperSlide,
        TicketCard,
    },

    props: {
        tickets: {
            required: true,
        }
    },

    data() {
        return {
            modules: [Scrollbar],
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.25,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                720: {
                    slidesPerView: 2.25,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                1080: {
                    slidesPerView: 3.25,
                    spaceBetween: 10
                },
                1280: {
                    slidesPerView: 4.25,
                    spaceBetween: 10
                }
            }
        }
    }

}
</script>

<style>

</style>