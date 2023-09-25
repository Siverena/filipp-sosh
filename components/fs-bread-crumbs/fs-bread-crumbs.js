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
    ...mapState(useGalleryStore, {
      getGallery: 'getGallery',
      galleryLoading: 'isLoading',
    }),
    ...mapState(useNewsStore, ['getNews']),

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
      let link = '';
      // Обрабатываем элементы, достаем данные из навигации
      arr.slice(1).forEach((el, index) => {
        link = link + '/' + el;
        // console.log(index)     
        if (index === 1 && arr[1] !== 'sveden') {  // 3й элемент 
          if (arr[1] === 'gallery') {
            this.links.push({
              name: this.getGallery.name,
              link: '/' + this.getGallery.nameEng,
            });
          }
          if (arr[1] === 'news') {
            this.links.push({
              name: this.getNews.title,
              link: '/' + this.getNews.id,
            });
          }
        } else { //2-ой элемент
          const elem = this.getElem(this.getNavLinks, link);
          this.links.push({
            name: elem.name,
            link: elem.link,
          });
        }
      })
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
        Promise.all([this.getGalleryLoading]).then(() => {
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
