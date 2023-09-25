<template>
  <section class="fs-common">
    <div class="container">
      <div class="fs-common__content">
        <Head>
          <Title>Основные сведения | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <FsSectionTitles>
          <template v-slot:main> Основные сведения </template>
        </FsSectionTitles>
        <div class="fs-common__loader" v-if="loading">
          <div class="fs-common__loader-wrapper">
            <div class="fs-common__loader-line1"></div>
            <div class="fs-common__loader-row">
              <div class="fs-common__loader-line2 fs-common__loader-line2--width"></div>
              <div class="fs-common__loader-line2"></div>
            </div>
          </div>
          <div class="fs-common__loader-wrapper">
            <div class="fs-common__loader-line1"></div>
            <div class="fs-common__loader-row">
              <div class="fs-common__loader-line2 fs-common__loader-line2--width"></div>
              <div class="fs-common__loader-line2"></div>
            </div>
          </div>
        </div>
        <div class="fs-common__wrapper" v-if="!loading">
          <article class="fs-common__item" v-for="(item, key) in getCommon" :key="key">
            <FsH2 class="fs-common__item-heading">
              <template v-slot>{{ item.category }}</template>
            </FsH2>
            <div class="fs-common__item-row" v-for="index in item.fields" :key="index">
              <p class="fs-common__item-title">{{ index.name }}</p>
              <p class="fs-common__item-text" v-html="index.text"></p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCommonStore } from '@/stores/commonStore.js';

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useCommonStore, ['getCommon']),
  },
  methods: {
    ...mapActions(useCommonStore, ['fetchCommon']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchCommon();
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
