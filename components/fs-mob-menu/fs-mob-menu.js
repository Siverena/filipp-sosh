import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
  data() {
    return {
      currentMenu: false,
      mobMenu: true,
    };
  },
  mixins: [currentUrl],
  computed: {
    ...mapState(useModalStore, ['getIsShowMob']),
  },
  watch: {
    currentUrl() {
      this.closeMobMenu();
    },
  },
  methods: {
    ...mapActions(useModalStore, ['closeMobMenu', 'openOrder']),
    toggleMenu(key) {
      if (this.currentMenu === false || this.currentMenu !== key) {
        this.currentMenu = key;
      } else {
        this.currentMenu = false;
      }
    },

    getClassByCurrentMenu(key) {
      if (this.currentMenu === key) {
        return 'gr-nav__arrow--open';
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.closeMobMenu();
  },
};
