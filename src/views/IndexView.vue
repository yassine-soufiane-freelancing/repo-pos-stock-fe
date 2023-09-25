<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue';
import CashRegister from '@/api/vendor/CashRegister';
// Components

export default defineComponent({
  name: 'IndexView',

  computed: {
    user() {
      return this.$store.getters['auth/user']
    }
  },

  created() {
    this.$router.push({name: 'vendor.menu'})
    // switch (this.user.role) {
    //   case 'admin':
    //     break;
    //   default:
    //     break;
    // }
    CashRegister.all();
  }
});
</script>
