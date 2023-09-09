<template>
  <section class="fs-news-list no-tab" v-if="!loading">
    <Head>
      <Title>Новости | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:h1> Новости </template>
      </FsSectionTitles>
      <div class="fs-news-list__content">
        <article class="fs-news" v-for="(item, key) in getNews" :key="key">
          <div class="fs-news__image">
            <img :src="getStaticImageUrl(item.mainImg)" alt="" />
          </div>
          <div class="fs-news__content">
            <div class="fs-news__title">
              <h2 class="fs-h2">{{ item.title }}</h2>
              <span class="fs-news__date">
                Опубликовано: 15 мая 2023 года
              </span>
            </div>
            <div class="fs-news__preview">
              <p v-for="index in item.text" :key="index"></p>
              {{ item.text[index] }}
            </div>
            <div class="fs-news__nav">
              <nuxt-link :to="`/news/${item.id}`">Читать нововсть</nuxt-link>
            </div>
          </div>
        </article>
      </div>
    </div>
    <pre>
      <p>{{ getNews }}</p>
    </pre>
  </section>
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
