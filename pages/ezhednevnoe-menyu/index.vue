<template>
  <div class="fs-ezhednevnoe-menyu">
    <Head>
      <Title
        >Организация питания в образовательной организации | МКОУ ФИЛИППОВСКАЯ
        СОШ</Title
      >
    </Head>
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main>
          Организация питания в образовательной организации
        </template>
      </FsSectionTitles>
    </div>
    <div class="fs-ezhednevnoe-menyu__content">
      <FsMenuDaily class="container" />
      <FsFaq class="container" />
      <FsQuestionsForm />
      <FsSection class="container" />
    </div>
  </div>
</template>
