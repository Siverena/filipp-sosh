<template>
  <!-- <link href="dist/css/bvi.min.css" rel="stylesheet" /> -->
  <Head>
    <Title>МКОУ ФИЛИППОВСКАЯ СОШ</Title>
  </Head>

  <div class="fs-content">
    <div class="no-tab">
      <FsHeader />
      <div class="container"><FsBreadCrumbs /></div>
    </div>
    <NuxtPage />
    <div class="no-tab">
      <FsFooter />
    </div>
  </div>

  <FsMobMenu v-if="getIsShowMob" />
  <FsOrder v-if="getIsShowOrder" />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  computed: {
    ...mapState(useAdaptiveStore, ['widthComputed']),
    ...mapState(useModalStore, [
      'getIsShowOrder',
      'getIsSubscription',
      'getIsShowMob',
    ]),
    html() {
      return document.querySelector('html');
    },
  },
  methods: {
    ...mapActions(useAdaptiveStore, ['updateWidth']),
    setHtmlClass() {
      if (this.$attrs.error) {
        document.querySelector('html').classList.add('gr-404__html');
      } else {
        document.querySelector('html').classList.remove('gr-404__html');
      }
    },
  },
  beforeMount() {
    this.updateWidth();

    window.addEventListener('resize', () => {
      this.updateWidth();
    });
    this.setHtmlClass();
  },
  mounted() {},
};
</script>
