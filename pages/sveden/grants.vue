<template>
  <section class="fs-grands">
    <Head>
      <Title
        >Стипендии и меры поддержки обучающихся | МКОУ ФИЛИППОВСКАЯ СОШ</Title
      >
    </Head>
    <div class="container">
      <FsSectionTitles class="fs-auth__title">
        <template v-slot:main
          >Стипендии и иные виды материальной поддержки</template
        >
      </FsSectionTitles>
      <FsSvedenUniversal :content="content"></FsSvedenUniversal>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      content: [
        { text: 'Общежитие', answer: 'не предоставляется' },
        {
          text: 'Стипендии и иные виды материальной поддержки',
          answer: 'не предоставляется',
        },
      ],
    };
  },
};
</script>
