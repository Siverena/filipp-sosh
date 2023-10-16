import { mapActions, mapState } from 'pinia';
import { useMenuStore } from '@/stores/menuStore.js';

export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useMenuStore, ['getMenu']),
    },
    methods: {
        ...mapActions(useMenuStore, ['fetchMenu']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchMenu();
                this.loading = false;
            } catch (e) {
                this.loading = false;
                console.log(e);
            }
        },
    },
    async created() {
        this.loadData();
    },
};
