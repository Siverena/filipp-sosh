<template>
    <div class="fs-section-slider" v-if="widthComputed">
        <div class="fs-section-slider__img-wrap">
            <div
                class="fs-section-slider__img"
                v-for="(img, i) in images"
                :key="i"
            >
                <a :href="img.documentSource" target="_blank">
                    <img :src="img.documentSource" :alt="img.name"
                /></a>
            </div>
        </div>
        <div
            class="fs-section-slider__images-btn"
            :class="{
                'fs-section-slider__images-btn--visible':
                    (isDesktopVersion && imagesCount > 5) ||
                    (isLaptopVersion && imagesCount > 4) ||
                    (isTabVersion && imagesCount > 3) ||
                    (isMobileVersion && imagesCount > 2),
            }"
        >
            <div class="fs-index-gallery__count">
                {{ firstImg + 1 }} / {{ imagesCount }}
            </div>
            <FsBtnSlidesPrev @click="prevImg" />
            <FsBtnSlidesNext @click="nextImg" />
        </div>
    </div>
</template>
<script src="./fs-section-slider.js"></script>
