import { mapActions } from 'pinia';

import { useModalStore } from '@/stores/modalStore.js';

export default {
  computed: {},
  methods: {
    ...mapActions(useModalStore, ['openOrder']),
  },
};
