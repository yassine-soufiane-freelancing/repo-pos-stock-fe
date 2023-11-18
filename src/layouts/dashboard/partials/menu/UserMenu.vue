<template>
  <div class="tw-h-full tw-relative" v-click-outside="hideMenu">
    <button
      @click="toggleMenu"
      type="button"
      class="
        tw-w-[28px] tw-h-[28px] tw-ring tw-ring-transparent tw-duration-300
        dark:hover:tw-ring-neutral-700
        hover:tw-ring-neutral-100
        tw-flex tw-items-center tw-justify-center tw-rounded-full tw-overflow-hidden
      "
    >
      <div>
        <icon icon="ph:user" class="tw-text-2xl tw-text-neutral-700 dark:tw-text-neutral-100" />
      </div>
    </button>

    <transition name="show">
      <div
        v-if="isActive"
        class="
          drop-menu
          tw-absolute tw-h-fit tw-w-56
          md:tw-w-48
          tw-top-14
          after:tw-border-t
          after:tw-border-t-neutral-400/20
          after:tw-border-l
          after:tw-border-l-neutral-400/20
          tw-border tw-border-neutral-400/20
          dark:after:tw-bg-neutral-900 dark:tw-bg-neutral-900
          tw-bg-white
          after:tw-bg-white
          -tw-right-2
          tw-rounded-lg tw-shadow-lg tw-shadow-neutral-400/10
          dark:tw-shadow-neutral-900/10
        "
      >
        <!-- Content goes here -->
        <div v-if="isLoggedIn || true">
          <AuthenticatedOptions />
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import AuthenticatedOptions from '@/layouts/dashboard/partials/menu/AuthenticatedOptions'

export default {
  components: { AuthenticatedOptions },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    },
    user() {
      return this.$store.getters['auth/user']
    },
  },

  methods: {
    showMenu() {
      this.isActive = true;
    },
    hideMenu() {
      this.isActive = false;
    },
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.drop-menu::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: -8px;
  right: 16px;
  transform: rotate(45deg);
  transition-duration: 200ms;
}

.show-enter-active,
.show-leave-active {
  transition: top 0.2s ease, opacity 0.2s ease;
}

.show-enter-from,
.show-leave-to {
  top: 65px;
  opacity: 0;
}
</style>