import { mapState, mapActions } from 'pinia';
import { useGalleryStore } from '~/stores/galleryStore.js';
import { useNavLinksStore } from '@/stores/navLinksStore.js';
import { useNewsStore } from '@/stores/newsStore.js';
import currentUrl from '@/utils/mixins/current-url';

export default {
    data() {
        return {
            links: [],
            loading: true,
        };
    },
    mixins: [currentUrl],
    computed: {
        ...mapState(useNavLinksStore, [
            'getNavLinks',
            'getLink',
            'getSvedenLink',
        ]),
        ...mapState(useGalleryStore, {
            getGalleryAlbom: 'getGalleryAlbom',
            galleryLoading: 'isLoading',
        }),
        ...mapState(useNewsStore, ['getNews', 'getNewsLoading']),

        showBreadcrumbs() {
            return this.currentUrl !== 'index';
        },
    },
    watch: {
        currentUrl() {
            console.log('currentUrl updated: ', this.currentUrl);
            this.loadData();
        },
    },
    methods: {
        ...mapActions(useGalleryStore, ['fetchGallery']),
        ...mapActions(useNavLinksStore, [
            'setCurrentFirstElem',
            'setCurrentSecondElem',
        ]),

        getLinks() {
            this.links.splice(0);
            const arr = this.$route.fullPath.split('/').slice(1);
            this.setCurrentFirstElem(arr[0]);
            this.links.push({
                name: this.getLink.name,
                link: `/${arr[0]}`,
            });
            if (arr[1]) {
                if (arr[0] === 'gallery') {
                    this.links.push({
                        name: this.getGalleryAlbom.name,
                        link: arr[1],
                    });
                }
                if (arr[0] === 'news') {
                    this.links.push({
                        name: this.getNews.title,
                        link: arr[1],
                    });
                }
                if (arr[0] === 'sveden') {
                    this.setCurrentSecondElem(arr[1]);
                    this.links.push({
                        name: this.getSvedenLink.name,
                        link: arr[1],
                    });
                }
            }
        },
        async loadData() {
            try {
                this.loading = true;
                // console.dir(this.galleryLoading);
                Promise.allSettled([
                    this.galleryLoading,
                    this.getNewsLoading,
                ]).then((res) => {
                    console.log('resolved');
                    console.log(res);
                    this.getLinks();
                    this.loading = false;
                });
                this.getNewsLoading;
                this.getNewsLoading.then(() => {
                    console.log('getNewsLoading');
                    console.log(this.getNewsLoading);
                    console.log(this.getNews);
                });
            } catch (e) {
                console.log(e);
            }
        },
    },
    async created() {
        this.loadData();
    },
};
