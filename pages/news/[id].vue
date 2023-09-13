<template>
    <div class="single-news-wrappper">
        <h2 class="article-title"> {{ getNews.title }} </h2>
        <div class="article-items-wrapper">
            <img class="article-image" :src="getStaticImageUrl(getNews.images[0])" alt="foto" />
            <div>
                <span class="article-text">{{ getNews.text[0] }}</span>
            </div>
        </div>
    </div>
</template>
<script >
    import { mapActions, mapState } from 'pinia';
    import { useNewsStore } from '@/stores/newsStore.js';
    import { computed, defineComponent, useRoute } from '#imports'
    import imageUrl from '@/utils/mixins/image-url.js';


    export default {
  data() {
    return {

      loading: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useNewsStore, ['getNews']),
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNews']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchNews(this.$route.params.id);
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
</script>