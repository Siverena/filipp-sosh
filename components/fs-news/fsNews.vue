<template>
  <div class="news">
    <FsSectionTitles class="news__head-wrapper">
        <template v-slot:h1>Последние новости</template>
        <template v-slot:dop>В нашей школе учаться только на четверки и пятерки </template>
    </FsSectionTitles>
      <div class="news__wrapper">
          <article class="news__article" v-for="item in news" :key="item.id">
            <div class="news__content-container">
              <div class="news__title-wrapper">
              <div class="news__image">
                  <img :src="item.mainImg">
              </div>
              <h3 class="news__title">{{ item.title }}</h3>
            </div>
              <div class="news__items-wrapper">
                  <span> {{ item.text[0].substr(0,175) }}... </span>
                  <span class="news__reference">
                    <a :href="`news/${item.id}`">Читать далее</a>
                  </span>
              </div>
            </div>
          </article>
      </div>
      <div class="news__button-container">
        <button class="news__show-button" @click="console.log(this.showAll=!this.showAll)">{{ this.showAll ? 'Скрыть' : 'Все новости' }}</button>
      </div>
  </div>
</template>
<script>
    import { mapActions, mapState } from 'pinia';
    import { useNewsStore } from '@/stores/newsStore.js';
    import { computed, onMounted } from 'vue';
    import imageUrl from '@/utils/mixins/image-url.js';

    export default {
    data() {
        return {
            loading: true,
            showAll: false
        };
    },
    mixins: [imageUrl],
    computed: {
        ...mapState(useNewsStore, ['getNews']),
        news() {
            return this.showAll ? this.getNews : this.getNews.slice(0, 3);
        }
    },
    methods: {
        ...mapActions(useNewsStore, ['fetchNews']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchNews();
                this.loading = false;
            }
            catch (e) {
                console.log(e);
            }
        },
    },
    async created() {
        this.loadData();
    },
};


</script>