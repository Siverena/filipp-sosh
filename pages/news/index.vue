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
      <div class="fs-news-list__content" v-if="!loading">
        <article
          class="fs-news-list__article"
          v-for="(item, key) in getNewsList.data"
          :key="item.id"
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
         <FsPagination :countPages="countPages" />
      </div>
      <!-- <FsPagination :countPages="countPages" /> -->
    </div>

  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useNewsStore } from '@/stores/newsStore.js';
import { ref } from 'vue';
export default {
  data() {
    return {
      loading: false,
      currentActive: false,
      // perpage: +getNewsList.meta.per_page
      // route1: this.$route.query,
    };
  },
  computed: {
    ...mapState(useNewsStore, ['getNewsList']),
    route1 () {
      return this.$route.query;
    },
    count () {
      return this.$route.query.page;
    },
    // loading () {
    //   return this.loading=false;
    // },
    countPages (store) {
      if (this.getNewsList.meta){
        if(Math.ceil(+this.getNewsList.meta.total / +this.getNewsList.meta.per_page) < 7 ) {
          return Math.ceil(+this.getNewsList.meta.total / +this.getNewsList.meta.per_page);
        }
        return 7;
      }
        // return 10;
    }
  },
  watch: {
    route1() {
      this.loading = true;
      console.log('load');
      this.loadData();
      this.loading = true;
      this.$forceUpdate();
    }
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsList']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchNewsList(this.count);        
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
