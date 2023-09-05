import { mapState, mapActions } from 'pinia';
import { useGalleryStore } from '~/stores/galleryStore.js';
import { useNavLinksStore } from '@/stores/navLinksStore.js';

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
    ...mapState(useGalleryStore, {
      getGallery: 'getGallery',
      galleryLoading: 'isLoading',
    }),

    showBreadcrumbs() {
      return this.currentUrl !== 'index';
    },
    currentCottage() {
      return this.currentUrl;
    },
  },
  watch: {
    currentUrl() {
      this.loadData();
    },
    currentCottage() {
      this.loadData();
    },
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),

    getLinks() {
      //Получим массив строк из адресной строки
      //пример : ['', 'gallery', 'summer']
      this.links = [];
      const arr = this.$route.fullPath.split('/');
      //Обрабатываем 2-й элемент, достаем данные из навигации, в первую очередь проверяем, не галерея ли, а точнее длину массива arr
      if (arr.length === 3) {
        if (arr[1] === 'gallery') {
          this.links.push({
            name: 'Галерея',
            link: '/gallery',
          });

          // 3й элемент
          this.links.push({
            name: this.getGallery.name,
            link: '/' + this.getGallery.nameEng,
          });
        }
        if (arr[1] === 'cottages') {
          this.links.push({
            name: 'Коттеджи',
            link: '/cottages',
          });
          this.links.push({
            name: this.getCottage.name,
            link: '/cottages',
          });
        }

        if (arr[1] === 'booking') {
          this.links.push({
            name: 'Коттеджи',
            link: '/cottages',
          });
          if (arr[2] === 'step-1') {
            this.links.push({
              name: 'Бронирование. Шаг 1',
              link: '/booking/step-1',
            });
          }
          if (arr[2] === 'step-2') {
            this.links.push({
              name: 'Бронирование. Шаг 1',
              link: '/booking/step-1',
            });
            this.links.push({
              name: 'Бронирование. Шаг 2',
              link: '/booking/step-2',
            });
          }
          if (arr[2] === 'payment') {
            this.links.push({
              name: 'Бронирование. Шаг 1',
              link: '/booking/step-1',
            });
            this.links.push({
              name: 'Бронирование. Шаг 2',
              link: '/booking/step-2',
            });
            this.links.push({
              name: 'Бронирование. Шаг 3',
              link: '/booking/payment',
            });
          }
        }
      } else if (arr[1]) {
        const elem = this.getElem(this.getNavLinks, '/' + arr[1]);
        this.links.push({
          name: elem.name,
          link: elem.link,
        });
      }
    },
    getElem(arr, needle) {
      let foundElem = null;
      arr.forEach((el) => {
        if (el.link === needle) {
          foundElem = el;
        }
        if (el.child && el.child.length > 0) {
          foundElem = this.getElem(el.child, needle);
        }
      });
      return foundElem;
    },
    async loadData() {
      try {
        this.loading = true;
        Promise.all([this.getGalleryLoading, this.cottagesLoading]).then(() => {
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
