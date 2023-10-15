import { mapActions, mapState } from 'pinia';
import { useUsefulStore } from '@/stores/usefulLinksStore';

export default {

  data() {
    return {
      loading: true,
      currentActive: false,
      links: [{
        'slug': 'first_class',
         'bannerTitle': 'Запишите детей в первый класс',
         'img': 'img.jpeg',
         'ref': '/first_class'
     },
     {
        'slug': 'first_class',
         'bannerTitle': 'Запишите детей в первый класс',
         'img': 'img.jpeg',
         'ref': '/first_class'
     },
         {
         'slug': 'department',
         'bannerTitle': 'Департамент образования Владимирской области',
         'img': 'img.jpeg',
         'ref': 'https://департамент.образование33.рф/'
     },
     {
         'slug': 'second_class',
         'bannerTitle': 'Запишите детей в первый класс',
         'img': 'img.jpeg',
         'ref': '/second_class'
     },
     {
         'slug': 'third_class',
         'bannerTitle': 'Запишите детей в первый класс',
         'img': 'img.jpeg',
         'ref': '/third_class'
     }
 ]
    };
  },

  computed: {
    ...mapState(useUsefulStore, ['getLinks']),
  },
  methods: {
    ...mapActions(useUsefulStore, ['fetchLinks']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchLinks();
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