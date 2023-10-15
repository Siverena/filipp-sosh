<template>
    <section class="fs-useful-links">
        <div class="container">
        <FsSectionTitles>
          <template v-slot:main> Полезные ссылки </template>
        </FsSectionTitles>
        <div class="fs-useful-links__wrapper">
            <div class="fs-useful-links__items" v-for="item in getLinks">
            <nuxt-link v-if="item.slug !== ''" :to="`./${item.slug}`">
            <img src="../../public/images/fs-news/img.jpeg" :alt="item.bannerTitle">
            </nuxt-link>
            <a v-if="item.slug === ''" :href="item.ref">
                <img src="../../public/images/fs-news/img.jpeg" alt="foto">
            </a>
        </div>
        </div>
    </div>
    </section>

</template>
<script src="./fs-useful-links.js"></script>

