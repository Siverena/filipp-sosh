<template>
  <div class="fs-single-news">
    <Head>
      <Title>{{ getNews.title }} | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main> {{ getNews.title }} </template>
      </FsSectionTitles>
      <div class="fs-single-news__loader" v-if="loading">
          <div class="fs-single-news__loader-header">

          </div>
          <div class="fs-news-list__loader-item">
            <div class="fs-news-list__loader-info">
            </div>
            <div class="fs-news-list__loader-text-wrapper">
              <div class="fs-news-list__loader-upper">
                <div class="fs-news-list__loader-text"></div>
                <div class="fs-news-list__loader-text1"></div>
              </div>
                <div class="fs-news-list__loader-text2"></div>
            </div>
          </div>
          <div class="fs-news-list__loader-low-wrapper">
            <div class="fs-news-list__loader-low-block"></div>
            <div class="fs-news-list__loader-low-block"></div>
            <div class="fs-news-list__loader-low-block"></div>
          </div>
          </div>
      <div v-else class="fs-single-news__content">
        <div class="fs-single-news__head">
          <img
            class="fs-single-news__article-image"
            :src= "getNews.mainImg"
            alt="foto"
          />
          <p class="fs-single-news__article-date">
            Опубликовано {{ new Date(getNews.created_at).toLocaleString()  }}
          </p>
          <p>{{ getNews.text }}</p>
        </div>
        <div class="fs-news-slider">
          <div class="fs-news-slider__slides">
            <div
              class="fs-news-slider__slide"
              v-for="(img, key) in slides"
              :key="key"
            >
              <img :src="img" alt="" />
            </div>
          </div>
          <div class="fs-news-slider__nav">
            <div class="fs-index-gallery__count">
              {{ activeSlide + 1 }} / {{ slidesCount }}
            </div>
            <FsBtnSlidesPrev @click="prevSlide" /><FsBtnSlidesNext
              @click="nextSlide"
            />
          </div>

          </div>
          <div class="fs-single-news__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jPOCxzGCY6g?si=1jk_MGZBSggKbobv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
        </div>
        <div class="fs-single-news__links">
          <h2>Ссылки на ресурсы статьи</h2>
          <a class="fs-link fs-link--base">
            <i class="pi pi-link pi--style"></i>
            <span
              >Структура и органы управления образовательной организацией</span
            >
          </a>
        </div>
        </div>
    </div>
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
      activeSlide: 0,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useNewsStore, ['getNews']),
    slides() {
      return this.getNews.images;
    },
    slidesCount() {
      return this.slides.length;
    },
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
    nextSlide() {
      const tmp = this.slides[0];
      if (this.slides.length - 1 === this.activeSlide) {
        this.slides.shift();
        this.slides.push(tmp);
        this.activeSlide = 0;
      } else {
        this.slides.shift();
        this.slides.push(tmp);
        this.activeSlide = this.activeSlide + 1;
      }
    },
    prevSlide() {
      const tmp = this.slides[this.slides.length - 1];
      if (this.activeSlide === 0) {
        this.slides.splice(this.slides.length - 1);
        this.slides.unshift(tmp);
        this.activeSlide = this.slides.length - 1;
      } else {
        this.slides.splice(this.slides.length - 1);
        this.slides.unshift(tmp);
        this.activeSlide = this.activeSlide - 1;
      }
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
