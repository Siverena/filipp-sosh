<template>
    <div class="fs-user-nav">
        <div class="fs-user-nav__photo" @click="toggleMenu">
            <img v-if="getUser.avatar" :src="getUser.avatar" alt="" />
        </div>
        <div class="fs-user-nav__menu" v-if="isMenuOpen" @click="toggleMenu">
            <ul class="fs-user-nav__list">
                <li class="fs-user-nav__item">
                    <NuxtLink to="/personal" class="fs-user-nav__link"
                        >Личный кабинет</NuxtLink
                    >
                </li>
                <li class="fs-user-nav__item" v-if="getUser.isTeacher">
                    <NuxtLink to="/personal/questions" class="fs-user-nav__link"
                        >Вопросы администрации</NuxtLink
                    >
                </li>
                <li class="fs-user-nav__item" v-if="getUser.isTeacher">
                    <NuxtLink
                        to="http://localhost:7777/admin/login"
                        class="fs-user-nav__link"
                        target="_blank"
                        >Администрирование</NuxtLink
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
