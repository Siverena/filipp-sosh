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
        ...mapState(useNavLinksStore, ['getNavLinks']),
        ...mapState(
            useGalleryStore, //['getGalleryAlbom']),
            {
                getGalleryAlbom: 'getGalleryAlbom',
                galleryLoading: 'isLoading',
            }
        ),
        ...mapState(useNewsStore, ['getNews']),

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

        getLinks() {
            console.log('getLinks!');
            this.links.splice(0);
            console.log(this.links);
            const arr = this.$route.fullPath.split('/').slice(1);
            let link = '';
            // console.log(arr);

            // arr.forEach((el, index) => {
            //   link = link + '/' + el;
            //   // 2й элемент
            //   console.log('проходим ', link);
            //   const elem = this.getElem(this.getNavLinks, link);
            //   console.log('нашли elem: ');
            //   console.log(elem);

            //   this.links.push({
            //     name: elem.name,
            //     link: elem.link,
            //   });
            //3-й элемент
            // if (index === 1 && arr[1] !== 'sveden') {
            //   if (arr[1] === 'gallery') {
            //     this.links.push({
            //       name: this.getGallery.name,
            //       link: '/' + this.getGallery.nameEng,
            //     });
            //   }
            //   if (arr[1] === 'news') {
            //     this.links.push({
            //       name: this.getNews.title,
            //       link: '/' + this.getNews.id,
            //     });
            //   }
            // }
            // });

            link = link + '/' + arr[0];
            const elems = [];
            elems[0] = this.getElem(this.getNavLinks, link);

            this.links.push({
                name: elems[0].name,
                link: elems[0].link,
            });
            if (arr[1]) {
                if (arr[0] === 'sveden') {
                    link = link + '/' + arr[1];
                    elems[1] = this.getElem(this.getNavLinks, link);
                    this.links.push({
                        name: elems[1].name,
                        link: elems[1].link,
                    });
                }
                if (arr[0] === 'gallery') {
                    // console.log(this.getGalleryAlbom);
                    this.links.push({
                        name: this.getGalleryAlbom.name,
                        link: '/' + this.getGalleryAlbom.nameEng,
                    });
                    // console.log(this.links);
                }
                if (arr[0] === 'news') {
                    this.links.push({
                        name: this.getNews.title,
                        link: '/' + this.getNews.id,
                    });
                }
            }
        },
        getElem(arr, needle) {
            // const tmp = arr.find((el) => {
            //   if (el.link === needle) {
            //     return true;
            //   }
            //   if (el.child && el.child.length > 0) {
            //     return this.getElem(el.child, needle);
            //   }
            // });
            // return tmp;

            // let found = 's';

            // arr.forEach((el) => {
            //   if (el.link === needle) {
            //     found = el;
            //     console.log(this.getElem);
            //     return;
            //   }
            //   if (el.child && el.child.length > 0) {
            //     console.log(this.getElem);
            //     found = this.getElem(el.child, needle);
            //   }
            // });
            // return found;
            let k = 0;
            while (k < arr.length) {
                if (arr[k].link === needle) {
                    // console.log(arr[k]);
                    return arr[k];
                }
                if (arr[k].child && arr[k].child.length) {
                    return this.getElem(arr[k].child, needle);
                }
                k++;
            }
            return false;
        },
        async loadData() {
            try {
                this.loading = true;
                Promise.all([this.getGalleryLoading]).then(() => {
                    console.log('loaded!');
                    this.getLinks();
                    this.loading = false;
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
