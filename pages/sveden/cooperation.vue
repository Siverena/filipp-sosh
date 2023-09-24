<template>
  <section class="fs-cooperation">
    <Head>
      <Title>Международное сотрудничество | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles class="fs-auth__title">
        <template v-slot:main>Международное сотрудничество</template>
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
        {
          text: 'Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки (при наличии):',
          answer: 'не имеется',
        },
        {
          text: 'Информация о международной аккредитации образовательных программ (при наличии):',
          answer: 'не имеется',
        },
      ],
    };
  },
};
</script>
