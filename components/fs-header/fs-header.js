import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
  mixins: [currentUrl],
  computed: {
    ...mapState(useAdaptiveStore, [
      'isDesktopVersion',
      'widthComputed',
      'isMobileVersion',
    ]),
  },
  methods: {
    ...mapActions(useModalStore, ['openMobMenu', 'openOrder']),
  },
};
