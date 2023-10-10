<template>
    <div class="fs-user-nav">
        <div class="fs-user-nav__photo" @click="toggleMenu">
            <!-- <img src="@/assets/img/fs-person/person.png" alt="" /> -->
        </div>
        <div class="fs-user-nav__menu" v-if="isMenuOpen">
            <ul class="fs-user-nav__list">
                <li class="fs-user-nav__item">
                    <NuxtLink to="/personal" class="fs-user-nav__link"
                        >Личный кабинет</NuxtLink
                    >
                </li>
                <li class="fs-user-nav__item">
                    <span class="fs-user-nav__link" @click="exit">Выход</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./fs-user-nav"></script>
