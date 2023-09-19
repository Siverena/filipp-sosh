<template>
  <div class="fs-news">
    <FsSectionTitles class="fs-news__head-wrapper">
        <template v-slot:h1>Последние новости</template>
        <template v-slot:dop>В нашей школе учаться только на четверки и пятерки </template>
    </FsSectionTitles>
      <div class="fs-news__wrapper">
          <article class="fs-news__article" v-for="item in news" :key="item.id">
            <div class="fs-news__content-container">
              <div class="fs-news__title-wrapper">
              <div class="fs-news__image">
                  <img :src="item.mainImg">
              </div>
              <h3 class="fs-news__title">{{ item.title }}</h3>
            </div>
              <div class="fs-news__items-wrapper">
                  <span> {{ item.text[0].substr(0,175) }} </span>
                  <span class="fs-news__reference">
                    <a :href="`news/${item.id}`">Читать далее</a>
                  </span>
              </div>
            </div>
          </article>
      </div>
      <div class="fs-news__button-container">
        <button class="fs-news__show-button" @click="console.log(this.showAll=!this.showAll)">{{ this.showAll ? 'Скрыть' : 'Все новости' }}</button>
      </div>
  </div>
</template>


<script src="./fs-news.js"></script>