import { mapActions, mapState } from 'pinia';
import { useMenuStore } from '@/stores/menuStore.js';
import imageUrl from '~/utils/mixins/image-url';

export default {
  data() {
    return {
      loading: true,
    };
  },
  mixins: [imageUrl],
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
