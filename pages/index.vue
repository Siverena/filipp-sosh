<template>
  <main class="no-tab">
    <Head>
      <Title>Главная | МКОУ ФИЛИППОВСКАЯ СОШ</Title>
    </Head>
    <div class="fs-content">
      <!-- <FsGosBanner /> -->
      <div class="container">
        <FsHistorySchool />
      </div>
      <FsAchievements />
      <div class="container">
        <clientOnly>
          <FsIndexGallery />
        </clientOnly>
      </div>
      <FsServices />
    </div>
  </main>
</template>
