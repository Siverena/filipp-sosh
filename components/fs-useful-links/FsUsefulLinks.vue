<template>
    <div class="fs-useful-links">
        <!-- {{ getLinks }} -->
        <div class="fs-useful-links__items" v-for="item in getLinks">
        <span>{{ item.bannerTitle }}</span>
        <nuxt-link v-if="item.slug !== ''" :to="`/banner/${item.slug}`">
        <img src="../../public/images/fs-news/img.jpeg" alt="foto">
        </nuxt-link>
        <a v-if="item.slug === ''" :href="item.ref">
            <img src="../../public/images/fs-news/img.jpeg" alt="foto">
        </a>
    </div>
    </div>
</template>
<script src="./fs-useful-links.js"></script>

