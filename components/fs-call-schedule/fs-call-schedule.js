import { mapActions, mapState } from 'pinia';
import { useScheduleStore } from '@/stores/scheduleStore.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useScheduleStore, ['getCallSchedule']),
  },
  methods: {
    ...mapActions(useScheduleStore, ['fetchCallSchedule']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchCallSchedule();
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
