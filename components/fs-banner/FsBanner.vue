<template>
    <div class="fs-banner">
        <div class="fs-banner__content">
            <p class="fs-banner__text">
                Для оптимизации работы сайта и его взаимодействия с
                пользователями мы используем файлы cookie. Продолжая
                использовать сайт, вы соглашаетесь с использование файлов
                cookie. Если вы не хотите использовать cookie, вы можете
                отключить их в настройках безопасности вашего браузера.
            </p>
        </div>
        <div class="fs-banner__btns">
            <FsBtn class="fs-btn--dark fs-banner__btn" @click="acceptCookies"
                >Принять</FsBtn
            >
        </div>
    </div>
</template>
<script src="./fs-banner.js"></script>
