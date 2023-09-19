    import { mapActions, mapState } from 'pinia';
    import { useNewsStore } from '@/stores/newsStore.js';
    import { computed, onMounted } from 'vue';
    import imageUrl from '@/utils/mixins/image-url.js';

    export default {
    data() {
        return {
            loading: true,
            showAll: false
        };
    },
    mixins: [imageUrl],
    computed: {
        ...mapState(useNewsStore, ['getNews']),
        news() {
            return this.showAll ? this.getNews : this.getNews.slice(0, 3);
        }
    },
    methods: {
        ...mapActions(useNewsStore, ['fetchNews']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchNews();
                this.loading = false;
            }
            catch (e) {
                console.log(e);
            }
        },
    },
    async created() {
        this.loadData();
    },
};
