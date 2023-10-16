import { mapActions, mapState } from 'pinia';
import { useUsefulLinksStore } from '@/stores/usefulLinksStore';

export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useUsefulLinksStore, ['getLinks']),
    },
    methods: {
        ...mapActions(useUsefulLinksStore, ['fetchLinks']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchLinks();
                this.loading = false;
            } catch (e) {
                console.log(e);
            }
        },
    },
    async created() {
        this.loadData();
    },
};
