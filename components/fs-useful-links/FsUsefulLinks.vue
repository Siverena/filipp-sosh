<template>
    <section class="fs-useful-links">
        <div class="container">
            <FsSectionTitles>
                <template v-slot:main> Полезные ссылки </template>
            </FsSectionTitles>
            <div class="fs-useful-links__loader" v-if="loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="fs-useful-links__wrapper" v-if="!loading">
                <div class="fs-useful-links__items" v-for="item in getLinks">
                    <NuxtLink
                        v-if="item.slug !== ''"
                        :to="`/${item.slug}`"
                        class="fs-useful-links__link"
                    >
                        <img :src="item.img" :alt="item.bannerTitle" />
                    </NuxtLink>
                    <a
                        v-if="item.slug === ''"
                        :href="item.ref"
                        class="fs-useful-links__link"
                    >
                        <img :src="item.img" :alt="item.bannerTitle" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./fs-useful-links.js"></script>
