<template>
  <section class="fs-common">
    <div class="container" v-if="!loading">
      <div class="fs-common__content">
        <Head>
          <Title>Основные сведения | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
        </Head>
        <FsSectionTitles>
          <template v-slot:main> Основные сведения </template>
        </FsSectionTitles>
        <article
          class="fs-common__item"
          v-for="(item, key) in getCommon"
          :key="key"
        >
          <FsH2 class="fs-common__item-heading"
            ><template v-slot>{{ item.category }}</template></FsH2
          >
          <div
            class="fs-common__item-row"
            v-for="index in item.fields"
            :key="index"
          >
            <p class="fs-common__item-title">{{ index.name }}</p>
            <p class="fs-common__item-text" v-html="index.text"></p>
          </div>
        </article>
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
        await this.fetchCommon(); //"Информация об организации"
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
