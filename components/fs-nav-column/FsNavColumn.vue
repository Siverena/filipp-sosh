<template>
    <nav class="fs-footer__nav fs-nav-column">
        <ul class="fs-nav-column__list">
            <li
                class="fs-nav-column__item"
                v-for="(item, key) in getMenuNavLinks"
                :key="key"
            >
                <NuxtLink class="fs-nav-column__link" :to="item.link">{{
                    item.name
                }}</NuxtLink>
                <div
                    @click.stop="toggleMenu(key)"
                    @keydown.enter="toggleMenu(key)"
                    v-if="item.child"
                    class="fs-nav-column__arrow"
                    tabindex="0"
                    :class="{
                        'fs-nav__arrow--open': currentMenu === key,
                    }"
                >
                    <FsCheckMarkDown />
                </div>
                <ul
                    class="fs-nav-column__child-list"
                    :key="key"
                    v-if="currentMenu === key && item.child"
                >
                    <li
                        class="fs-nav-column__child-item"
                        v-for="(item, key) in item.child"
                        :key="key"
                    >
                        <NuxtLink
                            class="fs-nav-column__child-link"
                            :to="item.link"
                            >{{ item.name }}</NuxtLink
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script src="./fs-nav-column.js"></script>
