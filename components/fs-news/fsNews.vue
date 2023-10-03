<template>
  <div class="fs-news">
    <div class="container">
      <FsSectionTitles>
        <template v-slot:main>Последние новости</template>
        <template v-slot:dop
          >В нашей школе учаться только на четверки и пятерки
        </template>
      </FsSectionTitles>
      <div class="fs-news__loader" v-if="loading">
          <div class="fs-news__loader-item">
            <div>
              <div class="fs-news__loader-img"></div>
              <div class="fs-news__loader-title"></div>
              <div class="fs-news__loader-text"></div>
            </div>

            <div class="fs-news__loader-more"></div>
          </div>
          <div class="fs-news__loader-item">
            <div>
              <div class="fs-news__loader-img"></div>
              <div class="fs-news__loader-title"></div>
              <div class="fs-news__loader-text"></div>
            </div>
            <div class="fs-news__loader-more"></div>
          </div>
          <div class="fs-news__loader-item">
            <div>
              <div class="fs-news__loader-img"></div>
              <div class="fs-news__loader-title"></div>
              <div class="fs-news__loader-text"></div>
            </div>
            <div class="fs-news__loader-more"></div>
          </div>
      </div>
      <div class="fs-news__wrapper">
        <article
          class="fs-news__article"
          v-for="item in getLastNews"
          :key="item.id"
        >
          <div class="fs-news__title-wrapper">
            <div class="fs-news__image">
              <img :src="item.mainImg" />
            </div>
          </div>
          <div class="fs-news__items-wrapper">
            <p class="fs-h2 fs-news__title">{{ item.title }}</p>
            <span class="fs-news__text">
              {{ item.description }}
            </span>
            <span class="fs-news__reference">
              <NuxtLink
                :to="`news/${item.id}`"
                class="fs-link fs-link--base fs-news__link"
                >Читать далее</NuxtLink
              >
            </span>
          </div>
        </article>
      </div>
      <div class="fs-news__button-container">
        <NuxtLink to="/news" class="fs-btn fs-btn--dark">Все новости</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script src="./fs-news.js"></script>
