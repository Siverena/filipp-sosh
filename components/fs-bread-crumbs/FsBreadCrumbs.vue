<template>
    <div class="fs-breadcrumbs" v-if="showBreadcrumbs && !loading">
        <div class="fs-breadcrumbs__item">
            <NuxtLink class="fs-breadcrumbs__link" to="/">Главная</NuxtLink>
        </div>
        <div
            v-for="(link, key) in links"
            :key="key"
            class="fs-breadcrumbs__item"
        >
            <div class="fs-breadcrumbs__delimiter"></div>
            <NuxtLink
                class="fs-breadcrumbs__link"
                v-if="key !== links.length - 1"
                :to="link.link"
                >{{ link.name }}</NuxtLink
            >
            <span v-else>
                {{ link.name }}
            </span>
        </div>
    </div>
</template>
<script src="./fs-bread-crumbs.js"></script>
