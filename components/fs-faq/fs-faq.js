import { mapActions, mapState } from 'pinia';
import { useFaqStore } from '@/stores/faqStore.js';
export default {
  data() {
    return {
      loading: true,
      currentActive: false,
    };
  },

  computed: {
    ...mapState(useFaqStore, ['getQuestions']),
  },
  methods: {
    ...mapActions(useFaqStore, ['fetchQuestions']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchQuestions();
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
