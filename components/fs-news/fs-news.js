import { mapActions, mapState } from 'pinia';
import { useNewsStore } from '@/stores/newsStore.js';
import imageUrl from '@/utils/mixins/image-url.js';

export default {
  data() {
    return {
      loading: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useNewsStore, ['getLastNews']),
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchLastNews']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchLastNews();
        this.loading = false;
      } catch (e) {
        this.loading = false;
        console.log(e);
        throw createError({
          statusCode: e.status,
          statusMessage: e.statusText,
        });
      }
    },
  },
  async created() {
    this.loadData();
  },
};
