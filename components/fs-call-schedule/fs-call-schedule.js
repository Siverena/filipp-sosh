import { mapActions, mapState } from 'pinia';
import { useScheduleStore } from '@/stores/scheduleStore.js';
import { useUiStore } from '@/stores/uiStore.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useScheduleStore, ['getCallSchedule']),

    // ...mapState(useUiStore, ['getPageLoader']),
  },
  methods: {
    ...mapActions(useScheduleStore, ['fetchCallSchedule']),
    // ...mapActions(useUiStore, ['setPageLoader']),
    async loadData() {
      try {
        // this.setPageLoader(true);
        this.loading = true;
        await this.fetchCallSchedule();
        this.loading = false;
        // this.setPageLoader(false);
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
