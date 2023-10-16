import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
    computed: {
        ...mapState(useModalStore, ['getNotificationText']),
    },
    methods: {
        ...mapActions(useModalStore, ['closeNotification']),
    },
    async mounted() {
        setTimeout(this.closeNotification, 5000);
    },
};
