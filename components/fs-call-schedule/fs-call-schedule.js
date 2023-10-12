import { mapActions, mapState } from 'pinia';
import { useScheduleStore } from '@/stores/scheduleStore.js';
export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useScheduleStore, ['getCallSchedule', 'getIsLoading']),
    },
    methods: {
        ...mapActions(useScheduleStore, ['fetchCallSchedule']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchCallSchedule();
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
