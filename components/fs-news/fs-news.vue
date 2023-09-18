<template>
  <div class="head-wrapper">
    <h2>Последние новости</h2>
    <span>В нашей школе учаться только на четверки и пятерки</span>
  </div>
  <div class="wrapper-news12">
    <article class="article-news" v-for="item in getNews" :key="item.id">
      <div>
        <img :src="item.mainImg" />
      </div>
      <h3 class="news-title">{{ item.title }}</h3>
      <div class="items-wrapper">
        <span> {{ item.text[0] }} </span>
        <span class="reference">
          <a :href="`news/${item.id}`">Читать далее</a>
        </span>
      </div>
    </article>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useNewsStore } from '@/stores/newsStore.js';
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
        await this.fetchNews();
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
