<template>
    <section class="fs-document">
      <Head>
        <Title>{{ element.bannerTitle }}</Title>
      </Head>
      <div class="container">
        <FsSectionTitles>
          <template v-slot:main> {{ element.bannerTitle }} </template>
        </FsSectionTitles>
        <div class="fs-page__content">
          <FsSection />
        </div>
      </div>
    </section>
  </template>
  <script>
import { mapActions, mapState } from 'pinia';
import { useUsefulStore } from '@/stores/usefulLinksStore';

export default {

data() {
  return {
    loading: true,
    currentActive: false,
  };
},

computed: {
  ...mapState(useUsefulStore, ['getLinks']),
  route1 () {
      return this.$route;
    },
element () {
    return this.getLinks.find((item) => item.slug === this.$route.params.slug)
}
},
methods: {
  ...mapActions(useUsefulStore, ['fetchLinks']),
  async loadData() {
    try {
      this.loading = true;
      await this.fetchLinks();
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