import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import date from '@/utils/mixins/date.js';
export default {
  data() {
    return {
      isFooter: true,
    };
  },
  mixins: [date],
  methods: {
    ...mapActions(useModalStore, ['openOrder']),
  },
};
