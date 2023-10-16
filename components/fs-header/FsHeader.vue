<template>
    <clientOnly>
        <header class="fs-header no-tab">
            <div class="fs-header__top container">
                <FsLogotype class="fs-header__logo" tabindex="0" />
                <FsNav class="fs-header__nav" />
                <p
                    class="fs-header__btn fs-link fs-link--base"
                    @click.stop="openOrder"
                    @keydown.enter="openOrder"
                    tabindex="0"
                >
                    Задать вопрос
                </p>
                <div v-if="getIsAuthChecked" class="fs-header__auth-wrapper">
                    <FsUserNav v-if="Object.keys(getUser).length" />
                    <FsLogin v-else class="fs-header__login" />
                </div>
                <FsBurger
                    class="fs-header__burger"
                    tabindex="0"
                    @click.stop="openMobMenu"
                    @keydown.enter="openMobMenu"
                />
            </div>
            <div class="fs-header__bottom" v-if="currentUrl === 'index'">
                <FsInfo />
            </div>
        </header>
    </clientOnly>
</template>
<script src="./fs-header.js"></script>
