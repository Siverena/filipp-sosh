import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';

export default {
    methods: {
        ...mapActions(useModalStore, ['openOrder']),
    },
};
