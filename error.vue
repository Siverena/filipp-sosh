<template>
  <Head>
    <Title>{{ statusCode }}</Title>
  </Head>
  <FsHeader />
  <section class="fs-error">
    <div class="container">
      <div class="fs-error__content">
        <p class="fs-error__code">{{ pageContent.code }}</p>
        <p class="fs-error__error" v-if="pageContent.error">
          {{ pageContent.error }}
        </p>
        <p class="fs-error__text" v-if="pageContent.text">
          {{ pageContent.text }}
        </p>
        <NuxtLink to="/" class="fs-error__link fs-btn fs-btn--white"
          >Перейти на главную</NuxtLink
        >
      </div>
    </div>
  </section>
  <FsFooter />
</template>
<script>
import { mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  computed: {
    ...mapState(useModalStore, ['getIsShowMob']),
    statusCode() {
      return this.$attrs.error.statusCode;
    },

    pageContent() {
      if (this.statusCode === 404) {
        return {
          code: 404,
          error: 'Страница не найдена',
          text: ' Страница, которую вы ищите, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.',
        };
      }
      if (this.statusCode === 500) {
        return {
          code: 500,
          error: '',
          text: '',
        };
      }
    },
  },

  methods: {
    getBodyClass() {
      if (this.$attrs.error.statusCode) {
        document.querySelector('html').classList.add('fs-error__html');
      } else {
        document.querySelector('html').classList.remove('fs-error__html');
      }
    },
  },
  beforeCreate() {},
  mounted() {
    this.getBodyClass();
  },
  beforeRouteUpdate() {},
};
</script>
