<template>
    <div class="fs-objects-slider">
        <div class="fs-objects-slider__images">
            <div v-for="(image, index) in arrCabinet.photos" :key="index">
                <div
                    class="fs-objects-slider__images-item"
                    v-if="index === currentSlide"
                >
                    <img :src="image" alt="Фото кабинета" />
                </div>
            </div>
        </div>
        <div
            class="fs-objects-slider__nav"
            :class="{ 'fs-objects-slider__nav--rev': inCabinet % 2 }"
            v-if="slidesCount > 1"
        >
            <div class="fs-objects-slider__count">
                {{ currentSlide + 1 }} / {{ slidesCount }}
            </div>
            <FsBtnSlidesPrev
                @click="prevSlide"
                :class="{ 'fs-objects-slider__btn--rev': inCabinet % 2 }"
            />
            <FsBtnSlidesNext
                @click="nextSlide"
                :class="{ 'fs-objects-slider__btn--rev': inCabinet % 2 }"
            />
        </div>
    </div>
</template>
<script src="./fs-objects-slider.js"></script>
