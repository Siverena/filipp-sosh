<template>
  <section class="fs-news-list no-tab">
    <Head>
      <Title>Новости | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main> Новости </template>
      </FsSectionTitles>
      <div class="fs-news-list__loader" v-if="loading">
        <div class="fs-news-list__loader-item" v-for="item in 2">
          <div class="fs-news-list__loader-info"></div>
          <div class="fs-news-list__loader-text-wrapper">
            <div class="fs-news-list__loader-upper">
              <div class="fs-news-list__loader-text"></div>
              <div class="fs-news-list__loader-text1"></div>
            </div>
            <div class="fs-news-list__loader-text2"></div>
          </div>
        </div>
      </div>
      <div class="fs-news-list__content">
        <article
          class="fs-news-list__article"
          v-for="(item, key) in getNewsList"
          :key="key"
        >
          <div class="fs-news-list__article-image">
            <img :src="item.mainImg" alt="foto" />
          </div>
          <div class="fs-news-list__article-content">
            <div class="fs-news-list__article-title">
              <h2 class="fs-h2">{{ item.title }}</h2>
              <span class="fs-news-list__article-date">
                Опубликовано {{ new Date(item.created_at).toLocaleString() }}
              </span>
            </div>
            <div class="fs-news-list__article-preview">
              <p>
                {{ item.description }}
              </p>
            </div>
            <div class="fs-news-list__article-nav">
              <a
                class="fs-link fs-link--base fs-news-list__article-ref"
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
    ...mapState(useNewsStore, ['getNewsList']),
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsList']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchNewsList();
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
