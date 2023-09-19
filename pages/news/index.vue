<template>
  <section class="fs-news-list no-tab" v-if="!loading">
    <Head>
      <Title>Новости | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="fs-news-list__container">
      <FsSectionTitles>
        <template v-slot:h1> Новости </template>
      </FsSectionTitles>
      <div class="fs-news-list__content">
        <article class="fs-news-list__article" v-for="(item, key) in getNews" :key="key">
          <div class="fs-news-list__image">
            <img :src="getStaticImageUrl(item.images[0])" alt="foto" />
          </div>
          <div class="fs-news-list__items">
            <div class="fs-news-list__article-content">
            <div class="fs-news-list__title">
              <h2 class="fs-news-list__h2">{{ item.title }}</h2>
              <span class="fs-news-list__date">
                Опубликовано: 15 мая 2023 года
              </span>
            </div>
            <div class="fs-news-list__preview">
              <p v-for="index in item.text" :key="index">
              {{ item.text.map((item) => item.substr(0,175)).toString() }}...
            </p>
            </div>
            <div class="fs-news-list__nav">
              <a class="fs-news-list__ref" :href="`/news/${item.id}`">Читать новость</a>
            </div>
          </div>
          </div>

        </article>
      </div>
    </div>
    <pre>
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
