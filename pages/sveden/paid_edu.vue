<template>
  <section class="fs-paid-edu">
    <Head>
      <Title>Платные образовательные услуги | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="container">
      <FsSectionTitles class="fs-auth__title">
        <template v-slot:main>Платные образовательные услуги</template>
      </FsSectionTitles>

      <FsSvedenUniversal :content="content"></FsSvedenUniversal>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      content: [{ answer: 'не оказываются' }],
    };
  },
};
</script>
