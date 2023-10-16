import { mapActions, mapState } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
export default {
    data() {
        return {
            loading: true,
            activeReason: 0,
        };
    },
    computed: {
        ...mapState(useGalleryStore, ['getGallery']),
        reasonsCount() {
            return this.reasons.length;
        },
        reasons() {
            return this.getGallery;
        },
    },
    methods: {
        ...mapActions(useGalleryStore, ['fetchGallery']),
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
        async loadData() {
            try {
                this.loading = true;
                await this.fetchGallery();
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
