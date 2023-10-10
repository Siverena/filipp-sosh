import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useUserStore } from '@/stores/userStore.js';
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
        ...mapState(useUserStore, ['getUser', 'getIsAuthChecked']),
    },
    methods: {
        ...mapActions(useModalStore, ['openMobMenu', 'openOrder']),
    },
};
