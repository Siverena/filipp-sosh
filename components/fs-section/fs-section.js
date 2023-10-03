import { mapActions, mapState } from 'pinia';
import { usePagesStore } from '@/stores/pagesStore.js';
import currentUrl from '~/utils/mixins/current-url';

export default {
  props: ['slug'],
  data() {
    return {
      loading: true,
      currentActive: false,
    };
  },
  mixins: [currentUrl],
  computed: {
    ...mapState(usePagesStore, ['getContent']),
  },
  watch: {
    currentUrl() {
      this.loadData();
    },
  },
  methods: {
    ...mapActions(usePagesStore, ['fetchContent']),
    async loadData() {
      try {
        this.loading = true;
        const arr = this.$route.fullPath.split('/');
        const path = arr[arr.length - 1];

        await this.fetchContent(this.slug ?? path);
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    nextReason() {
      const tmp = this.reasons[0];
      if (this.reasons.length - 1 === this.activeReason) {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = 0;
      } else {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = this.activeReason + 1;
      }
    },
    prevReason() {
      const tmp = this.reasons[this.reasons.length - 1];
      if (this.activeReason === 0) {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.reasons.length - 1;
      } else {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.activeReason - 1;
      }
    },
    getCountImg(arrImages) {
      return arrImages.length;
    },
  },
  async created() {
    this.loadData();
  },
};
