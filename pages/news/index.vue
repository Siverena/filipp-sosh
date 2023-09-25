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
        <article
          class="fs-news-list__article"
          v-for="(item, key) in getNews"
          :key="key"
        >
          <div class="fs-news-list__article-image">
            <img :src="item.mainImg" alt="foto" />
          </div>
          <div class="fs-news-list__article-content">
            <div class="fs-news-list__article-title">
              <h2 class="fs-h2">{{ item.title }}</h2>
              <span class="fs-news-list__article-date">
                Опубликовано: {{ item.created_at }}
              </span>
            </div>
            <div class="fs-news-list__article-preview">
              <p>
                {{ item.description }}
              </p>
            </div>
            <div class="fs-news-list__article-nav">
              <a
                class="fs-link fs-link--green fs-news-list__article-ref"
                :href="`/news/${item.id}`"
                >Читать новость</a
              >
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<!-- <script>
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
</script> -->

<script>
import { mapActions, mapState } from 'pinia';
import { useNewsStore } from '@/stores/newsStore.js';
export default {
  data() {
    return {
      loading: true,
      currentActive: false,
    };
  },
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
