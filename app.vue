<template>
  <Head>
    <Title>МКОУ ФИЛИППОВСКАЯ СОШ</Title>
  </Head>
  <div class="fs-content">
    <div :class="{ 'fs-content': currentUrl === 'index' }">
      <FsHeader />
      <div class="container no-tab" v-if="currentUrl !== 'index'">
        <FsBreadCrumbs />
      </div>
      <NuxtPage />
    </div>
    <FsFooter class="no-tab" />
  </div>
  <FsMobMenu v-if="getIsShowMob" />
  <FsOrder v-if="getIsShowOrder" />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';
import currentUrl from '@/utils/mixins/current-url.js';
export default {
  mixins: [currentUrl],
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
