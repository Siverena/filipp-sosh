<template>
    <ul class="fs-nav">
        <li
            class="fs-nav__item"
            v-for="(item, key) in getMenuNavLinks"
            :key="key"
        >
            <NuxtLink
                class="fs-nav__link"
                :to="item.link"
                :class="getClassByRoute('fs-nav__link')"
            >
                <span>{{ item.name }}</span>
            </NuxtLink>
            <div
                @click.stop="toggleMenu(key)"
                v-if="item.child"
                class="fs-nav__arrow"
                :class="
                    getClassByRoute('fs-nav__arrow') +
                    ' ' +
                    getClassByCurrentMenu(key)
                "
                @keydown.enter="toggleMenu(key)"
                tabindex="0"
            >
                <FsCheckMarkDown v-if="item.child" />
            </div>
            <ul
                class="fs-nav__child-list"
                :class="{
                    'fs-nav__child-list--index': this.$route.name === 'index',
                    'fs-nav__child-list--error': !this.$route.name,
                }"
                :key="key"
                v-if="currentMenu === key && item.child"
            >
                <li
                    class="fs-nav__child-item"
                    v-for="(item, key) in item.child"
                    :key="key"
                >
                    <NuxtLink
                        class="fs-nav__child-link"
                        :to="item.link"
                        :class="getClassByRoute('fs-nav__child-link')"
                        >{{ item.name }}</NuxtLink
                    >
                </li>
            </ul>
        </li>
    </ul>
</template>
<script src="./fs-nav.js"></script>
