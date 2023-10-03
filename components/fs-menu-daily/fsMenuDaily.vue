
import InputText from 'primevue/inputtext';
<template>
    <div class="fs-menu">
        <FsSectionTitles>
            <template v-slot:main>Меню на {{ getMenu[0].publDate }}</template>
        </FsSectionTitles>
        <div class="fs-menu__wrapper">
            <div class="fs-menu__item" v-for="item in getMenu">
            <div>
                <FsSectionTitles>
                    <template v-slot:main>{{ item.title }} - {{ item.price }} {{ item.currency }}</template>
                </FsSectionTitles>
                <p>{{ item.dishes }} - {{ item.weight }}</p>
            </div>

            <div class="fs-menu__image">
                <img src="../../public/images/image_17.png" alt="">
            </div>
            </div>
        </div>


    </div>
</template>
<script src="./fs-menu-daily"></script>