<template>
    <section class="fs-universal">
      <Head>
        <Title>{{ title }}</Title>
      </Head>
      <div class="container">
        <FsSectionTitles>
          <template v-slot:h1> {{ articleTitle }} </template>
        </FsSectionTitles>
        <div v-for="item in content" class="fs-universal__items-wrapper">
          <span>
            {{ item.text }}
          </span>
          <p>
            {{ item.answer }}
          </p>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    props: ['title', 'content', 'article-title']
  }
  </script>